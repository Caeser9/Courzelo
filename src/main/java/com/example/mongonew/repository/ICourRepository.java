package com.example.mongonew.repository;

import com.example.mongonew.entities.Cour;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


public interface ICourRepository extends MongoRepository<Cour,Integer> {
    public List<Cour> findByDateYearBetween (int d1 , int d2);
    public List<Cour> findByIdCourBetween(int a,int b);
}
