/**
 * Interface para registros de tarefas.
 */
export interface Task {
  id: number;
  title: string;
  category: number;
  status: number;
}

/**
 * Interface para listagem de tarefas.
 */
export interface Tasks {
  items: Array<Task>;
  hasNext: boolean;
}
