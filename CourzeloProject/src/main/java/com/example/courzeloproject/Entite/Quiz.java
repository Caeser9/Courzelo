package com.example.courzeloproject.Entite;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Document(collection = "quiz")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Quiz {
    @Id
    private String id;
    private String title;
    private String category;
    private int duree;
    @DBRef //@manytomany w kol
    private Set<Question> questions=new HashSet<>();

}
