import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from './models/question.model';
import { WORD_LIST1 } from './word-lists/word_list1';
import { WORD_LIST2 } from './word-lists/word_list2';
import { WORD_LIST_SUBJUNCTIVE_MIX1 } from './word-lists/word_list_subjunctive1';
import { WORD_LIST_SUBJUNCTIVE_MIX2 } from './word-lists/word_list_subjunctive2';
import { DialogComponent } from './dialog/dialog.component';
import { ImportQuestionsComponent } from './import-questions/import-questions.component';
import { WORD_LIST_ADVANCED1 } from './word-lists/word_list_advanced1';
import { WORD_LIST_ADVANCED2 } from './word-lists/word_list_advanced2';

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

  wordLists = [
    {
      label: 'Basic 1',
      words: WORD_LIST1
    },
    {
      label: 'Basic 2',
      words: WORD_LIST2
    },
    {
      label: '(Mostly) subjunctives 1',
      words: WORD_LIST_SUBJUNCTIVE_MIX1
    },
    {
      label: '(Mostly) subjunctives 2',
      words: WORD_LIST_SUBJUNCTIVE_MIX2
    },
    {
      label: 'Advanced 1',
      words: WORD_LIST_ADVANCED1
    },
    {
      label: 'Advanced 2',
      words: WORD_LIST_ADVANCED2
    }
  ];

  importWordList(index: number) {
    this.loadedQuestions = [...this.wordLists[index].words];
  }
}
