import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() total!: number;
  @Input() limit!: number;
  @Input() offset!: number;
  @Input() currentResults!: number;
  @Input() pagesCount!: number;
  @Output() updatePage = new EventEmitter<number>();


  updateCurrentPage(type: string) {
    switch (type) {
      case 'next':
        this.updatePage.emit(this.offset + this.limit);
        break;
      case 'prev':
        this.updatePage.emit(this.offset - this.limit);
        break;
      default:
        break;
    }
  }
}
