import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComponentType } from 'src/app/constants/componentType';
import { Weather } from 'src/app/models/weather.model';
import { loadWeather, resetSearch } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { searchSelector } from 'src/app/store/selectors/search.selectors';
import { selectWeather } from 'src/app/store/selectors/weather.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  public type = ComponentType.MoreDetails;
  public weather$!: Observable<Weather>;
  public searchWord: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.weather$ = this.store.select(selectWeather);
    this.store
      .select(searchSelector)
      .subscribe((word) => (this.searchWord = word));
  }

  ngOnDestroy(): void {}

  toggleComponent() {
    if (this.type === ComponentType.MoreDetails)
      return (this.type = ComponentType.SearchInput);

    // if (!this.vm$.pipe(last())) return;

    if (this.type === ComponentType.SearchInput) this.search();
    return (this.type = ComponentType.MoreDetails);
  }

  search() {
    this.store.dispatch(loadWeather({ payload: this.searchWord }));
    this.store.dispatch(resetSearch());
  }
}
