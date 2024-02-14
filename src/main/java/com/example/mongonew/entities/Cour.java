package com.example.mongonew.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document("Cour")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cour {

    @Id
    private String idCour;
    private String nomCour;
    private String description;
    private Date date;
    private Niveau niveau;
    @DBRef
    private List<User> listUser=new ArrayList<>();



}
