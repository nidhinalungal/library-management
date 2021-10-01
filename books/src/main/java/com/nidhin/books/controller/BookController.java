package com.nidhin.books.controller;


import com.nidhin.books.controller.domain.BookDto;
import com.nidhin.books.exception.BookNotFoundException;
import com.nidhin.books.exception.DataValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @PostMapping(path = "/api/command/book")
    public ResponseEntity<BookDto> createBook(@Valid @RequestBody BookDto bookDto, BindingResult bindingResult)
            throws Exception {

        if (bindingResult.hasErrors()) {
            throw new DataValidationException(bindingResult);
        }

        bookDto = bookService.createBook(bookDto);
        return new ResponseEntity<BookDto>(bookDto, HttpStatus.CREATED);
    }


    @PutMapping(path = "/api/command/books/{id}")
    public ResponseEntity<BookDto> updateBook(BookDto userDto)
            throws Exception {

        userDto = bookService.updateBook(userDto);
        return new ResponseEntity<BookDto>(userDto, HttpStatus.OK);
    }

    @GetMapping(path = "/api/books")
    public ResponseEntity<List<BookDto>> getAll() throws Exception {

        final List<BookDto> bookDtoList = bookService.getAll();
        return new ResponseEntity<List<BookDto>>(bookDtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/api/books/{title}")
    public ResponseEntity<BookDto> find(@PathVariable String title) throws Exception {

        final BookDto bookDto = bookService.find(title);
        return new ResponseEntity<BookDto>(bookDto, HttpStatus.OK);
    }

    @GetMapping(path = "/api/books/find/{id}")
    public ResponseEntity<BookDto> findById(@PathVariable Long id) throws Exception {

        final BookDto bookDto = bookService.findById(id);
        return new ResponseEntity<BookDto>(bookDto, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/books/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id) throws  BookNotFoundException {

        if (bookService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookService.delete(id);

        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}