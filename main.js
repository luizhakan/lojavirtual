let itens = [
  {
    codigo: 0505,
    nome: "Camisa Seleção Brasileira",
    img: "./produtos/camisa-brasil.png",
    descricao: "Seleção penta-campeã mundial",
    preco : "R$ 150,00",
    estoque: 10,
    quantidade: 0
  },
  {
    codigo: 2001,
    nome: "Camisa Seleção Colombiana",
    img: "./produtos/camisa-colombia.png",
    preco : "R$ 150,00",
    descricao: "Seleção campeã da américa em 2001",
    estoque: 10,
    quantidade: 0
  },
  {
    codigo: 0707,
    nome: "Camisa Seleção Argentina",
    img: "./produtos/camisa-argentina.png",
    descricao: "Seleção 7x campeã do panamericano",
    preco : "R$ 150,00",
    estoque: 10,
    quantidade: 0
  },
];

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
            <p>Estoque : `+ valor.estoque +`</p>
            <input type="button" class="ancora" key="`+ valor.codigo +`" onClick="adicionarCarrinho()" value="Adicionar ao carrinho">
            </li>
          </div>
        `
    })
}

loja();




adicionarCarrinho = (key) => {
    
    console.log(itens.quantidade);
};



var links = document.querySelectorAll('.ancora');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        // itens[key].quantidade++;
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