import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient
  ) {}

  get(): Observable<any> { // Aqui ele retorna any, pq é uma definição do db.json que estamos utilizando. No backend real, poderíamos retornar Observable<Tasks>.
    return this.http.get('http://localhost:3000/tasks');
  }

  getById(id: number): Observable<any> {
    return this.get().pipe(
      map((tasks: any) => tasks.items.filter((task: any) => task.id === id))
    );
  }

  post(body: any): Observable<any> {
    return this.http.post('http://localhost:3000/tasks', body);
  }
}
