import { Component } from '@angular/core';
import { WeatherService } from "./services/weather.service";
import { HttpClientModule,HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ WeatherService,HttpClient ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast ';
  city:String;
  country:String;
  details=[];
  chart:any;
  constructor(private weatherservice:WeatherService){
    console.log("constructor called");
  }
  ngOnInit(){
    this.weatherservice.getWeatherDetails().subscribe((data)=>{

      console.log(data);
     // this.details=data['list'];

     //filtering the five days forecast
      for(let i=0;i<data['list'].length;i+=8)
        {
          this.details.push(data['list'][i]);
        }
        this.city=data['city'].name;
        this.country=data['city'].country;

      
    });
  }
}
