import {Component, OnInit} from '@angular/core';
import {KidModel} from '../model/kid.model';

@Component({
  selector: 'st-kid',
  templateUrl: './kid-edit.component.html',
  styleUrls: ['./kid-edit.component.scss']
})
export class KidEditComponent implements OnInit {

  model: KidModel = {firstName: 'Uros', lastName: 'Milenkovic'};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
