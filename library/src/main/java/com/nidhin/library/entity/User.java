package com.nidhin.library.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "register_number")
    private String registerNumber;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "department")
    private String department;

    @Column(name = "semester")
    private String semester;

    @Column(name = "slots")
    private Long slots;

    @Column(name = "available")
    private Long available;

    @Column(name = "created_on")
    private Date createdOn;

    public void decreaseAvailableSlots() {
        this.setAvailable(this.getAvailable() - 1L);
    }

    public void increaseAvailableSlots() {
        this.setAvailable(this.getAvailable() + 1L);
    }
}
