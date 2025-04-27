/*
Desafios

1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

// Desafio - 01

var contador1 = 1;

while (contador1 <= 10) {
  console.log(`Contador ${contador1}`);

  contador1++;
}

// Desafio - 02

var contador2 = 10;

while (contador2 >= 1) {
  console.log(`Contador ${contador2}`);

  contador2--;
}

// Desafio - 03

var contador3 = prompt("Digite um número:");

while (contador3 >= 1) {
  console.log(`Contador ${contador3}`);

  contador3--;
}

// Desafio - 04

var contador4 = 0;
var contadorFinal = prompt("Digite um número:");

while (contador4 <= contadorFinal) {
  console.log(`Contador ${contador4}`);

  contador4++;
}
