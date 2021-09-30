package com.nidhin.books.controller;


import com.nidhin.books.controller.domain.BookDto;
import com.nidhin.books.entity.Book;
import com.nidhin.books.exception.BookNotFoundException;
import com.nidhin.books.exception.DuplicateEntryException;
import com.nidhin.books.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;


    public BookDto createBook(@Valid BookDto bookDto) throws DuplicateEntryException {
        final Long existing = bookRepository.countByTitle(bookDto.getTitle());
        if (existing > 0) {
            throw new DuplicateEntryException("book with this Title already exists");
        }
        Book book = new Book();
        book.setId(bookDto.getId());
        book.setTitle(bookDto.getTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setDescription(bookDto.getDescription());
        book.setVolume(bookDto.getVolume());
        book.setShelfNumber(bookDto.getShelfNumber());
        book.setCopies(bookDto.getCopies());
        book.setAvailable(bookDto.getAvailable());
        book.setCreatedOn(new Date());
        book = bookRepository.save(book);
        bookDto.setId(book.getId());
        return bookDto;
    }

    public BookDto updateBook(final BookDto bookDto) throws BookNotFoundException {
        final Book existing = bookRepository.findById(bookDto.getId()).orElse(null);
        if (existing == null) {
            throw new BookNotFoundException("book with id " + bookDto.getId() + "doesn't exist");
        }
        existing.setId(bookDto.getId());
        existing.setTitle(bookDto.getTitle());
        existing.setAuthor(bookDto.getAuthor());
        existing.setDescription(bookDto.getDescription());
        existing.setVolume(bookDto.getVolume());
        existing.setShelfNumber(bookDto.getShelfNumber());
        existing.setCopies(bookDto.getCopies());
        existing.setAvailable(bookDto.getAvailable());
        existing.setCreatedOn(new Date());
        return getDtoFrom(bookRepository.save(existing));
    }

    public List<BookDto> getAll() {
        final List<Book> bookList = bookRepository.findAll();
        return toDtoList(bookList);
    }

    public BookDto find(final String title) throws BookNotFoundException {
        final Book book = bookRepository.findByTitle(title);
        if (book == null) {
            throw new BookNotFoundException("book doesn't exist with title " + title);
        }
        return getDtoFrom(book);
    }

    public BookDto findById(final Long id) throws BookNotFoundException {
        final Book book = bookRepository.findById(id).orElse(null);
        if (book == null) {
            throw new BookNotFoundException("book doesn't exist with id " + id);
        }
        return getDtoFrom(book);
    }

    private List<BookDto> toDtoList(final List<Book> bookList) {
        Type listType = new TypeToken<List<BookDto>>() {
        }.getType();
        return new ModelMapper().map(bookList, listType);
    }

    private BookDto getDtoFrom(final Book book) {
        final BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setTitle(book.getTitle());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setDescription(book.getDescription());
        bookDto.setVolume(book.getVolume());
        bookDto.setShelfNumber(book.getShelfNumber());
        bookDto.setCopies(book.getCopies());
        bookDto.setAvailable(book.getAvailable());
        bookDto.setCreatedOn(book.getCreatedOn());
        return bookDto;
    }
}
