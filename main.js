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
    nome: "Teste",
    img: "./produtos/camisa-argentina.png",
    descricao: "teste",
    preco: "teste",
    estoque : 0,
    quantidade: 0
  }
];

function validador(valor){
  let divProdutos = document.getElementById('produtos');

  itens.forEach(valor => {
    if(valor.estoque <= 0){
      divProdutos.innerHTML +=
      `
      <p class="ancora" key="`+ valor.codigo +`>ITEM ESGOTADO</p>
      `
    } else{
      divProdutos.innerHTML += `
      <a class="ancora" key="`+ valor.codigo + `" href"#">Adicionar ao carrinho</a>
      `
    }
    // valor.estoque <= 0? valor.nome + ' Esgotado ': valor.estoque;
  });
  
}


loja = () => {
    let divProdutos = document.getElementById('produtos');

    itens.map((valor) => {
        divProdutos.innerHTML += `
        <div id="produtos">
      <ul>
        <li>
            <img src="` + 
            valor.img +`"/>
            <h2>` + valor.nome +`</h2>
            <h3>`+ valor.preco +`</h3>
            <p>`+ valor.descricao +`</p>
            <p>Estoque : ` + valor.estoque +`</p>`+
            validador()+`
            `/*<a class="ancora" key="`+ valor.codigo +`" href"#">Adicionar ao carrinho</a>*/`
            </li>
          </div>
        `
    })
}

loja();


adicionarCarrinho = () => {

  let divCarrinho = document.getElementById('carrinho');
  divCarrinho.innerHTML = "";

  itens.map((valor) => {
      if(valor.quantidade > 0){
    
    divCarrinho.innerHTML += `
    <p>`+ valor.nome +` | quantidade : `+valor.quantidade+`| código do produto : 0`+valor.codigo+`</p>
    <hr>
    `}
})
    
};

// adicionarCarrinho();


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        adicionarCarrinho();
        return false;
    })
}

// iniciarLoja = () => {
//   let divProdutos = document.getElementById("produtos");
//   itens.map((valor) => {
//     divProdutos.innerHTML +=
//       `
//             <div id="produtos">
//             <img src="` +
//       valor.img +
//       `"/>
//             <p>+` +
//       valor.nome +
//       `</p>
//             <a key="` +
        
//       valor.codigo +
//       `" href"#"> Adicionar ao Carrinho</a>
//         `;
        
//   });
// };

// iniciarLoja();

// adicionarCarrinho = (
    
// ) => {console.log(itens)};

// let links = document.getElementsByTagName('a')

// for (var i = 0; i < links < links.length; i++){
//     links[i].addEventListener("click", function(){
//         let key = links.getAttribute('key');
//         itens[key].quantidade++;
//         adicionarCarrinho();
//         return false;
//     })
// }