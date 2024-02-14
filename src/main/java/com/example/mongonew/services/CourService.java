package com.example.mongonew.services;

import com.example.mongonew.entities.Cour;
import com.example.mongonew.entities.User;
import com.example.mongonew.repository.ICourRepository;
import com.example.mongonew.repository.IUserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
public class CourService implements ICourService{
    @Autowired
    ICourRepository iCourRepository;
    @Autowired
    IUserRepository iUserRepository;
    @Override
    public Cour ajouterCour(Cour c) {
        String idc = RandomStringUtils.randomAlphabetic(10);
        c.setIdCour(idc);
        Date date = new Date();
        c.setDate(date);
        return iCourRepository.save(c);
    }

    @Override
    public Cour modifierCour(Cour c) {
        return iCourRepository.save(c);
    }

    @Override
    public void supprimerCour(int id) {
       Cour c=iCourRepository.findById(id).get();
        iCourRepository.delete(c);
    }

    @Override
    public List<Cour> getCour() {

        return iCourRepository.findAll();
    }




}
