import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../interfaces/tasks.interface';

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
}
