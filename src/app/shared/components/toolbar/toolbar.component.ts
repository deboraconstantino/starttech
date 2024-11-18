import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'meu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() meuEvento = new EventEmitter<string>();
  @Input('titulo') titulo: string = 'Minhas tarefas';

  constructor(private router: Router) { }

  ngOnInit() {
    this.meuEvento.emit('entrei no evento');
  }

  goToCategories(): void {
    this.router.navigate(['categories']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
