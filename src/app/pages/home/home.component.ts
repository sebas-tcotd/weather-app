import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { first, last } from 'rxjs/operators';
import { ComponentType } from 'src/app/constants/componentType';
import { WeatherResponse } from 'src/app/models/weather';
import { SearchService } from 'src/app/services/search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private searchSubscription!: Subscription;
  public type = ComponentType.MoreDetails;
  public searchWord: string = '';
  public vm$!: Observable<WeatherResponse>;

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.search$.subscribe(
      (word) => (this.searchWord = word)
    );
    this.vm$ = this.weatherService.weather$;
    console.log(this.vm$);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  toggleComponent() {
    if (this.type === ComponentType.MoreDetails)
      return (this.type = ComponentType.SearchInput);

    if (!this.vm$.pipe(last())) return;

    if (this.type === ComponentType.SearchInput)
      return (this.type = ComponentType.MoreDetails);

    return this.search();
  }

  search() {
    this.vm$ = this.weatherService.searchWeather(this.searchWord)!;
  }
}
