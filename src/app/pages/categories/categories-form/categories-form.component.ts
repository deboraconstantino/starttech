import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoDynamicFormField, PoNotificationService, PoPageAction } from '@po-ui/ng-components';
import { CategoriesService } from '../../../shared/services/categories/services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  title: string = 'Incluir categoria';
  operation: string = 'new';
  id: string = '';
  category: any;

  readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.saveCategory.bind(this) },
    { label: 'Cancelar', action: this.cancel.bind(this) }
  ]

  readonly fields: Array<PoDynamicFormField> = [
    { property: 'id', required: true, label: 'Código', gridLgColumns: 1, gridMdColumns: 1, gridSmColumns: 12 },
    { property: 'name', required: true, label: 'Título', gridLgColumns: 4, gridMdColumns: 4, gridSmColumns: 12 }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private poDialogService: PoDialogService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setOperation();
    if (this.operation === 'edit') {
      this.getCategory();
    }
  }

  setOperation(): void {
    this.id ? this.operation = 'edit' :  this.operation = 'new';
  }

  getTitlePage(): string {
    return this.operation === 'new' ? 'Incluir categoria' : 'Editar categoria';
  }

  getCategory(): void {
    this.categoriesService.getById(parseInt(this.id)).subscribe({
      next: (category: any) => this.category = category[0]
    });
  }

  getForm(event: any): void {
    this.category = event.value;
  }

  saveCategory(): void {
    let message: string = this.operation === 'new' ? 'Registro incluído com sucesso.' : 'Registro alterado com sucesso.'
    this.poNotificationService.success(message);
    this.router.navigate(['categories']);
    // this.categoriesService.post(this.category).subscribe({
    //   next: () => console.log('ok')
    // });
  }

  cancel(): void {
    this.poDialogService.confirm({
      title: 'Cacenlar',
      message: 'As informações não ficarão salvas. Tem certeza que deseja cancelar?',
      confirm: () => this.router.navigate(['categories'])
    })
  }
}
