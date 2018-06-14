import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {KidModel} from '../../models/kid';
import * as moment from 'moment';
import {MatDatepicker} from '@angular/material';

@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KidFormComponent implements OnInit {

  private _model: KidModel;

  get model() {
    return this._model;
  }

  @Input()
  set model(model: KidModel) {
    this._model = {...model};
  }

  ngOnInit(): void {
    if (!this._model) {
      this._model = new KidModel();
    }
  }

  chosenYearHandler(normalizedYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    datepicker.close();
  }
}
