import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule,
    SharedModule,
  ]
})
export class AboutUsRoutingModule { }
