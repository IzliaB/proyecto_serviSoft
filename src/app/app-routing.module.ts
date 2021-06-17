import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SolucionComponent } from '../app/solucion/solucion.component';
import { VideoListComponent } from '../app/video-list/video-list.component';
import { VideoPreviewComponent } from '../app/video-preview/video-preview.component';


const routes: Routes = [
  { path: 'solucion', component: SolucionComponent},
  { path: 'solucion/search', component: VideoListComponent},
  { path: 'solucion/preview', component: VideoPreviewComponent},
  {path: '', redirectTo: '/solucion', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
