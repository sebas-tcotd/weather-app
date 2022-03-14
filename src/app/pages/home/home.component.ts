import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ComponentType } from 'src/app/constants/componentType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  type = ComponentType.MoreDetails;

  constructor() {}

  ngOnInit(): void {}

  toggleComponent() {
    if (this.type === ComponentType.MoreDetails) {
      this.type = ComponentType.SearchInput;
    } else {
      this.type = ComponentType.MoreDetails;
    }
  }
}
