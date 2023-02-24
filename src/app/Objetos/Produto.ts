const DESCONTO_PADRAO = 10;

export class Produto {
  constructor(public id: number,public nome: string, public preco: number, private desconto: number = DESCONTO_PADRAO) {
  }

public aplicarDesconto = (preco:number ) =>{
return preco - this.desconto
}


}
