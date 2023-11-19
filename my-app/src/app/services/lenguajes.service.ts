import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

    url: string = "https://apirest-519d9-default-rtdb.firebaseio.com/v1/topList.json"
 
  constructor(private http: HttpClient) { }

  getLenguajes(): Observable<any>
  {
    return this.http.get(this.url)
  }
}
