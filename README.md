# 🛍️ Gerenciador de Produtos em JavaScript  
Um mini-sistema criado para estudar e praticar manipulação de arrays em JavaScript, utilizando métodos importantes como **map**, **filter**, **find**, **reduce** e **sort**.

Este projeto simula um gerenciamento simples de produtos, com cadastro, busca, cálculo de total vendido, aplicação de desconto e muito mais.

---

## 🚀 Funcionalidades

### ✔ Adicionar novos produtos
Cria objetos estruturados e adiciona automaticamente ao array principal.
### ✔ Buscar produtos por nome
Retorna o produto encontrado ou informa caso não exista.
### ✔ Listar produtos vendidos
Filtra apenas os itens com `vendido: true`.
### ✔ Aplicar desconto
Gera um novo array com os preços ajustados sem alterar o original.
### ✔ Calcular total vendido
Soma automática de todos os valores vendidos com `reduce()`.
### ✔ Ordenar produtos por preço
Retorna uma nova lista ordenada sem modificar o array principal.

---

## 🧠 Conceitos estudados
- Estruturas de dados (arrays/objetos)  
- Funções puras  
- Métodos de array (`map`, `filter`, `find`, `reduce`, `sort`)  
- Boas práticas de código  
- Imutabilidade básica  

---

## 📂 Estrutura do Código

```js

let produtos = [
  { nome: "Camisa", preco: 50, vendido: false },
  { nome: "Tênis", preco: 200, vendido: true },
  { nome: "Boné", preco: 30, vendido: false }
];

```
**Funções principais:**

adicionarProduto(nome, preco)
aplicarDesconto(percentual)
buscarProduto(nome)
listarVendidos()
calcularTotalVendido()
ordenarPorPreco()

**▶ Como executar**

Instale o Node.js (opcional, caso queira rodar pelo terminal).
Salve o arquivo como app.js.
Execute:
node app.js
Ou simplesmente abra no navegador copiando o código para o console (F12).

**📘 Exemplos de Uso**

adicionarProduto("Calça", 120);
console.log(aplicarDesconto(10));
console.log(buscarProduto("Camisa"));
console.log(listarVendidos());
console.log(calcularTotalVendido());
console.log(ordenarPorPreco());

**💻 Tecnologias Utilizadas**

JavaScript (ES6+)
Node.js (opcional)
VS Code

**✨ Autor**

João Paulo Gonçalves Santos Lobo
Desenvolvedor Front-End Júnior | Estudante de ADS
📧 jpaulolobo2509@gmail.com
📍 Lauro de Freitas – BA

**⭐ Contribuições**

Sugestões e melhorias são bem-vindas!
Sinta-se à vontade para abrir issues ou enviar pull requests.
