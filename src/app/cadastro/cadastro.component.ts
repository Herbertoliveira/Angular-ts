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
  textoBotao: string = 'Salvar'


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
    ) { } 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.prodService.buscarItemId(this.id).subscribe(prod => {
        this.produto = prod
        })

        console.log(`id enviado: ${this.id}`)
      }
    }) 
  }

  adicionar = () => {
    if(this.textoBotao == 'Salvar'){
      this.prodService.adicionar(this.produto).subscribe(
        success => console.log('Salvou'),
        error => console.log('Deu Ruim'),
        () => console.log('Requisição Completa'))
      } else {
        this.editar()
      }
      this.router.navigate(['home'])
  }

  editar = () => {
    this.prodService.editar(this.produto).subscribe(
      success => console.log('Editou'),
      error => console.log('Deu Ruim'),
      () => console.log('Requisição Completa'))
      this.router.navigate(['home'])
  }

}
