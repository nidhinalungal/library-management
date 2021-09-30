package com.nidhin.library.controller.domain;

import lombok.Data;

import java.util.Date;

@Data
public class LogDto {
    private Long id;
    private Long userId;
    private Long bookId;
    private Boolean active;
    private Date issuedOn;
    private Date returnedOn;
}
