import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PictureBook} from '../../models/picture-book.model';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';

@Component({
  selector: 'st-picture-book-form',
  templateUrl: './picture-book-form.component.html',
  styleUrls: ['./picture-book-form.component.scss']
})
export class PictureBookFormComponent implements OnInit {

  @ViewChild('file') file;
  public files: Set<File> = new Set();

  public filesHolder;
  public status;
  private _model: PictureBook;

  constructor(private http: HttpClient) {

  }

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

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    this.filesHolder = [];
    for (const key in files) {
      if (!isNaN(parseInt(key, 10))) {
        this.files.add(files[key]);
        this.filesHolder.push(this.processFile(files[key]));
      }
    }
    console.log(this.files);
  }

  removeFile(file: File) {
    this.files.delete(file);
  }

  uploadFiles() {
    this.status = {};
    this.files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file, file.name);
      const progress = new Subject<number>();
      const req = new HttpRequest('POST', '/api/media', formData, {reportProgress: true});
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(event);
          const percentDone = Math.round(100 * event.loaded / event.total);
          progress.next(percentDone);
          console.log('file.name: ', percentDone);
        } else if (event instanceof HttpResponse) {
          progress.complete();
        }
      });
      this.status[file.name] = {
        progress: progress.asObservable()
      };
    });
  }

  processFile(file: File) {
    const ret: { file: File, src: boolean } = {file: file, src: null};
    const fileReader = new FileReader();
    fileReader.addEventListener('load', function () {
      console.log(typeof this.result);
      ret.src = this.result;
    }, false);
    fileReader.readAsDataURL(file);
    return ret;
  }

}
