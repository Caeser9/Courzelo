package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.ERole;
import com.example.courzeloproject.Entite.Profile;
import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Service.IProfileService;
import com.example.courzeloproject.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    IUserService userService ;

    @GetMapping("/user/{role}")
    public List<User> getFormateur(@PathVariable("role") ERole role){
        return userService.getUsersByRole(role) ;
    }
    @GetMapping("/auth/connect/{verificationCode}")
    public boolean verifyUser(@PathVariable String verificationCode) {
        return userService.verify(verificationCode) ;

    }

//    @PostMapping("/activerUser/{id}")
//    public void activerUser(@PathVariable Long id) {
//        userService.activerUser(id);
//    }
//
//    @PostMapping("/desactiverUser/{id}")
//    public void desactiverUser(@PathVariable Long id) {
//        userService.desactiverUser(id);
//    }
//

}
