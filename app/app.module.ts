import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppHome } from './home';
import { LoginApp} from './login';
import { DashboardApp } from './dashboard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginApp,
    AppHome,
    DashboardApp

  ],
  bootstrap: [ AppComponent ]
})
