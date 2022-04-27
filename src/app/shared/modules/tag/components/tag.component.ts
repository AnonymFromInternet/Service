import { Component, Input } from '@angular/core';

import { TagType } from '../../../types/tag.type';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent {
  @Input() tagsInput: TagType[];
}
