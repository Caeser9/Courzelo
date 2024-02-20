package com.example.mongonew.services;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.User;

import java.util.List;

public interface ICourService {
    public Cour ajouterCour(Cour c);
    public Cour modifierCour(Cour c ,String idc);
    public void supprimerCour(String id);
    public List<Cour> getCour();
    List<Cour> findAllByOrderByDateDesc();
    List<Cour> findAllByNomCour(String  nom);

}
