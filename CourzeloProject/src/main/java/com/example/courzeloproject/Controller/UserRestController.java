package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.BlogRepository;
import com.example.courzeloproject.Repository.InteractionsRepository;
import com.example.courzeloproject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserRestController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/addUser")
    public String AddUser(@RequestBody User user){
        userRepository.save(user);
        return "Added Successfully";
    }

}
