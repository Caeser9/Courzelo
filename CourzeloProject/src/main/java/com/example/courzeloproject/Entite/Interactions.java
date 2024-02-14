package com.example.courzeloproject.Entite;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection ="interactions")
public class Interactions {
    @Id
    private String id;
    private String commentaire;
    @DBRef
    private User user;
    @DBRef
    private Blog blog;


}
