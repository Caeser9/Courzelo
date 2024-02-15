package com.example.courzeloproject.Repository;

import com.example.courzeloproject.Entite.Reclamtion;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReclamationRepository extends MongoRepository<Reclamtion, Integer> {

}
