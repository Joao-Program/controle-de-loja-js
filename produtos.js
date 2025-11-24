let produtos = [
  { nome: "Camisa", preco: 50, vendido: false },
  { nome: "Tênis", preco: 200, vendido: true },
  { nome: "Boné", preco: 30, vendido: false }
];

//Adiciona um novo produto ao array principal
function adicionarProduto(nome, preco){
    let novoProduto = {
        nome: nome,
        preco: preco,
        vendido: false
    };

    produtos.push(novoProduto);
    console.log(`${nome} foi adicionado ao sistema.`);
}

//Aplica desconto aos produtos
function aplicarDesconto(percentual){
    let produtoDescontado = produtos.map(produto => {
        return{
             nome: produto.nome,
             preco: produto.preco * (1 - percentual/100),
             vendido: produto.vendido
         };
      });

    return produtoDescontado;
}

//Procura um produto no array
function buscarProduto(nome){
    let encontrado = produtos.find(produto => produto.nome === nome);
    return encontrado ? encontrado : "Produto não encontrado."
}

//Lista todos os produtos vendidos
function listarVendidos(){
    return produtos.filter(produto => produto.vendido === true);
}

//Calcula o valor total vendido
function calcularTotalVendido(){
    let vendidos = listarVendidos();
    return vendidos.reduce((total, produto) => total + produto.preco, 0);
}

//Ordena os produtos com base nos preços
function ordenarPorPreco(){
    return [...produtos].sort((a, b) => a.preco - b.preco);
}

adicionarProduto("Calça", 120);
console.log(aplicarDesconto(10));
console.log(buscarProduto("Camisa"));
console.log(listarVendidos());
console.log("Total vendido: R$ " + calcularTotalVendido().toFixed(2));
console.log(ordenarPorPreco());
