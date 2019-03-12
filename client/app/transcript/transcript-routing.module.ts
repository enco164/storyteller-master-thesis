import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TranscriptIndexComponent} from './transcript-index/transcript-index.component';
import {TranscriptEditorComponent} from './transcript-editor/transcript-editor.component';

const routes: Routes = [
  {path: '', component: TranscriptIndexComponent},
  {path: 'editor', component: TranscriptEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranscriptRoutingModule {
}
