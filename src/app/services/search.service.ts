import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: Subject<string> = new Subject();
  public search$ = this.searchSubject.asObservable();

  constructor() {}

  public setSearchWord(word: string) {
    this.searchSubject.next(word);
  }
}
