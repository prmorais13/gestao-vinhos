import { Injectable } from '@angular/core';
import {Vinho} from '../models/vinho';

@Injectable({
  providedIn: 'root'
})
export class VinhosService {

  constructor() { }

  listar(): Array<Vinho> {
    let vinhos = new Array<Vinho>();

    vinhos.push(this.criarVinho(1, `Casillerro Del Diabo`, "Tinto", "Cabernet Sauvignon", "Paulo", "Chile", 2010));
    vinhos.push(this.criarVinho(2, "Casillerro Del Diabo", "Tinto", "Merlot", "Concha y Toro", "Chile", 2015));

    return vinhos;
  }

  private criarVinho(id: number, nome: string, classificacao: string, uva: string,
                     fabricante: string, paisOrigem: string, anoSafra: number) {

    let vinho: Vinho;
    vinho = new Vinho(id, nome, classificacao, uva, fabricante, paisOrigem, anoSafra);
    return vinho;
  }
}
