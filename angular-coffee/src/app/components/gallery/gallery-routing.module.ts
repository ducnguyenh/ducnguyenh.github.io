import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: ':slug', component: GalleryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [GalleryDetailComponent]
})
export class GalleryRoutingModule { }
