import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AnnotationSchemesSandboxService} from "../annotation-schemes-sandbox.service";
import {merge} from "rxjs";
import {AnnotationSchemeModel} from "../core/domain/annotation-scheme.model";
import {AnnotationSchemesDataSource} from "../annotation-schemes.data-source";
import {AnnotationSchemesResource} from "../annotation-schemes.resource";
import {MatPaginator, MatSort} from "@angular/material";
import {tap} from "rxjs/operators";

@Component({
  selector: 'st-annotation-schemes-index',
  templateUrl: './annotation-schemes-index.component.html',
  styleUrls: ['./annotation-schemes-index.component.scss']
})
export class AnnotationSchemesIndexComponent implements AfterViewInit, OnInit {

  dataSource: AnnotationSchemesDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'title',
    'description',
    'actions'
    // 'blue',
    // 'green',
    // 'red',
    // 'aqua',
    // 'pink',
    // 'yellow',
    // 'orange',
  ];

  constructor(private annotationSchemesSandbox: AnnotationSchemesSandboxService,
              resource: AnnotationSchemesResource) {
    this.dataSource = new AnnotationSchemesDataSource(resource);
  }

  ngOnInit() {
    this.dataSource.loadAnnotationSchemes();
    // this.annotationSchemesSandbox.loadAnnotationSchemes();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadPage())
      )
      .subscribe();
  }

  loadPage() {
    this.dataSource.loadAnnotationSchemes('', this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

  deleteScheme(scheme: AnnotationSchemeModel) {

  }

}
