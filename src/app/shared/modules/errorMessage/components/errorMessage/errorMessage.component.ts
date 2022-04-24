import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{errorMessageInput}}</div>',
})
export class ErrorMessageComponent {
  @Input() errorMessageInput: string = 'Something went wrong';
}
