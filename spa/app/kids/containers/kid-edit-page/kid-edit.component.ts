import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {KidModel} from '../../models/kid';
import {Observable, Subscription} from 'rxjs';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromKids from '../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {KidsActionTypes, Load, Patch, PatchSuccess} from '../../store/actions/kids-actions';
import {ofType} from '@ngrx/effects';
import {filter} from 'rxjs/operators';
import {KidFormComponent} from '../../components/kid-form/kid-form.component';

@Component({
  selector: 'st-kid',
  templateUrl: './kid-edit.component.html',
  styleUrls: ['./kid-edit.component.scss']
})
export class KidEditComponent implements OnInit, OnDestroy {

  @ViewChild('kidForm')
  kidForm: KidFormComponent;

  model$: Observable<KidModel>;

  private redirectSub: Subscription;

  constructor(private store: Store<fromKids.State>,
              private activatedRoute: ActivatedRoute,
              private actionsSubject: ActionsSubject,
              private router: Router) {
  }

  ngOnInit() {
    this.model$ = this.store.select(fromKids.getCurrentKid);

    // load kid
    this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new Load(params['id']));
    });

    // redirect to list after save
    this.redirectSub = this.actionsSubject.pipe(
      ofType(KidsActionTypes.PATCH_SUCCESS),
      filter((action: PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['id'])
    ).subscribe(
      (action: PatchSuccess) => this.router.navigate(['/kids'])
    );

  }

  ngOnDestroy(): void {
    this.redirectSub.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch(new Patch(this.kidForm.model));
  }
}
