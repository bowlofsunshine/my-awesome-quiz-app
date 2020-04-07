import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Quiz, Answers, Choice } from './quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  answers: Answers;
  quiz: Quiz;
  currentQuestionIndex: number;
  showResults = false;
  //use the constructor to load data using the QuestionsService you defined earlier
  constructor(private questionsService: QuestionsService) {
    //Once the data has been received, you initialize some properties on the instance
    this.questionsService.getJSON('maths').subscribe(data => {

      this.quiz = new Quiz('maths', data);
      this.answers = new Answers();
      this.currentQuestionIndex = 0;
    });
  }
  //updateChoice will be called each time the user selects an answer, and nextOrViewResults will be called each time the user clicks on the “Next” button).
  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }
}
