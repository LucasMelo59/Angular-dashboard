import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/model/entity/cliente";

@Injectable({
  providedIn: 'root'
})

  export class HomeService {

    constructor(private http: HttpClient){}

    apiUrl: string = 'http://localhost:8080'

    getAll(): Observable<Cliente> {
      return this.http.get<Cliente>(`${this.apiUrl}/clientes`);
    }

    register(model: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.apiUrl}/clientes`, model)
    }

    findByRazaoSocial (model: string): Observable<Cliente>{
      return this.http.post<Cliente>(`${this.apiUrl}/clientes/find`, model)
    }

    delete(model: number) {
      return this.http.delete(`${this.apiUrl}/clientes/${model}`);
    }

    countCLientes(): Observable<number>{
      return this.http.get<number>(`${this.apiUrl}/clientes/countCLientes`)
    }

    countCLienteForType(model: string):  Observable<number>{
      return this.http.post<number>(`${this.apiUrl}/clientes/countPorTipo`, model)
    }

    countNotas():  Observable<number>{
      return this.http.get<number>(`${this.apiUrl}/obterNotasFiscais/countNotasFiscais`)
    }
  }
