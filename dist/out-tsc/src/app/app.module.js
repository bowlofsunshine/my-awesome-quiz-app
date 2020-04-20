import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes = [
    //defined a welcome route that'll point to a WelcomeComponent, will be used to display the list of quiz options to users
    //This route will also be the resolution for the empty route, which means you’ll point to the welcome path by default
    { path: 'welcome', component: WelcomeComponent },
    { path: ':quizId', component: QuestionsComponent },
    { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];
//By passing HttpClientModule in the imports property of the object given to @NgModule, you’re telling Angular to make the HttpClientModule available.
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            QuestionFormComponent,
            ResultsComponent,
            WelcomeComponent,
            QuestionsComponent
        ],
        imports: [
            RouterModule.forRoot(appRoutes),
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            MatCardModule,
            BrowserAnimationsModule,
            MatButtonModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map