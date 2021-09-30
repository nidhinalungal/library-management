package com.nidhin.library.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "logs")
@Data
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "active")
    private Boolean active;

    @Column(name = "issued_on")
    private Date issuedOn;

    @Column(name = "returned_on")
    private Date returnedOn;
}
