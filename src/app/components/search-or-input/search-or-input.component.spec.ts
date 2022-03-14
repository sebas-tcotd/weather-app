import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrInputComponent } from './search-or-input.component';

describe('SearchOrInputComponent', () => {
  let component: SearchOrInputComponent;
  let fixture: ComponentFixture<SearchOrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
