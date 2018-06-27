import { Component, OnInit } from '@angular/core';
import {Vinho} from '../../models/vinho';
import {VinhosService} from '../../services/vinhos.service';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;

  constructor(
    private vinhosService: VinhosService
  ) { }

  ngOnInit() {
    this.vinhos = this.vinhosService.listar();
  }

}
