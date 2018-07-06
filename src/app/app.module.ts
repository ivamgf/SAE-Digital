import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { NavComponent } from './views/nav/nav.component';
import { FooterComponent } from './views/footer/footer.component';
import { ShowsComponent } from './views/pages/shows/shows.component';
import { ArmchairsComponent } from './views/pages/armchairs/armchairs.component';
import { BillsComponent } from './views/pages/bills/bills.component';
import { ConsultComponent } from './views/pages/consult/consult.component';
import { PostComponent } from './views/pages/post/post.component';
import { ConsultBillsComponent } from './views/pages/consult-bills/consult-bills.component';
import { ReserveComponent } from './views/pages/reserve/reserve.component';
import { CancelComponent } from './views/pages/cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ShowsComponent,
    ArmchairsComponent,
    BillsComponent,
    ConsultComponent,
    PostComponent,
    ConsultBillsComponent,
    ReserveComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
