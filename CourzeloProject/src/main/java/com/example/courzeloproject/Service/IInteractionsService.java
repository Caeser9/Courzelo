package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Interactions;

public interface IInteractionsService {
    Interactions addInteraction(Interactions interactions);
    void deleteInteraction(String id);
}
