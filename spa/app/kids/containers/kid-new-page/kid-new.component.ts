import {Component, OnDestroy, OnInit} from '@angular/core';
import {KidModel} from '../../models/kid';
import {Create, CreateSuccess, KidsActionTypes} from '../../store/actions/kids-actions';
import {Router} from '@angular/router';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromKids from '../../store';
import {ofType} from '@ngrx/effects';
import {Subscription} from 'rxjs';

@Component({
  selector: 'st-kid-new',
  templateUrl: './kid-new.component.html',
  styleUrls: ['./kid-new.component.scss']
})
export class KidNewComponent implements OnInit, OnDestroy {

  model: KidModel = {id: null, firstName: '', lastName: ''};

  private redirectSub: Subscription;

  constructor(private store: Store<fromKids.State>,
              private actionsSubject: ActionsSubject,
              private router: Router,) {
  }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(KidsActionTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/kids'])
    );
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  onSubmit(kid) {
    this.store.dispatch(new Create(kid));
  }
}
