package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.Faculte;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IFaculteService {
    public Faculte addFaculte(Faculte faculte);
    public void deleteFaculte(String id);
    public List<Faculte> getAllFacultes();
    Faculte DetailsFaculte(String codeFaculte);
    Faculte updatefaculte(Faculte faculte,String id);
    String storeFile(MultipartFile file, String faculteCode);

    Resource loadFileAsResource(String fileName);
}
