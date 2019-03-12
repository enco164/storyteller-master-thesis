import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'st-image-file-viewer',
  templateUrl: './image-file-viewer.component.html',
  styleUrls: ['./image-file-viewer.component.scss']
})
export class ImageFileViewerComponent implements OnChanges {

  @Input() file: File;
  public src: string;
  private fileReader: FileReader;

  constructor() {
    this.fileReader = new FileReader();
    const self = this;
    this.fileReader.addEventListener('load', function () {
      self.src = this.result;
    }, false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.file) {
      this.fileReader.readAsDataURL(changes.file.currentValue);
    }
  }

}
