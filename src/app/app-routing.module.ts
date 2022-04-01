import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';

const routes: Routes = [
  {
    path: '',
    component: ListDataComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
