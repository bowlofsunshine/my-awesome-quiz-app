import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';
//@Component decorator to tell Angular that the class right below is a component
@Component({
  //wire up the class with its stylesheet and its template file
  //selector property that defines the custom HTML element this component will render into. <app-question-form></app-question-form>
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  //EventEmitter that accepts a generic type
  //The generic type allows you to express what data the EventEmitter is going to carry
  @Output() onChoiceMade = new EventEmitter<string>();

  form: FormGroup;


  //ngOnInit method is called once the component has received all its inputs (actually, all its data-bound properties) from the calling component 
  ngOnInit() {
    // initialize a form controller, the programmatic entity that will link the model and the view
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  //dispatch the choice that's been made by the user.
  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}

//defined an input (the question), an output (when a choice is made), and a form controller to ensure changes in the UI are propagated.