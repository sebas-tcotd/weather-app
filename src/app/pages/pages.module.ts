import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveComponentModule } from '@ngrx/component';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, ReactiveComponentModule],
})
export class PagesModule {}
