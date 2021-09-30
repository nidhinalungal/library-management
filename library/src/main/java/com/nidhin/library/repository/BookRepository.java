package com.nidhin.library.repository;

import com.nidhin.library.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface BookRepository extends CrudRepository<Book, Long> {
    Long countByTitle(String title);

    List<Book> findAll();

    Book findByTitle(String title);
}