import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchOrInputComponent } from './search-or-input/search-or-input.component';

@NgModule({
  declarations: [MoreDetailsComponent, SearchInputComponent, SearchOrInputComponent],
  imports: [CommonModule],
  exports: [MoreDetailsComponent, SearchInputComponent, SearchOrInputComponent],
})
export class ComponentsModule {}
