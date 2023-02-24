import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { DiasDaSemana } from '../dias-da-semana';
import { Produto } from '../Objetos/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit{

  id:any
  
  produto: Produto = new Produto(0,'',0)


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
    ) { } 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
        alert(this.id)
      }
    }) 
  }

  adicionar = () => {
    this.prodService.adicionar(this.produto).subscribe(
      success => console.log('Salvou'),
      error => console.log('Deu Ruim'),
      () => console.log('Requisição Completa'))
      this.router.navigate(['home'])
  }

}
