import {Component, Input, OnInit} from '@angular/core';
import {PictureBook} from '../../models/picture-book.model';

@Component({
  selector: 'st-picture-book-form',
  templateUrl: './picture-book-form.component.html',
  styleUrls: ['./picture-book-form.component.scss']
})
export class PictureBookFormComponent implements OnInit {

  private _model: PictureBook;

  get model() {
    return this._model;
  }

  @Input()
  set model(m: PictureBook) {
    this._model = {...m};
  }

  ngOnInit() {
    if (!this._model) {
      this._model = new PictureBook();
    }
  }

}
