import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {KidModel} from '../../models/kid';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'st-kids-list',
  templateUrl: './kids-list.component.html',
  styleUrls: ['./kids-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KidsListComponent implements OnInit, OnChanges {

  @Input() kids: KidModel[];
  @Input() isLoading: boolean;
  @Output() edit = new EventEmitter<KidModel>();
  @Output() remove = new EventEmitter<KidModel>();

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


  editKid(kid: KidModel) {
    this.edit.emit(kid);
  }

  deleteKid(kid: KidModel) {
    this.remove.emit(kid);
  }

}
