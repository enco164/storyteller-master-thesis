import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MediaIndexComponent} from './containers/media-index/media-index.component';

const routes: Routes = [
  {path: '', component: MediaIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule {
}
