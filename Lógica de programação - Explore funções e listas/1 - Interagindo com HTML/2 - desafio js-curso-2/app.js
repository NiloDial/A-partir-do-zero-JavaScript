/*

Desafios

1 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

2 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

3 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

4 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

5 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

*/

// Desafio - 01

var titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Desafio - 02

function clicado() {
  console.log("O botão foi clicado!");
}

// Desafio - 03

function alertaJs() {
  alert("Eu amo JS!");
}

// Desafio - 04

function promptCidade() {
  var cidade = prompt("Digite o nome da uma cidade do Brasil");

  alert(`Estive em ${cidade} e lembrei de você!`);
}

// Desafio - 05

function soma() {
  var valor1 = parseInt(prompt("Digite um número inteiro:"));
  var valor2 = parseInt(prompt("Digite outro número inteiro:"));

  var resultado = valor1 + valor2;

  alert(`A soma de ${valor1} e ${valor2} é ${resultado}!`);
}
