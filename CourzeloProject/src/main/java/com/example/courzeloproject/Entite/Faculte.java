package com.example.courzeloproject.Entite;

import lombok.*;
import org.springframework.aot.generate.GenerationContext;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Faculte")
public class Faculte implements Serializable {
    @Id

    private String codeFaculte;
    private String nom;
    private String adresse;
    private int telephone;
    private String description;
    private String photoUrl;
    @DBRef
    Pole pole;
    @DBRef
    Set<User> users;



}
