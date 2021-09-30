package com.nidhin.users.exception;

import org.springframework.validation.Errors;

public class DataValidationException extends Exception {

    private static final long serialVersionUID = 1L;

    private Errors errors;

    public DataValidationException(String message, Errors errors) {
        super(message);
        this.errors = errors;
    }

    public DataValidationException(Errors errors) {
        super("Exception occurred");
        this.errors = errors;
    }

    public Errors getErrors() {
        return errors;
    }

}