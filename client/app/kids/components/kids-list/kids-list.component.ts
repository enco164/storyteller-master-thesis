import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Kid} from '../../models/kid.model';
import {MatTableDataSource} from '@angular/material';
import {Animations} from '../../../core/animations';

@Component({
  selector: 'st-kids-list',
  templateUrl: './kids-list.component.html',
  styleUrls: ['./kids-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [Animations.fadeOut]
})
export class KidsListComponent implements OnInit, OnChanges {

  @Input() kids: Kid[];
  @Input() isLoading: boolean;
  @Output() edit = new EventEmitter<Kid>();
  @Output() remove = new EventEmitter<Kid>();

  displayedColumns = ['actions', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.kids) {
      this.dataSource.data = changes.kids.currentValue;
    }
  }


  editKid(kid: Kid) {
    this.edit.emit(kid);
  }

  deleteKid(kid: Kid) {
    this.remove.emit(kid);
  }

}
