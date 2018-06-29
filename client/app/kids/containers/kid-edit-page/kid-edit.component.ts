import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Kid} from '../../models/kid.model';
import {Observable, Subscription} from 'rxjs';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromKids from '../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {KidsActionTypes, Load, Patch, PatchSuccess} from '../../store/actions/kids-actions';
import {ofType} from '@ngrx/effects';
import {filter} from 'rxjs/operators';
import {KidFormComponent} from '../../components/kid-form/kid-form.component';
import {KidFormsService} from '../../services/kid-forms.service';

@Component({
  selector: 'st-kid',
  templateUrl: './kid-edit.component.html',
  styleUrls: ['./kid-edit.component.scss']
})
export class KidEditComponent implements OnInit, OnDestroy {

  @ViewChild('kidForm')
  kidForm: KidFormComponent;

  model$: Observable<Kid>;
  isLoading$: Observable<boolean>;

  private redirectSub: Subscription;

  constructor(private store: Store<fromKids.State>,
              private activatedRoute: ActivatedRoute,
              private actionsSubject: ActionsSubject,
              private router: Router,
              private kidFormsService: KidFormsService) {
  }

  ngOnInit() {
    this.model$ = this.store.select(fromKids.getCurrentKid);
    this.isLoading$ = this.store.select(fromKids.getKidsLoading);

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
    const kidFromKidHolder = this.kidFormsService.getKidFromKidHolder(this.kidForm.model);
    this.store.dispatch(new Patch(kidFromKidHolder));
  }
}
