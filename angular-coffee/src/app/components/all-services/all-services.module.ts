import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServicesRoutingModule } from './all-services-routing.module';
import { AllServicesComponent } from './all-services.component';


@NgModule({
  declarations: [AllServicesComponent],
  imports: [
    CommonModule,
    AllServicesRoutingModule
  ]
})
export class AllServicesModule { }
