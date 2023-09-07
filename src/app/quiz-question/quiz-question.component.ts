import { Component, Input } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  @Input() question: Question | undefined;
  answerIsShown = false;
  
  showAnswer() {
    this.answerIsShown = true;
  }
}
