import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AreaDetailComponent} from "./area-detail/area-detail.component";


const routes: Routes = [
  {
    path: 'area/:id',
    component: AreaDetailComponent
  },
  {
    path: 'inicio',
    component: DashboardComponent,
    data: {title: 'Inicio'}
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
