import { Component, EventEmitter } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-import-questions',
  templateUrl: './import-questions.component.html',
  styleUrls: ['./import-questions.component.scss']
})
export class ImportQuestionsComponent {
  questionJSON: string = '';

  // create an event importedQuestions() that will be called when the user clicks the import button
  importedQuestions = new EventEmitter<Question[]>();

  import() {
    const questions: Question[] = JSON.parse(this.questionJSON);
    this.importedQuestions.emit(questions);
  }
}
