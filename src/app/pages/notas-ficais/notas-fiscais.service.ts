import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/model/entity/cliente";
import { NotaFiscal } from '../../model/entity/notaFiscal';

@Injectable({
  providedIn: 'root'
})

  export class NotasFiscaisService {

    constructor(private http: HttpClient){}

    apiUrl: string = 'http://localhost:8080/obterNotasFiscais'

    getAll(): Observable<NotaFiscal[]> {
      return this.http.get<NotaFiscal[]>(`${this.apiUrl}/notas`);
    }

    countNotas():  Observable<number>{
      return this.http.get<number>(`${this.apiUrl}/countNotasFiscais`)
    }
  }
