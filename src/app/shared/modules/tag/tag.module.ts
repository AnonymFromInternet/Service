import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TagComponent],
  exports: [TagComponent],
})
export class TagModule {}
