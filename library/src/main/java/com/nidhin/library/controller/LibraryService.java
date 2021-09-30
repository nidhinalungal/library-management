package com.nidhin.library.controller;


import com.nidhin.library.controller.domain.IssueRequest;
import com.nidhin.library.controller.domain.LogDto;
import com.nidhin.library.controller.domain.LogListResponse;
import com.nidhin.library.entity.Book;
import com.nidhin.library.entity.Log;
import com.nidhin.library.entity.User;
import com.nidhin.library.exception.LogNotFoundException;
import com.nidhin.library.exception.NotEnoughAvailabilityException;
import com.nidhin.library.repository.BookRepository;
import com.nidhin.library.repository.LogRepository;
import com.nidhin.library.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Date;
import java.util.List;

@Service
public class LibraryService {
    @Autowired
    LogRepository logRepository;
    @Autowired
    BookRepository bookRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    WebClient.Builder webClientBuilder;

    public LogDto issueBook(final IssueRequest request) throws NotEnoughAvailabilityException {

        final Book book = webClientBuilder.build()
                .get()
                .uri("http://books-service/api/books/find/" + request.getBookId())
                .retrieve()
                .bodyToMono(Book.class)
                .block();

        final User user = webClientBuilder.build()
                .get()
                .uri("http://users-service/api/users/find/" + request.getUserId())
                .retrieve()
                .bodyToMono(User.class)
                .block();

        assert user != null;
        assert book != null;
        if (user.getAvailable() < 1L || book.getAvailable() < 1L) {
            throw new NotEnoughAvailabilityException("not enough books or slots available");
        }
        user.decreaseAvailableSlots();
        userRepository.save(user);
        book.decreaseAvailableCopies();
        bookRepository.save(book);

        Log log = new Log();
        log.setActive(Boolean.TRUE);
        log.setBookId(book.getId());
        log.setUserId(user.getId());
        log.setIssuedOn(new Date());
        log = logRepository.save(log);

        return getDtoFrom(log);
    }

    public LogDto returnBook(final Long id) throws LogNotFoundException {
        final Log log = logRepository.findById(id).orElse(null);
        if (log == null) {
            throw new LogNotFoundException("could not find log with id " + id);
        }
        if (log.getActive() == Boolean.FALSE) {
            throw new LogNotFoundException("this item has already returned with id " + id);
        }

        final Book book = webClientBuilder.build()
                .get()
                .uri("http://localhost:8082/api/books/find/" + log.getBookId())
                .retrieve()
                .bodyToMono(Book.class)
                .block();

        final User user = webClientBuilder.build()
                .get()
                .uri("http://localhost:8081/api/users/find/" + log.getUserId())
                .retrieve()
                .bodyToMono(User.class)
                .block();

        assert user != null;
        assert book != null;
        user.increaseAvailableSlots();
        userRepository.save(user);
        book.increaseAvailableCopies();
        bookRepository.save(book);

        log.setActive(Boolean.FALSE);
        log.setReturnedOn(new Date());
        logRepository.save(log);

        return getDtoFrom(log);
    }

    private LogDto getDtoFrom(final Log log) {
        final LogDto logDto = new LogDto();
        logDto.setId(log.getId());
        logDto.setActive(log.getActive());
        logDto.setBookId(log.getBookId());
        logDto.setUserId(log.getUserId());
        logDto.setIssuedOn(log.getIssuedOn());
        logDto.setReturnedOn(log.getReturnedOn());
        return logDto;
    }

    public LogListResponse findActiveLogs(final Long userId) {
        final List<Log> logs = logRepository.findByUserIdAndActiveTrue(userId);
        return new LogListResponse(logs);
    }

    public LogListResponse findAllLogs(final Long userId) {
        final List<Log> logs = logRepository.findAllByUserId(userId);
        return new LogListResponse(logs);
    }


//
//    public List<UserDto> getAll() {
//        final List<User> userList = userRepository.findAll();
//        return toDtoList(userList);
//    }
//
//
//    private List<UserDto> toDtoList(final List<User> userList) {
//        Type listType = new TypeToken<List<UserDto>>() {
//        }.getType();
//        return new ModelMapper().map(userList, listType);
//    }
//
//    public UserDto find(final String registerNumber) throws UserNotFoundException {
//        final User user = userRepository.findByRegisterNumber(registerNumber);
//        if (user == null) {
//            throw new UserNotFoundException("user doesn't exist with RegisterNumber " + registerNumber);
//        }
//        final UserDto userDto = new UserDto();
//        userDto.setId(user.getId());
//        userDto.setRegisterNumber(user.getRegisterNumber());
//        userDto.setFirstName(user.getFirstName());
//        userDto.setLastName(user.getLastName());
//        userDto.setEmailId(user.getEmailId());
//        userDto.setDepartment(user.getDepartment());
//        userDto.setSemester(user.getSemester());
//        userDto.setSlots(user.getSlots());
//        userDto.setAvailable(user.getAvailable());
//        userDto.setCreatedOn(user.getCreatedOn());
//        return userDto;
//    }
}
