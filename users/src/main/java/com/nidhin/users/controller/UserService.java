package com.nidhin.users.controller;


import com.nidhin.users.controller.domain.UserDto;
import com.nidhin.users.entity.User;
import com.nidhin.users.exception.DuplicateEntryException;
import com.nidhin.users.exception.UserNotFoundException;
import com.nidhin.users.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public UserDto createUser(@Valid UserDto userDto) throws DuplicateEntryException {
        final Long existing = userRepository.countByRegisterNumber(userDto.getRegisterNumber());
        if (existing > 0) {
            throw new DuplicateEntryException("user with this RegisterNumber already exists");
        }
        User user = new User();
        user.setRegisterNumber(userDto.getRegisterNumber());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmailId(userDto.getEmailId());
        user.setDepartment(userDto.getDepartment());
        user.setSemester(userDto.getSemester());
        user.setSlots(userDto.getSlots());
        user.setAvailable(userDto.getAvailable());
        user.setCreatedOn(new Date());
        user = userRepository.save(user);
        userDto.setId(user.getId());
        return userDto;
    }

    public UserDto updateUser(final UserDto userDto) throws UserNotFoundException {
        final User existing = userRepository.findById(userDto.getId()).orElse(null);
        if (existing == null) {
            throw new UserNotFoundException("user with id" + userDto.getId() + "doesn't exist");
        }
        existing.setRegisterNumber(userDto.getRegisterNumber());
        existing.setFirstName(userDto.getFirstName());
        existing.setLastName(userDto.getLastName());
        existing.setEmailId(userDto.getEmailId());
        existing.setDepartment(userDto.getDepartment());
        existing.setSemester(userDto.getSemester());
        existing.setSlots(userDto.getSlots());
        existing.setAvailable(userDto.getAvailable());
        existing.setCreatedOn(userDto.getCreatedOn());
        return getDtoFrom(userRepository.save(existing));
    }

    public List<UserDto> getAll() {
        final List<User> userList = userRepository.findAll();
        return toDtoList(userList);
    }

    public UserDto find(final String registerNumber) throws UserNotFoundException {
        final User user = userRepository.findByRegisterNumber(registerNumber);
        if (user == null) {
            throw new UserNotFoundException("user doesn't exist with RegisterNumber " + registerNumber);
        }

        return getDtoFrom(user);
    }

    public UserDto findById(final Long id) throws UserNotFoundException {
        final User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            throw new UserNotFoundException("user doesn't exist with id " + id);
        }
        return getDtoFrom(user);
    }

    private List<UserDto> toDtoList(final List<User> userList) {
        Type listType = new TypeToken<List<UserDto>>() {
        }.getType();
        return new ModelMapper().map(userList, listType);
    }

    private UserDto getDtoFrom(final User user) {
        final UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setRegisterNumber(user.getRegisterNumber());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmailId(user.getEmailId());
        userDto.setDepartment(user.getDepartment());
        userDto.setSemester(user.getSemester());
        userDto.setSlots(user.getSlots());
        userDto.setAvailable(user.getAvailable());
        userDto.setCreatedOn(user.getCreatedOn());
        return userDto;
    }
}
