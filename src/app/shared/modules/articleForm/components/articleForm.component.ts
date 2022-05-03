import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ArticleInputInterface } from '../../../types/articleInput.interface';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValuesInput: ArticleInputInterface;
  @Input() isSubmittingInput: boolean;
  @Input() errorInput: BackendErrorsInterface | null;

  @Output() articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.formBuilder.group({
      title: this.initialValuesInput.title,
      description: this.initialValuesInput.description,
      body: this.initialValuesInput.body,
      tagList: this.initialValuesInput.tagList.join(', '),
    });
  }

  articleSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
