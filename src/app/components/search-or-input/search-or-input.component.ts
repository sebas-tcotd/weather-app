import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComponentType } from 'src/app/constants/componentType';
import { toggleToDetails, toggleToSearch } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { bottomBarSelector } from 'src/app/store/selectors/bottom-bar.selectors';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search-or-input',
  template: '<ng-template #dynamic></ng-template>',
})
export class SearchOrInputComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @Input() component!: ComponentType;
  @ViewChild('dynamic', { read: ViewContainerRef })
  vrf!: ViewContainerRef;
  component$!: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.component$ = this.store.select(bottomBarSelector);
  }

  ngAfterViewInit(): void {
    this.vrf.createComponent(MoreDetailsComponent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['component'].currentValue !== undefined &&
      this.vrf !== undefined
    ) {
      this.loadDynamicComponent(changes['component'].currentValue);
    }
  }

  private loadDynamicComponent(type: ComponentType) {
    let component;

    switch (type) {
      case ComponentType.MoreDetails:
        this.store.dispatch(toggleToDetails());
        component = MoreDetailsComponent;
        break;

      case ComponentType.SearchInput:
        this.store.dispatch(toggleToSearch());
        component = SearchInputComponent;
        break;
    }

    this.vrf.clear();
    this.vrf.createComponent(component);
  }
}
