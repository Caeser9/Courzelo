package com.example.courzeloproject.Repository;

import com.example.courzeloproject.Entite.Faculte;
import com.example.courzeloproject.Entite.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
}
