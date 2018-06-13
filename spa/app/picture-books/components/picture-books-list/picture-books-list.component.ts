import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PictureBook} from '../../models/picture-book.model';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'st-picture-books-list',
  templateUrl: './picture-books-list.component.html',
  styleUrls: ['./picture-books-list.component.scss']
})
export class PictureBooksListComponent implements OnInit, OnChanges {

  @Input() pictureBooks: PictureBook[];
  @Input() isLoading: boolean;
  @Output() edit = new EventEmitter<PictureBook>();
  @Output() remove = new EventEmitter<PictureBook>();

  displayedColumns = ['actions', 'title', 'publisher', 'authors', 'yearOfPublishing'];
  dataSource = new MatTableDataSource();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pictureBooks) {
      this.dataSource.data = changes.pictureBooks.currentValue;
    }
  }

  editPictureBook(pictureBook: PictureBook) {
    this.edit.emit(pictureBook);
  }

  removePictureBook(pictureBook: PictureBook) {
    this.remove.emit(pictureBook);
  }
}
