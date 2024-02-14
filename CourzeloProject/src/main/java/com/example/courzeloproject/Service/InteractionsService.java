package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Interactions;
import com.example.courzeloproject.Repository.InteractionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InteractionsService implements IInteractionsService{
    @Autowired
    InteractionsRepository interactionsRepository;
    @Override
    public Interactions addInteraction(Interactions interactions) {
        return interactionsRepository.save(interactions);
    }
}
