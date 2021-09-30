package com.nidhin.library.exception;

public class LogNotFoundException extends Exception {

    private static final long serialVersionUID = 1L;

    public LogNotFoundException(String message) {
        super(message);
    }
}