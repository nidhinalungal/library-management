package com.nidhin.books.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping
    public String hello(){
        return "Success Nidhin, yaay!!!!";
    }
}