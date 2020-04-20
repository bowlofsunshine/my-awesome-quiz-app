import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';
// @Injectable decorator. A decorator is a function that augments a 
//piece of code — usually another function or a class. In this case, you’re using the 
//decorator to tell Angular that this service will be available everywhere (hence the root).
let QuestionsService = class QuestionsService {
    //The class declaration looks like an ES6 class, but you’re within the realm of TypeScript. 
    //Look at the constructor. Its signature contains two oddities: a namespace (private) and a type. 
    //The namespace is a way of initializing the instance with whatever is given as a parameter. It's a shortcut for the following:
    //constructor(http: HttpClient) {
    //  this.http = http;
    //}
    //Expressing this dependency (to HttpClient) in the constructor tells Angular to inject an HttpClient into this class—its dependency injection again.
    constructor(http) {
        this.http = http;
    }
    //load the list of quizzes
    getQuizzes() {
        return this.http.get(`./assets/quiz-list.json`).pipe(map((result) => {
            //map the result to return an observable of quiz instances 
            return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName));
        }));
    }
    //load questions for a specific quiz.
    getQuestions(fileName) {
        return this.http.get(`./assets/${fileName}.json`).pipe(map((result) => {
            //map the result to return question instances
            return result.map(r => new Question(r.label, r.choices));
        }));
    }
};
QuestionsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], QuestionsService);
export { QuestionsService };
//# sourceMappingURL=questions.service.js.map