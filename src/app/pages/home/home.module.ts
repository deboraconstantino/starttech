import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    ToolbarModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
