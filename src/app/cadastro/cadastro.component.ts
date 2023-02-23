import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { DiasDaSemana } from '../dias-da-semana';
import { Produto } from '../Objetos/Produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit{

  id:any
  texto: string = 'teste'
  valor: number = 0
  endereco: [string,number] = ['rua teste numero:',30]
  dia: DiasDaSemana = DiasDaSemana.seg

  produto: Produto = new Produto('Cadeira', 900)


  constructor(private route: ActivatedRoute,
    private router: Router) { 
     
  } 

  ngOnInit(): void {
     
   this.produto.preco = this.produto.aplicarDesconto(950)

    this.route.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
        alert(this.id)
      }
    }) 

    this.texto = this.retornarNome('João')

  }

  retornarNome = (nome: string): string => {
    return ` ${nome} da Silva ` 
  }

}
