import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: ':slug', component: GalleryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ],
  declarations: [GalleryDetailComponent]
})
export class GalleryRoutingModule { }
