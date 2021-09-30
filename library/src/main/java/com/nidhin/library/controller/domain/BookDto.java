package com.nidhin.library.controller.domain;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Data
public class BookDto {
    private Long id;
    @NotEmpty(message = "Title can not be empty")
    private String title;
    private String author;
    private String description;
    private String volume;
    private String shelfNumber;
    private Long copies;
    private Long available;
    private Date createdOn;
}