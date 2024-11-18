import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories-form', component: CategoriesFormComponent }
];

export const CategoriesRoutes = RouterModule.forChild(routes);
