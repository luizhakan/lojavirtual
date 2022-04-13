let itens = [
  {
    codigo: 0,
    nome: "Camisa Seleção Brasileira",
    img: "./produtos/camisa-brasil.png",
    descricao: "Seleção penta-campeã mundial",
    preco : "R$ 150,00",
    quantidade: 0,
    estoque: 10
  },
  {
    codigo: 1,
    nome: "Camisa Seleção Colombiana",
    img: "./produtos/camisa-colombia.png",
    preco : "R$ 150,00",
    descricao: "Seleção campeã da américa em 2001",
    quantidade: 0,
    estoque: 10
  },
  {
    codigo: 2,
    nome: "Camisa Seleção Argentina",
    img: "./produtos/camisa-argentina.png",
    descricao: "Seleção 7x campeã do panamericano",
    preco : "R$ 150,00",
    quantidade: 0,
    estoque: 10
  },
  {
    codigo: 3,
    nome: "Luiz Hakan",
    img: "./produtos/camisa-argentina.png",
    descricao: "O melhor, receba",
    preco: "R$ 1000,00",
    quantidade: 0,
    estoque: 10
  }
];

const divProdutos = document.querySelector('#produtos');
var divCarrinho = document.querySelector('#carrinho');

itens.forEach((item) => {
  divProdutos.innerHTML += `
  <div class="col">
    <ul>
      <li class="card-body">
      <img src="`+item.img+`"</img>
      <p>`+item.nome+`</p>
      <p>`+item.descricao+`</p>
      <p>`+item.preco+`</p>
      <p id="estoque">Estoque : `+item.estoque+`</p>
      <button class="w-100 btn btn-lg btn-primary" key="`+item.codigo+`">Adicionar ao Carrinho</button>
      </li>
    </ul>
  </div>
  `
})

const botao = document.getElementsByTagName('button');

function adicionarCarrinho(){
  divCarrinho.innerHTML = "";
  itens.forEach((valor) => {
    if(valor.quantidade > 0){
      divCarrinho.innerHTML += `
      <div class="table-responsive">
      <p style="float:left"> Produto : `+valor.nome+`</p>
      <p style="float:right"> Quantidade : `+valor.quantidade+`</p>
      </div style="clear:both">
      `
    }
  })
}

for(var i = 0; i < botao.length; i++){
  let estoque = document.getElementById('estoque')
  botao[i].addEventListener("click", function(){
    let key = this.getAttribute('key');
    if(itens[key].estoque > 0){
      itens[key].quantidade++;
      itens[key].estoque--;
      
    } else if(itens[key].estoque == 0){
      alert('esgotado')
    }
    adicionarCarrinho()
  })
}