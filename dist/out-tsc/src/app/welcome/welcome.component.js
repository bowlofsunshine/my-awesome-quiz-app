import { __decorate } from "tslib";
import { Component } from '@angular/core';
let WelcomeComponent = class WelcomeComponent {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    ngOnInit() {
        this.questionsService.getQuizzes().subscribe(quiz => {
            this.quiz = quiz;
        });
    }
    reset() {
        this.quiz = undefined;
    }
};
WelcomeComponent = __decorate([
    Component({
        selector: 'app-welcome',
        templateUrl: './welcome.component.html',
        styleUrls: ['./welcome.component.scss']
    })
], WelcomeComponent);
export { WelcomeComponent };
//# sourceMappingURL=welcome.component.js.map