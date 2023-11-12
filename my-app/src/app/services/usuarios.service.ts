import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  url: string = "http://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>
  {
    return this.http.get(this.url)
  }
}
