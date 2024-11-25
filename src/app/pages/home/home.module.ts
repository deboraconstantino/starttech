import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    ToolbarModule,
    PoToolbarModule,
    PoMenuModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
