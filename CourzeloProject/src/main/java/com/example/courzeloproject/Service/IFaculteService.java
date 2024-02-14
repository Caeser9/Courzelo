package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Faculte;

import java.util.List;

public interface IFaculteService {
    public Faculte addFaculte(Faculte faculte);
    public void deleteFaculte(String id);
    public List<Faculte> getAllFacultes();
    Faculte updatefaculte(Faculte faculte,String id);
}
