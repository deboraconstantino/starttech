import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutes } from './categories.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutes,
    ToolbarModule,
    PoTemplatesModule,
    PoModule
  ],
  declarations: [CategoriesComponent, CategoriesFormComponent]
})
export class CategoriesModule { }
