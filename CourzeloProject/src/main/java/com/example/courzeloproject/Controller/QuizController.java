package com.example.courzeloproject.Controller;

import com.example.courzeloproject.Entite.Answers;
import com.example.courzeloproject.Entite.QuestionWrapper;
import com.example.courzeloproject.Service.QuizServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizController {
    @Autowired
    QuizServiceImpl quizService;

    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numberOfQue, @RequestParam String title)
    {
        return quizService.createQuiz(category,numberOfQue,title);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id)
    {
        //return quizService.getQuizQuestion(id);
        /*ResponseEntity<List<QuestionWrapper>> response = quizService.getQuizQuestions(id);
        return response;*/
        try {
            ResponseEntity<List<QuestionWrapper>> response = quizService.getQuizQuestions(id);
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//
//    @PostMapping("submit/{id}")
//    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id,@RequestBody List<Answers> response)
//    {
//        return quizService.calculateResult(id,response);
//    }
}
