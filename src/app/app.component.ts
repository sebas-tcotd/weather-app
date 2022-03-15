import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  public weatherType: number = NaN;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherType$.subscribe((temp) => {
      console.log(temp);
      this.weatherType = temp;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
