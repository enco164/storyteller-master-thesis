import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KidsIndexComponent} from './containers/kids-index/kids-index.component';
import {KidEditComponent} from './containers/kid-edit-page/kid-edit.component';
import {KidNewComponent} from './containers/kid-new-page/kid-new.component';

const routes: Routes = [
  {path: '', component: KidsIndexComponent},
  {path: 'new', component: KidNewComponent},
  {
    path: ':id/edit', component: KidEditComponent,
    // canActivate: [KidExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule {
}
