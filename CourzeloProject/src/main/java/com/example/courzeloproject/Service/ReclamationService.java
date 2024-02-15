package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Reclamtion;
import com.example.courzeloproject.Repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReclamationService implements IReclamationServicelmp {

    @Autowired
     ReclamationRepository reclamationRepository;

    @Override
    public Reclamtion addReclamation(Reclamtion reclamtion) {
        reclamtion.setDateReclamation(LocalDateTime.now());
        return reclamationRepository.insert(reclamtion);
    }

    @Override
    public Reclamtion updateReclamation(Reclamtion reclamtion) {
        return reclamationRepository.save(reclamtion);
    }

    @Override
    public void  deleteReclamation(int reclamationId) {
        reclamationRepository.deleteById(reclamationId);


    }
}
