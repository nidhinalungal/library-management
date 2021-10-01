package com.nidhin.users.controller;


import com.nidhin.users.controller.domain.UserDto;
import com.nidhin.users.exception.DataValidationException;
import com.nidhin.users.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(path = "/api/command/user")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto, BindingResult bindingResult)
            throws Exception {

        if (bindingResult.hasErrors()) {
            throw new DataValidationException(bindingResult);
        }

        userDto = userService.createUser(userDto);
        return new ResponseEntity<UserDto>(userDto, HttpStatus.CREATED);
    }


    @PutMapping(path = "/api/command/user/{id}")
    public ResponseEntity<UserDto> updateUser(UserDto userDto)
            throws Exception {

        userDto = userService.updateUser(userDto);
        return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
    }

    @GetMapping(path = "/api/users")
    public ResponseEntity<List<UserDto>> getAll() throws Exception {

        final List<UserDto> userDtoList = userService.getAll();
        return new ResponseEntity<List<UserDto>>(userDtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/api/users/{registerNumber}")
    public ResponseEntity<UserDto> find(@PathVariable String registerNumber) throws Exception {

        final UserDto userDto = userService.find(registerNumber);
        return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
    }

    @GetMapping(path = "/api/users/find/{id}")
    public ResponseEntity<UserDto> findById(@PathVariable Long id) throws Exception {

        final UserDto userDto = userService.findById(id);
        return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
    }

    @DeleteMapping(value = "/api/users/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id) throws UserNotFoundException {

        if (userService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userService.delete(id);

        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}