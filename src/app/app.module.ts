import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherService } from "./services/weather.service";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    

  ],
  providers: [WeatherService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
