import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit, OnDestroy {
  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.searchService.setSearchWord('');
  }

  emitSearchWord(word: string) {
    this.searchService.setSearchWord(word);
  }

  searchWeather(city: string) {
    this.weatherService
      .getWeatherByCity(city)
      ?.subscribe((res) => this.weatherService.setWeather(res));
  }
}
