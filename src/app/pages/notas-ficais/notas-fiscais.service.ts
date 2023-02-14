import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "src/app/model/entity/cliente";
import { NotaFiscal } from '../../model/entity/notaFiscal';
import { ClienteDto } from "src/app/model/dto/clienteDto";

@Injectable({
  providedIn: 'root'
})

  export class NotasFiscaisService {

    constructor(private http: HttpClient){}

    apiUrl: string = 'https://desafio-nota-fiscal-spring-production.up.railway.app/'

    getAllClientes(): Observable<ClienteDto[]> {
      return this.http.get<ClienteDto[]>(`${this.apiUrl}/clientes/dto`);
    }

    getAllNotas(): Observable<NotaFiscal[]> {
      return this.http.get<NotaFiscal[]>(`${this.apiUrl}/obterNotasFiscais/notas`);
    }

    buscarPorNotaCliente(id: Number) :Observable<NotaFiscal[]> {
      return this.http.get<NotaFiscal[]>(`${this.apiUrl}/obterNotasFiscais/${id}`)
    }

    countNotas():  Observable<number>{
      return this.http.get<number>(`${this.apiUrl}/obterNotasFiscais/countNotasFiscais`)
    }

    cadastrar(model: NotaFiscal): Observable<NotaFiscal> {
      return this.http.post<NotaFiscal>(`${this.apiUrl}/obterNotasFiscais/cadastrar`, model)
    }

    delete(id: number) {
       return this.http.delete(`${this.apiUrl}/obterNotasFiscais/delete/${id}`);
    }
  }
