import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaIndexComponent} from './containers/media-index/media-index.component';
import {MediaRoutingModule} from './media-routing.module';
import {MediaListComponent} from './components/media-list/media-list.component';
import {MediaResource} from './services/media.resouce';

@NgModule({
  imports: [
    CommonModule,

    MediaRoutingModule
  ],
  declarations: [MediaIndexComponent, MediaListComponent],
  providers: [MediaResource]
})
export class MediaModule {
}
