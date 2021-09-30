package com.nidhin.books.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity(name = "books")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "volume")
    private String volume;

    @Column(name = "shelf_number")
    private String shelfNumber;

    @Column(name = "copies")
    private Long copies;

    @Column(name = "available")
    private Long available;

    @Column(name = "created_on")
    private Date createdOn;
}
