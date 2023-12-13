import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './TestComponents/main/main.component';
import { SwipeNavigationModule } from 'projects/swipe-navigation/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwipeNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
