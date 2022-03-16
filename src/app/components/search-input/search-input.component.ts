import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWeather, performSearch, resetSearch } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent implements OnInit {
  search$!: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  emitSearchWord(word: string) {
    this.store.dispatch(performSearch({ searchWord: word }));
  }

  searchWeather(city: string) {
    this.store.dispatch(loadWeather({ payload: city }));
  }
}
