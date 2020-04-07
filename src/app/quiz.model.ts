export class Choice {
    constructor(public value: string, public correct?: boolean) { }
}

export class Question {
    constructor(public label: string, public choices: Choice[]) { }
}

export class Quiz {
    constructor(public label: string, public name: string, public fileName: string, public questions: Question[]) { }
}

export class Answers {
    constructor(public values: Choice[] = []) { }
}

//This file defines the structure of your application's model. The two main exposed classes are Quiz and Answers 
//(the other ones are classes within those two). The former is a representation of the data you load and the latter 
//represents the data your app will collect each time a user answers a question.

//It's important to define this model early in the development process as it will help you define your components, 
//especially the form component you’re about to write. The form component will be a visual representation of a question 
//and its choices, so it’s important to have a clear idea of what the model looks like.