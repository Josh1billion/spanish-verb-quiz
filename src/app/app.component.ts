import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from './models/question.model';
import { WORD_LIST1 } from './word-lists/word_list1';
import { WORD_LIST2 } from './word-lists/word_list2';
import { DialogComponent } from './dialog/dialog.component';
import { ImportQuestionsComponent } from './import-questions/import-questions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openInstructionsDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '500px',
    });
  }

  openImportDialog(): void {
    const dialog = this.dialog.open(ImportQuestionsComponent, {
      width: '500px',
    });

    // subscribe to the "importedQuestions" event of the ImportQuestionsComponent
    dialog.componentInstance.importedQuestions.subscribe(
      (importedQuestions: Question[]) => {
        this.loadedQuestions = importedQuestions;
    });
  }

  loadedQuestions: Question[] = [];

  importWordList(wordList: number) {
    switch (wordList) {
      case 1:
        this.loadedQuestions = [...WORD_LIST1];
        break;
      case 2:
        this.loadedQuestions = [...WORD_LIST2];
        break;
      default:
        alert("importWordList(): wordList not recognized");
        break;
    }
  }
}
