/*

Desafios

1 - Criar uma função que exibe "Olá, mundo!" no console.

2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

*/

// Desafio - 01

function olaMundo() {
  console.log("Ola mundo");
}

olaMundo();

// Desafio - 02

function olaNome(nome) {
  console.log(`Ola, ${nome}`);
}

olaNome("Nilo");

// Desafio - 03

function numero2x(numero) {
  return 2 * numero;
}

console.log(numero2x(5));

// Desafio - 04

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(media(5, 5, 5));

// Desafio - 05

function maiorNumero(n1, n2) {
  if (n1 > n2) {
    return `${n1} é maior que ${n2}`;
  } else {
    return `${n2} é maior que ${n1}`;
  }
}

console.log(maiorNumero(25, 10));

// Desafio - 05

function multiplicaEleMesmo(n1) {
  return n1 * n1;
}

console.log(multiplicaEleMesmo(5));
