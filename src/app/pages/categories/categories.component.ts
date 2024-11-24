import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../shared/services/categories/services/categories.service';
import { Router } from '@angular/router';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  titulo: string = 'meu titulo';
  readonly fields: Array<any> = [
    { property: 'id', key: true, label: 'Código' },
    { property: 'name', label: 'Título' }
  ];

  readonly actions: PoPageDynamicTableActions = {
    new: '/categories/categories-form',
    remove: true,
    edit: '/categories/categories-form/:id'
  };

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToForm(): void {
    this.router.navigate(['categories/categories-form']);
  }

  getColumnTitle(columnName: string): string {
    switch(columnName) {
      case 'id':
        return 'Código';
      case 'name':
        return 'Nome';
      default:
        return '';
    }
  }

  getColumnData(columnName: string, element: any): any {
    switch(columnName) {
      case 'id':
        return element.id;
      case 'name':
        return element.name;
      default:
        return '';
    }
  }
}
