package com.nidhin.users.repository;

import com.nidhin.users.entity.User;
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