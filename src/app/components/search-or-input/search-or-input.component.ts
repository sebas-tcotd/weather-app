import {
  AfterViewChecked,
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
  template: '<ng-template #vrf></ng-template>',
})
export class SearchOrInputComponent implements OnInit, AfterViewInit {
  @ViewChild('vrf', { read: ViewContainerRef })
  private vrf!: ViewContainerRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.vrf.createComponent(MoreDetailsComponent);

    this.store.select(bottomBarSelector).subscribe((component) => {
      if (this.vrf !== undefined) this.loadDynamicComponent(component);
    });
  }

  private loadDynamicComponent(type: ComponentType) {
    let component;

    switch (type) {
      case ComponentType.MoreDetails:
        component = MoreDetailsComponent;
        break;

      case ComponentType.SearchInput:
        component = SearchInputComponent;
        break;
    }

    this.vrf.clear();
    this.vrf.createComponent(component);
  }
}
