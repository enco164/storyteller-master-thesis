import { Component } from '@angular/core';
import {KidModel} from '../model/kid.model';

@Component({
  selector: 'st-kid-new',
  templateUrl: './kid-new.component.html',
  styleUrls: ['./kid-new.component.scss']
})
export class KidNewComponent {

  model: KidModel = {id: null, firstName: '', lastName: ''};

  onSubmit(kid) {

  }
}
