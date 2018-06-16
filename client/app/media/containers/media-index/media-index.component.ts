import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Media} from '../../models/media.model';
import {MediaResource} from '../../services/media.resouce';

@Component({
  selector: 'st-media-index',
  templateUrl: './media-index.component.html',
  styleUrls: ['./media-index.component.scss']
})
export class MediaIndexComponent implements OnInit {

  media$: Observable<Media[]>;

  constructor(private resource: MediaResource) {
  }

  ngOnInit() {
    this.media$ = this.resource.getMedia();
  }

}
