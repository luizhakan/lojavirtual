let itens = [
  {
    codigo: 0,
    nome: "Camisa Seleção Brasileira",
    img: "./produtos/camisa-brasil.png",
    descricao: "Seleção penta-campeã mundial",
    preco : "R$ 150,00",
    estoque: 10,
    quantidade: 0
  },
  {
    codigo: 1,
    nome: "Camisa Seleção Colombiana",
    img: "./produtos/camisa-colombia.png",
    preco : "R$ 150,00",
    descricao: "Seleção campeã da américa em 2001",
    estoque: 10,
    quantidade: 0
  },
  {
    codigo: 2,
    nome: "Camisa Seleção Argentina",
    img: "./produtos/camisa-argentina.png",
    descricao: "Seleção 7x campeã do panamericano",
    preco : "R$ 150,00",
    estoque: 10,
    quantidade: 0
  },
  {
    codigo: 3,
    nome: "Luiz Hakan",
    img: "./produtos/camisa-argentina.png",
    descricao: "O melhor, receba",
    preco: "R$ 1000,00",
    estoque : 1000,
    quantidade: 0
  }
];

const divProdutos = document.querySelector('#produtos');
var divCarrinho = document.querySelector('#carrinho');

itens.forEach((item) => {
  divProdutos.innerHTML += `
  <div id="produto-js">
    <ul>
      <li>
      <img src="`+item.img+`"</img>
      <p>`+item.nome+`</p>
      <p>`+item.descricao+`</p>
      <p>`+item.preco+`</p>
      <p> Estoque : `+item.estoque+`</p>
      <button id="botao" key="`+item.codigo+`">Adicionar ao Carrinho</button>
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
      <div id="carrinho-js">
      <p style="float:left"> Produto : `+valor.nome+`</p>
      <p style="float:right"> Quantidade : `+valor.quantidade+`</p>
      </div style="clear:both">
      `
    }
  })
}

for(var i = 0; i < botao.length; i++){
  botao[i].addEventListener("click", function(){
    let key = this.getAttribute('key');
    itens[key].quantidade++;
    adicionarCarrinho();
  })
}