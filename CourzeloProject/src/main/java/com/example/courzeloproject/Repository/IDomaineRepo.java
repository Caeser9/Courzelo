package com.example.courzeloproject.Repository;


import com.example.courzeloproject.Entite.Domaine;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDomaineRepo extends MongoRepository<Domaine,Integer> {

}
