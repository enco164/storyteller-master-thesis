import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KidsComponent} from './containers/kids-table-page/kids.component';
import {KidEditComponent} from './containers/kid-edit-page/kid-edit.component';
import {KidNewComponent} from './containers/kid-new-page/kid-new.component';

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
