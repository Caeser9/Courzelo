package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Faculte;
import com.example.courzeloproject.Repository.FaculteRepository;
import com.example.courzeloproject.Repository.PoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class FaculteService implements IFaculteService{
@Autowired
    FaculteRepository faculteRepository;

    @Override
    public Faculte addFaculte(Faculte faculte) {
        return faculteRepository.save(faculte);
    }

    @Override
    public void deleteFaculte(String id) {
        faculteRepository.deleteById(id);
    }

    @Override
    public List<Faculte> getAllFacultes() {
        return faculteRepository.findAll();
    }

    @Override
    public Faculte updatefaculte(Faculte faculte, String id) {
        Faculte newfaculte=faculteRepository.findFaculteByCodeFaculte(id);
        newfaculte.setNom(faculte.getNom());
        newfaculte.setAdresse(faculte.getAdresse());
        newfaculte.setDescription(faculte.getDescription());
        newfaculte.setTelephone((faculte.getTelephone()));
        newfaculte.setPhotoUrl(faculte.getPhotoUrl());

        return faculteRepository.save(newfaculte);
    }
}
