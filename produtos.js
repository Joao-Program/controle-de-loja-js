let produtos = [
  { nome: "Camisa", preco: 50, vendido: false },
  { nome: "Tênis", preco: 200, vendido: true },
  { nome: "Boné", preco: 30, vendido: false }
];

function adicionarProduto(nome, preco){
    let novoProduto = {
        nome: nome,
        preco: preco,
        vendido: false
    };

    produtos.push(novoProduto);
    console.log(`${nome} foi adicionado ao sistema.`);
}

function aplicarDesconto(percentual){
    let produtoDescontado = produto.map(produto => {
        return{
             nome: produto.nome,
             preco: produto.preco * (1 - percentual/100),
             vendido: produto.vendido
         };
      });

    return produtoDescontado;
}

function buscarProduto(nome){
    let encontrado = produtos.find(produto => produto.nome === nome);
    return encontrado ? encontrado : "Produto não encontrado."
}

function listarVendidos(){
    return produtos.filter(produto => produto.vendido === true);
}

function calcularTotalVendido(){
    let vendidos = listarVendidos();
    return vendidos.reduce((total, produto) => total + produto.preco, 0);
}

function ordenarPorPreco(){
    return produtos.sort((a, b) => a.preco - b.preco);

}

adicionarProduto("Calça", 120);
console.log(aplicarDesconto(10));
console.log(buscarProduto("Camisa"));
console.log(listarVendidos());
console.log(calcularTotalVendido());
console.log(ordenarPorPreco());
