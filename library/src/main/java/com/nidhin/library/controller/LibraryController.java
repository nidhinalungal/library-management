package com.nidhin.library.controller;


import com.nidhin.library.controller.domain.IssueRequest;
import com.nidhin.library.controller.domain.LogDto;
import com.nidhin.library.controller.domain.LogListResponse;
import com.nidhin.library.controller.security.MyUserDetailsService;
import com.nidhin.library.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class LibraryController {
    @Autowired
    LibraryService libraryService;
    @Autowired
    MyUserDetailsService adminService;

    @GetMapping(path = "/api/command/issue")
    public ResponseEntity<LogDto> issueBook()
            throws Exception {
        final IssueRequest request = new IssueRequest();
        request.setUserId(1L);
        request.setBookId(1L);


        final LogDto logDto = libraryService.issueBook(request);
        return new ResponseEntity<LogDto>(logDto, HttpStatus.CREATED);
    }

    @GetMapping(path = "/api/command/return/{id}")
    public ResponseEntity<LogDto> returnBook(@PathVariable Long id)
            throws Exception {

        final LogDto logDto = libraryService.returnBook(id);
        return new ResponseEntity<LogDto>(logDto, HttpStatus.OK);
    }


    @GetMapping(path = "/api/logs/{userId}/active")
    public ResponseEntity<LogListResponse> findActiveLogs(@PathVariable Long userId) throws Exception {

        LogListResponse activeLogs = libraryService.findActiveLogs(userId);
        return new ResponseEntity<LogListResponse>(activeLogs, HttpStatus.OK);
    }


    @GetMapping(path = "/api/logs/{userId}/all")
    public ResponseEntity<LogListResponse> findAllLogs(@PathVariable Long userId) throws Exception {

        LogListResponse activeLogs = libraryService.findAllLogs(userId);
        return new ResponseEntity<LogListResponse>(activeLogs, HttpStatus.OK);
    }


    @GetMapping("/api/admin")
    public String hello(@CurrentSecurityContext(expression = "authentication.name")
                                String username) {
        return "Hello, " + username + "!";
    }


    @GetMapping(path = "/api/admins")
    public ResponseEntity<List<Admin>> getAll() throws Exception {

        final List<Admin> userDtoList = adminService.getAll();
        return new ResponseEntity<List<Admin>>(userDtoList, HttpStatus.OK);
    }

    @GetMapping(path = "/basicauth")
    public AuthenticationBean authenticate() {
        return new AuthenticationBean("You are authenticated");
    }
}