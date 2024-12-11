import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.scss'
})
export class FindReplaceComponent {
  findReplaceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.findReplaceForm = this.fb.group({
      text: ['', Validators.required],
      findWord: ['', Validators.required],
      replaceWord: [''],
    });
  }

  onSubmit() {
    const { text, findWord, replaceWord } = this.findReplaceForm.value;

    if (!text.includes(findWord)) {
      alert(`"${findWord}" not found in the text.`);
      return;
    }

    const updatedText = text.split(findWord).join(replaceWord);
    this.findReplaceForm.patchValue({ text: updatedText });
  }

  onReset() {
    this.findReplaceForm.reset();
  }
}