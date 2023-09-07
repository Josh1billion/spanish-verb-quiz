import { Component } from '@angular/core';
import { AI_PROMPT } from '../ai-prompt';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  aiPrompt: string = AI_PROMPT;
}
