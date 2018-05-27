import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KidModel} from '../../models/kid';

@Component({
  selector: 'st-kid-form',
  templateUrl: './kid-form.component.html',
  styleUrls: ['./kid-form.component.scss']
})
export class KidFormComponent {

  @Input()
  model: KidModel = {id: undefined, firstName: '', lastName: ''};

  @Output()
  save = new EventEmitter<KidModel>();

  onSubmit() {
    this.save.emit(this.model);
  }

}
