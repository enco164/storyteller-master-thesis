import {Component, OnInit} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as fromStore from '../../store';
import {Subscription} from 'rxjs';
import {ofType} from '@ngrx/effects';
import {CreateSessionSuccess, SessionActionTypes} from '../../store/actions/session.actions';

@Component({
  selector: 'st-session-new',
  templateUrl: './session-new.component.html',
  styleUrls: ['./session-new.component.scss']
})
export class SessionNewComponent implements OnInit {

  private redirectSub: Subscription;

  constructor(private store: Store<fromStore.State>,
              private actionsSubject: ActionsSubject,
              private router: Router) {
  }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(SessionActionTypes.CreateSessionSuccess)
    ).subscribe(
      (action: CreateSessionSuccess) => this.router.navigate(['/sessions'])
    );
  }

}
