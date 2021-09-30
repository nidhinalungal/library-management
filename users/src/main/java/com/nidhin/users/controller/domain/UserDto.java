package com.nidhin.users.controller.domain;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Data
public class UserDto {
    private Long id;
    @NotEmpty(message = "RegisterNumber can not be empty")
    private String registerNumber;
    private String firstName;
    private String lastName;
    private String emailId;
    private String department;
    private String semester;
    private Long slots;
    private Long available;
    private Date createdOn;
}