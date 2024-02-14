package com.example.mongonew.repository;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends MongoRepository<User,Integer> {
}
