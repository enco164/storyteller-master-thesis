import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KidModel} from '../../models/kid';
import * as moment from 'moment';

@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss']
})
export class KidFormComponent implements OnInit {

  @Input()
  model: KidModel = {
    id: undefined,
    firstName: '',
    lastName: '',
    yearOfBirth: moment(),
    cityOfBirth: '',
    stateOfBirth: '',
    educationFather: '',
    educationMother: ''
  };

  @Output()
  save = new EventEmitter<KidModel>();

  ngOnInit(): void {

  }

  onSubmit() {
    this.save.emit(this.model);
  }

}
