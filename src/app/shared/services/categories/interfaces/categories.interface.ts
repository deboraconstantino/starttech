/**
 * Interface para dados de uma categoria.
 */
export interface Category {
  id: number;
  name: string;
}

/**
 * Interface para listagem de categorias.
 */
export interface Categories {
  items: Array<Category>;
  hasNext: boolean;
}
