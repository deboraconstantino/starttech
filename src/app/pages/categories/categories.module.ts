import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutes } from './categories.routing';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutes,
    ToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ToolbarModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [CategoriesComponent, CategoriesFormComponent]
})
export class CategoriesModule { }
