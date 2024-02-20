package com.example.mongonew.repository;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Niveau;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ICourRepository extends MongoRepository<Cour,String> {
    public List<Cour> findByDateYearBetween (int d1 , int d2);
    List<Cour> findAllByOrderByDateDesc();
    List<Cour> findAllByNomCour(String  nom);
}
