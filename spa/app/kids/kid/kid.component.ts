import { Component, OnInit } from '@angular/core';
import {KidModel} from '../model/kid.model';

@Component({
  selector: 'st-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.scss']
})
export class KidComponent implements OnInit {

  model: KidModel = {firstName: 'Uros', lastName: 'Milenkovic'};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
