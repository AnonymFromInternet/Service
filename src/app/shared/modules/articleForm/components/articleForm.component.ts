import { Component, Input } from '@angular/core';
import { ArticleInputInterface } from '../../../types/articleInput.interface';
import { BackendErrorsInterface } from '../../../types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent {
  @Input() initialValuesInput: ArticleInputInterface;
  @Input() isSubmittingInput: boolean;
  @Input() errorInput: BackendErrorsInterface | null;
}
