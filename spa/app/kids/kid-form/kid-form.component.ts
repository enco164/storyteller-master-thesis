import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KidModel} from '../model/kid.model';

@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss']
})
export class KidFormComponent {

  @Input()
  model: KidModel;

  @Output()
  submit = new EventEmitter<KidModel>();

  onSubmit() {
    this.submit.emit(this.model);
  }

}
