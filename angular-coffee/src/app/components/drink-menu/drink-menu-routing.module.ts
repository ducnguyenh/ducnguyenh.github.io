import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkMenuComponent } from './drink-menu.component';

const routes: Routes = [{ path: '', component: DrinkMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkMenuRoutingModule { }
