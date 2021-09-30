package com.nidhin.library.repository;

import com.nidhin.library.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface UserRepository extends CrudRepository<User, Long> {
    Long countByRegisterNumber(String registerNumber);

    List<User> findAll();

    User findByRegisterNumber(String registerNumber);
}