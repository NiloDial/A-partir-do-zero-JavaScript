/*
var titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

var paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
*/

var numeroSecreto = gerarNumeroAleatorio();

function exiberTextoNaTela(tag, texto) {
  var campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exiberTextoNaTela("h1", "Jogo do número secreto");
exiberTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  var chute = document.querySelector("input").value;
  console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
