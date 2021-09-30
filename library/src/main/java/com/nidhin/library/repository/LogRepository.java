package com.nidhin.library.repository;

import com.nidhin.library.entity.Log;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface LogRepository extends CrudRepository<Log, Long> {
    List<Log> findAllByUserId(Long userId);

    List<Log> findByUserIdAndActiveTrue(Long userId);
}