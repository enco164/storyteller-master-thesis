import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnnotationSchemeModel} from "../core/domain/annotation-scheme.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'st-annotation-scheme-form',
  templateUrl: './annotation-scheme-form.component.html',
  styleUrls: ['./annotation-scheme-form.component.scss']
})
export class AnnotationSchemeFormComponent implements OnInit {

  scheme: AnnotationSchemeModel;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { scheme: {data: AnnotationSchemeModel} }) => {
      this.scheme = data.scheme.data;
      this.createForm();
    });
  }

  private createForm() {
    this.form = this.fb.group({
      title: this.fb.control(this.scheme.title),
      description: this.fb.control(this.scheme.description),
      blue: this.fb.control(this.scheme.blue),
      green: this.fb.control(this.scheme.green),
      red: this.fb.control(this.scheme.red),
      aqua: this.fb.control(this.scheme.aqua),
      pink: this.fb.control(this.scheme.pink),
      yellow: this.fb.control(this.scheme.yellow),
      orange: this.fb.control(this.scheme.orange),
    });
  }
}
