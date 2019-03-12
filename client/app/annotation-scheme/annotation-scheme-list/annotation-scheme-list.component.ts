import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../reducers';
import {Observable} from 'rxjs';
import {AnnotationScheme} from '../annotation-scheme.model';
import {selectSchemes} from '../reducers';
import {AnnotationSchemeActionTypes} from '../actions/annotation-scheme.actions';


@Component({
  selector: 'st-annotation-scheme-list',
  templateUrl: './annotation-scheme-list.component.html',
  styleUrls: ['./annotation-scheme-list.component.css']
})
export class AnnotationSchemeListComponent implements OnInit {

  annotationSchemes$: Observable<AnnotationScheme[]>;

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
    this.annotationSchemes$ = this.store.select(selectSchemes);
    this.store.dispatch(new AnnotationSchemeActionTypes());
  }

}
