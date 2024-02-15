package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Reclamtion;
import org.springframework.web.bind.annotation.RequestBody;

public interface IReclamationServicelmp {
    public Reclamtion addReclamation (Reclamtion reclamtion) ;
    public Reclamtion updateReclamation (Reclamtion reclamtion) ;
    public void deleteReclamation(int reclamationId);}
