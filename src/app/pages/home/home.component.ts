import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { last, tap, first } from 'rxjs/operators';
import { ComponentType } from 'src/app/constants/componentType';
import { WeatherResponse } from 'src/app/models/weather';
import { SearchService } from 'src/app/services/search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  @Output() weatherTypeEmitter = new EventEmitter();
  private searchSubscription!: Subscription;
  public type = ComponentType.MoreDetails;
  public searchWord: string = '';
  public vm$!: Observable<WeatherResponse>;
  public geoPosition!: GeolocationCoordinates;

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.search$.subscribe(
      (word) => (this.searchWord = word)
    );

    this.vm$ = this.weatherService.weather$;
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  async getPosition() {
    this.geoPosition = await this.weatherService.getGeoposition();
  }

  toggleComponent() {
    if (this.type === ComponentType.MoreDetails)
      return (this.type = ComponentType.SearchInput);

    if (!this.vm$.pipe(last())) return;

    if (this.type === ComponentType.SearchInput) this.search();
    return (this.type = ComponentType.MoreDetails);
  }

  search() {
    this.vm$ = this.weatherService.getWeatherByCity(this.searchWord)?.pipe(
      first(),
      tap((res) => this.weatherService.setWeatherType(res.main.temp)),
    )!;
  }
}
