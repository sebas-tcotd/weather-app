import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentType } from 'src/app/constants/componentType';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search-or-input',
  template: '<ng-template #dynamic></ng-template>'
})
export class SearchOrInputComponent implements OnChanges, AfterViewInit {
  @Input() component!: ComponentType;
  @ViewChild('dynamic', { read: ViewContainerRef, static: false })
  vrf!: ViewContainerRef;

  constructor() {}

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
