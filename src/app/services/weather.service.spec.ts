import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule } from "@angular/common/http";

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
