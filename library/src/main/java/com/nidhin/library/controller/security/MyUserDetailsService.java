package com.nidhin.library.controller.security;

import com.nidhin.library.entity.Admin;
import com.nidhin.library.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private AdminRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin = repository.findByUsername(username);
        if (admin == null) {
            throw new UsernameNotFoundException("user not found");
        }
        return new AdminPrincipal(admin);
    }

    public List<Admin> getAll() {
        final List<Admin> admins = repository.findAll();
        return (admins);
    }
}
