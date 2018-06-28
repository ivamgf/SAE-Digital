import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { ShowsComponent } from './views/pages/shows/shows.component';
import { ArmchairsComponent } from './views/pages/armchairs/armchairs.component';
import { BillsComponent } from './views/pages/bills/bills.component';

const routes: Routes = [
  {
      path: '',
          redirectTo: 'home',
          pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'shows',
      component: ShowsComponent
    },
    {
      path: 'armchairs',
      component: ArmchairsComponent
    },
    {
      path: 'bills',
      component: BillsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
