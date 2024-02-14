package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Pole;
import com.example.courzeloproject.Repository.PoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PoleService implements IPoleService{
    @Autowired
    PoleRepository poleRepository;
    @Override
    public Pole addPole(Pole pole) {
        return poleRepository.save(pole);
    }

    @Override
    public void deletePole(String id) {
        poleRepository.deleteById(id);
    }

    @Override
    public List<Pole> getAllPoles() {
        return poleRepository.findAll();
    }

    @Override
    public Pole updatePole(Pole pole, String id) {
      Pole newpole=poleRepository.findPoleByCodePole(id);
      newpole.setAdresse(pole.getAdresse());
      newpole.setNom(pole.getNom());
      newpole.setDescription(pole.getDescription());
      newpole.setPhotoUrl(pole.getPhotoUrl());

        return poleRepository.save(newpole);

    }
}
