import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkMenuComponent } from './drink-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: DrinkMenuComponent }];

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
export class DrinkMenuRoutingModule { }
