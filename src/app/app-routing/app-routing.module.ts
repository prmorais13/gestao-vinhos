import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {VinhosComponent} from '../components/vinhos/vinhos.component';
import {CadastroVinhoComponent} from '../components/cadastro-vinho/cadastro-vinho.component';

const routes: Routes = [
  { path: '', redirectTo: '/vinhos', pathMatch: 'full' },
  { path: 'vinhos', component: VinhosComponent  },
  { path: 'cadastro-vinho', component: CadastroVinhoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
