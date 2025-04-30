var totalGeral;
limpar();

function adicionar() {
  var produto = document.getElementById("produto").value;
  var nomeProduto = produto.split("-")[0];
  var valorUnitario = produto.split("R$")[1];
  var quantidade = document.getElementById("quantidade").value;
  let carrinho = document.getElementById("lista-produtos");

  var preco = quantidade * valorUnitario;

  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$0";
}
