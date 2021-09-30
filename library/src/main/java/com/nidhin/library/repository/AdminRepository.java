package com.nidhin.library.repository;

import com.nidhin.library.entity.Admin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Long> {

    List<Admin> findAll();

    Admin findByUsername(String userName);

}