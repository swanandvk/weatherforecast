import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class WeatherService {

  constructor(public http:HttpClient) {
    console.log("open weather service connected");
   }

   getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res);
      }


      getWeatherDetails(){
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Pune,ind&units=metric&appid=1ffaa80ea2d33fe521d4f7f22167adcf').map(res => res);
      }
}
