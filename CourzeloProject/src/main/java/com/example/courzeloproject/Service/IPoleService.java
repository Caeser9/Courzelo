package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Pole;

import java.util.List;

public interface IPoleService {
    public Pole addPole(Pole pole);
    public void deletePole(String codePole);
    public List<Pole> getAllPoles();
    Pole updatePole(Pole pole,String id);


}
