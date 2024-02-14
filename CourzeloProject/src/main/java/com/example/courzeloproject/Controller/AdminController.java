package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
//    @Autowired
//    IUserService userService;
//
//    @PostMapping("/add")
//    public User addBloc(@RequestBody User u){
//        return userService.addUser(u) ;
//    }
}
