import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Kid} from '../../models/kid.model';
import {Create, CreateSuccess, KidsActionTypes} from '../../store/actions/kids-actions';
import {Router} from '@angular/router';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromKids from '../../store';
import {ofType} from '@ngrx/effects';
import {Subscription} from 'rxjs';
import {KidFormComponent} from '../../components/kid-form/kid-form.component';
import {KidFormsService} from '../../services/kid-forms.service';

@Component({
  selector: 'st-kid-new',
  templateUrl: './kid-new.component.html',
  styleUrls: ['./kid-new.component.scss']
})
export class KidNewComponent implements OnInit, OnDestroy {

  @ViewChild('kidForm')
  kidForm: KidFormComponent;

  model: Kid = new Kid();

  private redirectSub: Subscription;

  constructor(private store: Store<fromKids.State>,
              private actionsSubject: ActionsSubject,
              private router: Router,
              private kidFormsService: KidFormsService) {
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

  onSubmit() {
    const kidFromKidHolder = this.kidFormsService.getKidFromKidHolder(this.kidForm.model);
    this.store.dispatch(new Create(kidFromKidHolder));
  }
}
