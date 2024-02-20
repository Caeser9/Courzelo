package com.example.mongonew.repository;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Ressource;
import io.github.classgraph.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRessourceRepository extends MongoRepository<Ressource,String> {
}
