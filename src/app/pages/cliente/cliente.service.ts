import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/model/entity/cliente";

@Injectable({
  providedIn: 'root'
})

  export class ClienteService {

    constructor(private http: HttpClient){}

    apiUrl: string = 'http://localhost:8080/clientes'

    getAll(): Observable<Cliente> {
      return this.http.get<Cliente>(`${this.apiUrl}`);
    }

    register(model: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.apiUrl}`, model)
    }

    findByRazaoSocial (model: string): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.apiUrl}/find`, model)
    }

    delete(model: number) {
      return this.http.delete(`${this.apiUrl}/${model}`);
    }

  }