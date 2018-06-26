import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SessionsIndexComponent} from './containers/sessions-index/sessions-index.component';
import {SessionNewComponent} from './containers/session-new/session-new.component';
import {SessionEditComponent} from './containers/session-edit/session-edit.component';

const routes: Routes = [
  {path: '', component: SessionsIndexComponent},
  {path: 'new', component: SessionNewComponent},
  {path: ':id/edit', component: SessionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {
}
