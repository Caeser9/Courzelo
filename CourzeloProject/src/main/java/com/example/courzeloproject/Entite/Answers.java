package com.example.courzeloproject.Entite;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "answers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class Answers {
    @Id
    private Integer id;
    private String response;
}
