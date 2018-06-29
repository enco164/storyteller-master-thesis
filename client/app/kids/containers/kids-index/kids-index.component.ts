import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';


import * as fromKids from '../../store';
import {Store} from '@ngrx/store';
import {Kid} from '../../models/kid.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Delete, LoadAll, SetCurrentKidId} from '../../store/actions/kids-actions';

@Component({
  selector: 'st-kids',
  templateUrl: './kids-index.component.html',
  styleUrls: ['./kids-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KidsIndexComponent implements OnInit {

  isLoadingResults$;

  kids$: Observable<Kid[]>;

  constructor(private store: Store<fromKids.State>, private router: Router) {
  }

  ngOnInit() {
    this.kids$ = this.store.select(fromKids.getAllKids);
    this.isLoadingResults$ = this.store.select(fromKids.getKidsLoading);
    this.store.dispatch(new LoadAll());
  }

  editKid(kid: Kid) {
    this.store.dispatch(new SetCurrentKidId(kid.id));
    this.router.navigate(['/kids', kid.id, 'edit']);
  }

  removeKid(kid: Kid) {
    const r = confirm(`Are you sure you want to remove ${kid.firstName} ${kid.lastName}?`);
    if (r) {
      this.store.dispatch(new Delete(kid));
    }
  }

}
