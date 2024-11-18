import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('../tasks/tasks.module').then(t => t.TasksModule) },
      { path: 'categories', loadChildren: () => import('../categories/categories.module').then(c => c.CategoriesModule) }
    ]
   },
];

export const HomeRoutes = RouterModule.forChild(routes);
