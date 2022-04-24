import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalInput / this.limitInput);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }

  @Input() totalInput: number;
  @Input() limitInput: number;
  @Input() urlInput: string;
  @Input() currentPageInput: number;

  pagesCount: number;
  pages: number[];
}
