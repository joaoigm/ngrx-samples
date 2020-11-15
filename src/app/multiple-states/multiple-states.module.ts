import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleStatesRoutingModule } from './multiple-states-routing.module';
import { MultipleStatesComponent } from './multiple-states.component';
import { StoreModule } from '@ngrx/store';
import { countReducer } from 'src/app/state-management/reducers/count.reducer';
import { namesReducer } from 'src/app/state-management/reducers/names.reducer';


@NgModule({
  declarations: [MultipleStatesComponent],
  imports: [
    CommonModule,
    MultipleStatesRoutingModule,
    StoreModule.forFeature('states', {
      count: countReducer,
      names: namesReducer
    })
  ]
})
export class MultipleStatesModule { }
