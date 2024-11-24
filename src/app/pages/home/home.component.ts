import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Tarefas', shortLabel: 'Home', icon: 'ph ph-house', action: this.goToTasks.bind(this) },
    { label: 'Categorias', shortLabel: 'Categorias', icon: 'ph ph-cards', action: this.goToCategories.bind(this) }
  ];

  constructor(
    private router: Router
  ) {}

  mostraEvento(event: string): void {
    console.log(event);
  }

  goToTasks(): void {
    this.router.navigate(['']);
  }

  goToCategories(): void {
    this.router.navigate(['/categories']);
  }
}
