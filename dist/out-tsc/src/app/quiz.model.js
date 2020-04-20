export class Choice {
    constructor(value, correct) {
        this.value = value;
        this.correct = correct;
    }
}
export class Question {
    constructor(label, choices) {
        this.label = label;
        this.choices = choices;
    }
}
export class Quiz {
    constructor(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
}
export class Answers {
    constructor(values = []) {
        this.values = values;
    }
}
//This file defines the structure of your application's model. The two main exposed classes are Quiz and Answers 
//(the other ones are classes within those two). The former is a representation of the data you load and the latter 
//represents the data your app will collect each time a user answers a question.
//It's important to define this model early in the development process as it will help you define your components, 
//especially the form component you’re about to write. The form component will be a visual representation of a question 
//and its choices, so it’s important to have a clear idea of what the model looks like.
//# sourceMappingURL=quiz.model.js.map