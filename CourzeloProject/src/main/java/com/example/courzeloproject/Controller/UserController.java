package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:61724")

public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addUser")
    public String AddUser(@RequestBody User user) {
        userRepository.save(user);
        return "Added Successfully";
    }
}