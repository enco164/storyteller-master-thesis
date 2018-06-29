import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Kid} from '../../models/kid.model';
import * as moment from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepicker} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {KidHolder} from '../../models/kid.holder';
import {Animations} from '../../../core/animations';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  animations: [Animations.fadeOut]
})
export class KidFormComponent implements OnInit {

  private _model: KidHolder;
  @Input() isLoading: boolean;

  genders = [
    {value: 'f', viewValue: 'Female'},
    {value: 'm', viewValue: 'Male'},
  ];

  ngOnInit(): void {
    if (!this._model) {
      this._model = {kid: new Kid()};
    }
  }

  chosenYearHandler(normalizedYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    this._model.yearOfBirth = normalizedYear;
    datepicker.close();
  }

  get model() {
    return this._model;
  }

  @Input()
  set kid(model: Kid) {
    if (model) {
      this._model = {kid: {...model}, yearOfBirth: moment().year(model.yearOfBirth)};
    }
  }

}
