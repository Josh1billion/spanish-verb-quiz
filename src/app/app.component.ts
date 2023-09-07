import { Component } from '@angular/core';
import { Question } from './models/question.model';
import { WORD_LIST1 } from './word-lists/word_list1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedQuestions: Question[] = [];
  /*
  question: Question = {
    answer: '',
    infinitive: '',
    sentencePartOne: '',
    sentencePartTwo: ''
  };
  */

  wordList1: Question[] = WORD_LIST1;

  importWordList(wordList: number) {
    this.loadedQuestions = [...this.wordList1];
  }
}
