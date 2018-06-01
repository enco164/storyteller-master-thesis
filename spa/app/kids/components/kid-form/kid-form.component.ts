import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KidModel} from '../../models/kid';
import * as moment from 'moment';
import {MatDatepicker} from '@angular/material';

@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss']
})
export class KidFormComponent implements OnInit {

  @Input()
  model: KidModel = new KidModel();

  @Output()
  save = new EventEmitter<KidModel>();

  ngOnInit(): void {

  }

  chosenYearHandler(normalizedYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    console.log(normalizedYear);
    datepicker.close();
  }

  onSubmit() {
    this.save.emit(this.model);
  }

}
