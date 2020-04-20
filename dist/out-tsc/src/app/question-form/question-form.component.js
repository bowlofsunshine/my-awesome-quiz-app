import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//@Component decorator to tell Angular that the class right below is a component
let QuestionFormComponent = class QuestionFormComponent {
    constructor() {
        //EventEmitter that accepts a generic type
        //The generic type allows you to express what data the EventEmitter is going to carry
        this.onChoiceMade = new EventEmitter();
        //dispatch the choice that's been made by the user.
        this.onChange = () => {
            this.onChoiceMade.emit(this.form.value.choice);
        };
    }
    //ngOnInit method is called once the component has received all its inputs (actually, all its data-bound properties) from the calling component 
    ngOnInit() {
        // initialize a form controller, the programmatic entity that will link the model and the view
        this.form = new FormGroup({
            choice: new FormControl()
        });
        this.form.valueChanges.subscribe(this.onChange);
    }
};
__decorate([
    Input()
], QuestionFormComponent.prototype, "question", void 0);
__decorate([
    Output()
], QuestionFormComponent.prototype, "onChoiceMade", void 0);
QuestionFormComponent = __decorate([
    Component({
        //wire up the class with its stylesheet and its template file
        //selector property that defines the custom HTML element this component will render into. <app-question-form></app-question-form>
        selector: 'app-question-form',
        templateUrl: './question-form.component.html',
        styleUrls: ['./question-form.component.scss']
    })
], QuestionFormComponent);
export { QuestionFormComponent };
//defined an input (the question), an output (when a choice is made), and a form controller to ensure changes in the UI are propagated.
//# sourceMappingURL=question-form.component.js.map