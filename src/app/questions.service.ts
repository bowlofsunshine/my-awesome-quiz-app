import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';
import { Observable } from 'rxjs';

// @Injectable decorator. A decorator is a function that augments a 
//piece of code — usually another function or a class. In this case, you’re using the 
//decorator to tell Angular that this service will be available everywhere (hence the root).
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  //The class declaration looks like an ES6 class, but you’re within the realm of TypeScript. 
  //Look at the constructor. Its signature contains two oddities: a namespace (private) and a type. 
  //The namespace is a way of initializing the instance with whatever is given as a parameter. It's a shortcut for the following:

  //constructor(http: HttpClient) {
  //  this.http = http;
  //}

  //Expressing this dependency (to HttpClient) in the constructor tells Angular to inject an HttpClient into this class—its dependency injection again.
  constructor(private http: HttpClient) { }

  //load the list of quizzes
  public getQuizzes() {
    return this.http.get(`./assets/quiz-list.json`).pipe(
      map((result: any[]) => {
        //map the result to return an observable of quiz instances 
        return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName));
      })
    );
  }
  //load questions for a specific quiz.
  public getQuestions(fileName: string) {
    return this.http.get(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        //map the result to return question instances
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }




  // //the getJSON method takes a string argument that's the fileID to fetch. Using this.http, it fetches it and returns the result.
  // public getJSON(fileId: string) {
  //   //as Observable<any> is a TypeScript type cast. This is a way of giving the TypeScript compiler information it can deduce about types. 
  //   //It's supposed to make the method's return explicit by saying "we return this type". HttpClient returns an Observable (from the RxJS library you imported);
  //   return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  // }
}