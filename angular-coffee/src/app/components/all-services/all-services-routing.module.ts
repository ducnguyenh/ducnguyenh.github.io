import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllServicesComponent } from './all-services.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: AllServicesComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class AllServicesRoutingModule { }
