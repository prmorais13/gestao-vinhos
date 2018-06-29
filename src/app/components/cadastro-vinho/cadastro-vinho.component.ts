import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Vinho} from '../../models/vinho';

import {VinhosService} from '../../services/vinhos.service';

@Component({
  selector: 'app-cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<String>;
  classificacoes: string[];

  constructor(
    private router: Router,
    private vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.vinho = new Vinho(
      null, '', '', '', '', '', null
    );

    this.uvas = ['Merlot', 'Cabernet Sauvignon', 'Carmenere'];
    this.classificacoes = ['Tinto', 'Branco', 'Rosê'];
  }

  salvar() {
    this.vinhosService.cadastrarVinho(this.vinho)
      .subscribe(response => {
        console.log(response);
        alert('Vinho cadastrado com sucesso');
        this.router.navigate(['/vinhos']);
      });
  }

  voltar() {
    this.router.navigate(['/vinhos']);
  }

}
