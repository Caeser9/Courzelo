package com.example.courzeloproject.Entite;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document("reclamation")
public class Reclamtion {
    @Id
    private int reclamationId ;
    @Field("date")
    private LocalDateTime dateReclamation ;
    @Field("titre")
    private String titre ;
    @Field("description")

    private String description ;


}
