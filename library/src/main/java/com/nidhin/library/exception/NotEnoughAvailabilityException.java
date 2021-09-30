package com.nidhin.library.exception;

public class NotEnoughAvailabilityException extends Exception {

    private static final long serialVersionUID = 1L;

    public NotEnoughAvailabilityException(String message) {
        super(message);
    }
}