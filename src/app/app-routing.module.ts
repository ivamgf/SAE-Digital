import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { ShowsComponent } from './views/pages/shows/shows.component';
import { ArmchairsComponent } from './views/pages/armchairs/armchairs.component';
import { BillsComponent } from './views/pages/bills/bills.component';
import { ConsultComponent } from './views/pages/consult/consult.component';
import { PostComponent } from './views/pages/post/post.component';
import { ConsultBillsComponent } from './views/pages/consult-bills/consult-bills.component';
import { ReserveComponent } from './views/pages/reserve/reserve.component';
import { CancelComponent } from './views/pages/cancel/cancel.component';

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
    },
    {
      path: 'consult',
      component: ConsultComponent
    },
    {
      path: 'post',
      component: PostComponent
    },
    {
      path: 'consult-bills',
      component: ConsultBillsComponent
    },
    {
      path: 'reserve',
      component: ReserveComponent
    },
    {
      path: 'cancel',
      component: CancelComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
