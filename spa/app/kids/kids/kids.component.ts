import { Component, OnInit } from '@angular/core';
import {KidsService} from './kids.service';
import {Observable} from 'rxjs/Observable';
import {KidModel} from '../model/kid.model';
import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'st-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
  providers: [KidsService]
})
export class KidsComponent implements OnInit {

  displayedColumns = ['actions', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource();

  isLoadingResults = true;

  constructor(private service: KidsService) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.service.getKids()
      .finally(() => this.isLoadingResults = false)
      .subscribe(
        data => this.dataSource.data = data,
        err => this.dataSource.data = []
      );
  }

}
