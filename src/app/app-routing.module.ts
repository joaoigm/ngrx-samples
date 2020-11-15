import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'states',
    pathMatch: 'full'
  },
  { 
    path: 'states', 
    loadChildren: () => import('./multiple-states/multiple-states.module').then(m => m.MultipleStatesModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
