import { TestBed } from '@angular/core/testing';
import { QuestionsService } from './questions.service';
describe('QuestionsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(QuestionsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=questions.service.spec.js.map