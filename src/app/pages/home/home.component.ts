import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ComponentType } from 'src/app/constants/componentType';
import { SearchService } from 'src/app/services/search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  type = ComponentType.MoreDetails;
  private searchSubscription!: Subscription;
  public searchWord: string = '';

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.search$.subscribe(
      (word) => (this.searchWord = word)
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  toggleComponent() {
    if (this.type === ComponentType.MoreDetails) {
      this.type = ComponentType.SearchInput;
    } else {
      this.search();
      this.type = ComponentType.MoreDetails;
    }
  }

  search() {
    this.weatherService.searchWeather(this.searchWord);
  }
}
