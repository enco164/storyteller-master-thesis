import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KidsComponent} from './kids/kids.component';
import {KidComponent} from './kid/kid.component';

const routes: Routes = [
  {path: '', component: KidsComponent},
  {path: ':id', component: KidComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
