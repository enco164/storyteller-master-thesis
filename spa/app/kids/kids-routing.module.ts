import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KidsComponent} from './kids/kids.component';
import {KidEditComponent} from './kid-edit/kid-edit.component';
import {KidNewComponent} from './kid-new/kid-new.component';

const routes: Routes = [
  {path: '', component: KidsComponent},
  {path: 'new', component: KidNewComponent},
  {path: ':id', component: KidEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
