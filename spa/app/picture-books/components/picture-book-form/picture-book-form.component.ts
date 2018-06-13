import {Component, Input, OnInit} from '@angular/core';
import {PictureBook} from '../../models/picture-book.model';

@Component({
  selector: 'st-picture-book-form',
  templateUrl: './picture-book-form.component.html',
  styleUrls: ['./picture-book-form.component.scss']
})
export class PictureBookFormComponent implements OnInit {

  @Input()
  model = new PictureBook();

  ngOnInit() {
  }

}
