package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.ERole;
import com.example.courzeloproject.Entite.Role;
import com.example.courzeloproject.Entite.User;
import com.example.courzeloproject.Repository.RoleRepo;
import com.example.courzeloproject.Repository.UserRepo;
import com.example.courzeloproject.payload.request.SignupRequest;
import com.example.courzeloproject.payload.response.MessageResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/admin")
public class UserController {
    @Autowired
    UserRepo userRepository;

    @Autowired
    RoleRepo roleRepository;

    @Autowired
    PasswordEncoder encoder;
    //Participant = creation du compt :
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_SUPERADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "participant":
                        Role PRole = roleRepository.findByName(ERole.ROLE_PARTICIPANT)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(PRole);

                        break;
                    case "formateur":
                        Role FRole = roleRepository.findByName(ERole.ROLE_FORMATEUR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(FRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_SUPERADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

}
