package com.example.courzeloproject.Repository;

import com.example.courzeloproject.Entite.Blog;
import com.example.courzeloproject.Entite.Interactions;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InteractionsRepository extends MongoRepository<Interactions, String> {
}
