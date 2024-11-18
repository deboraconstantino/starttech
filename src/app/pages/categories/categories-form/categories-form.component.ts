import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit, OnDestroy {
  nome: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('fechando componente');
  }

  mostrarNome(): void {
    alert(this.nome);
  }
}
