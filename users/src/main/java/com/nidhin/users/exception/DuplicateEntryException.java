package com.nidhin.users.exception;

public class DuplicateEntryException extends Exception {

    private static final long serialVersionUID = 1L;

    public DuplicateEntryException(String message) {
        super(message);
    }
}
