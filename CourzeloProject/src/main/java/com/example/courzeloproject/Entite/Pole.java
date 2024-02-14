package com.example.courzeloproject.Entite;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Pole")
public class Pole implements Serializable {

    @Id

    private String codePole;
    private String nom;
    private String adresse;

    private String description;
    private String photoUrl;
    @DBRef
    Set<Faculte> facultes;
}
