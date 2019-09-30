import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkMenuRoutingModule } from './drink-menu-routing.module';
import { DrinkMenuComponent } from './drink-menu.component';


@NgModule({
  declarations: [DrinkMenuComponent],
  imports: [
    CommonModule,
    DrinkMenuRoutingModule
  ]
})
export class DrinkMenuModule { }
