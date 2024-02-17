package com.example.courzeloproject.Service;

import com.example.courzeloproject.Entite.QuestionWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IQuizService {
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id);
    public ResponseEntity<String> createQuiz(String category, int numberOfQue, String title);

    }
