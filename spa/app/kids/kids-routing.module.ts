import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KidsComponent} from './containers/kids-table-page/kids.component';
import {KidEditComponent} from './containers/kid-edit-page/kid-edit.component';
import {KidNewComponent} from './containers/kid-new-page/kid-new.component';
import {KidExistsGuard} from './guards/kid-exists.guard';

const routes: Routes = [
  {path: '', component: KidsComponent},
  {path: 'new', component: KidNewComponent},
  {path: ':id', component: KidEditComponent, canActivate: [KidExistsGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
