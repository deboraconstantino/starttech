import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../shared/services/tasks/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks$!: Observable<any>;
  columns: Array<string> = ['id', 'title', 'category', 'status'];

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tasks$ = this.tasksService.get();
  }

  getColumnTitle(columnName: string): string {
    switch(columnName) {
      case 'id':
        return 'Código';
      case 'title':
        return 'Título';
      case 'category':
        return 'Categoria';
      case 'status':
        return 'Status';
      default:
        return '';
    }
  }

  getColumnData(columnName: string, element: any): any {
    switch(columnName) {
      case 'id':
        return element.id;
      case 'title':
        return element.title;
      case 'category':
        return element.category;
      case 'status':
        return element.status;
      default:
        return '';
    }
  }

  goToForm(): void {
    this.router.navigate(['/tasks-form']);
  }
}
