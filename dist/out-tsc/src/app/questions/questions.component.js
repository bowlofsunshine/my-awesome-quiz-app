import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Answers } from '../quiz.model';
let QuestionsComponent = class QuestionsComponent {
    // inject both the active route and the questions service
    constructor(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    ngOnInit() {
        //Once the data has been received, you initialize some properties on the instance
        // read from the dynamic route and load the proper quiz data
        this.questionsService.getQuestions(this.route.snapshot.params.quizId).subscribe(questions => {
            // initialize everything
            this.questions = questions;
            this.answers = new Answers();
            this.currentQuestionIndex = 0;
        });
    }
    //updateChoice will be called each time the user selects an answer, and nextOrViewResults will be called each time the user clicks on the “Next” button).
    updateChoice(choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    }
    nextOrViewResults() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    }
    reset() {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    }
};
QuestionsComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], QuestionsComponent);
export { QuestionsComponent };
//# sourceMappingURL=questions.component.js.map