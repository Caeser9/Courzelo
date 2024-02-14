package com.example.courzeloproject.Service;


import com.example.courzeloproject.Entite.Domaine;
import com.example.courzeloproject.Repository.IDomaineRepo;
import com.example.courzeloproject.Service.IDomaineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomaineServiceimpl implements IDomaineService {
    @Autowired
    IDomaineRepo iDomaineRepo;


    @Override
    public Domaine ajoutDomaine(Domaine d) {
        return iDomaineRepo.save(d);
    }
}
