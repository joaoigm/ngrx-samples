import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleStatesComponent } from './multiple-states.component';

const routes: Routes = [{ path: '', component: MultipleStatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleStatesRoutingModule { }
