package com.example.courzeloproject.Repository;

import com.example.courzeloproject.Entite.Commentaire;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICommRepo  extends MongoRepository<Commentaire,String> {
    List<Commentaire> findAllByOrderByDateComm();
    List<Commentaire> findByFullname(String nom);
}
