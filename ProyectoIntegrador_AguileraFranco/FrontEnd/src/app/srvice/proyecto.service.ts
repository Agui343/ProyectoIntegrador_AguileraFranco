import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL + ' proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public ubdate(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `detail/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `detail/${id}`);
  }
}
