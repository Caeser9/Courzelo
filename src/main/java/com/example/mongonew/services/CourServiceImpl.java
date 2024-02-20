package com.example.mongonew.services;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.Ressource;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.repository.IRessourceRepository;
import com.example.mongonew.repository.IUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class CourServiceImpl implements ICourService{
    @Autowired
    ICourRepository iCourRepository;
    @Autowired
    IUserRepository iUserRepository;
    @Autowired
    IRessourceRepository iRessourceRepository;
    @Override
    public Cour ajouterCour(Cour c) {
        String idc = RandomStringUtils.randomAlphabetic(10);
        c.setIdCour(idc);
        Date date = new Date();
        c.setDate(date);
        List<Ressource> ressourceList=new ArrayList<>();
        ressourceList=c.getRessourceList();
        iRessourceRepository.saveAll(ressourceList);
        return iCourRepository.save(c);
    }

    @Override
    public Cour modifierCour(Cour c ,String idc) {
        log.info("***************************************************"+c.getNomCour());
        Cour co=new Cour();
        co=iCourRepository.findById(idc).get();
        co.setNomCour(c.getNomCour());
        co.setDescription(c.getDescription());
        for(Ressource res:co.getRessourceList()){
            co.getRessourceList().add(res);
        }
        return iCourRepository.save(co);


    }

    @Override
    public void supprimerCour(String id) {
       Cour c=iCourRepository.findById(id).get();
        iCourRepository.delete(c);
    }

    @Override
    public List<Cour> getCour() {

        return iCourRepository.findAll();
    }

    @Override
    public List<Cour> findAllByOrderByDateDesc() {
       for(Cour c:iCourRepository.findAllByOrderByDateDesc()){
           log.info("le nom est \n"+c.getNomCour());
       }
        return iCourRepository.findAllByOrderByDateDesc();
    }

    @Override
    public List<Cour> findAllByNomCour(String nom) {
        return iCourRepository.findAllByNomCour(nom);
    }


}
