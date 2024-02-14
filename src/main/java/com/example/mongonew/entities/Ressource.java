package com.example.mongonew.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Ressource")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ressource {
    private int idRessource;
    private String nomRessource;

}
