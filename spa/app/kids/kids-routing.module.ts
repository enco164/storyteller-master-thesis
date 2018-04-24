import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KidsComponent} from './kids/kids.component';
import {KidEditComponent} from './kid-edit/kid-edit.component';

const routes: Routes = [
  {path: '', component: KidsComponent},
  {path: ':id', component: KidEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
