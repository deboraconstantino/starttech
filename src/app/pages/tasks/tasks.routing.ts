import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksFormComponent } from './tasks-form/tasks-form.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'tasks-form', component: TasksFormComponent },
  { path: 'tasks-form/:id', component: TasksFormComponent }
];

export const TasksRoutes = RouterModule.forChild(routes);
