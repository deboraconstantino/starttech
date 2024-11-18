import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToolbarModule } from '../../shared/components/toolbar/toolbar.module';
import {MatButtonModule} from '@angular/material/button';
import { TasksRoutes } from './tasks.routing';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ToolbarModule,
    MatButtonModule,
    TasksRoutes
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
