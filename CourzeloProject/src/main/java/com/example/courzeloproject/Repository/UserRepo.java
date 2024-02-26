package com.example.courzeloproject.Repository;

import com.example.courzeloproject.Entite.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<User,Integer> {
    Optional<User> findByUsername(String username);
    User findById(String id) ;
    List<User>  findAllByRoles(String role) ;

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User getById(long l);
    User findByVerificationCode(String code);
}
