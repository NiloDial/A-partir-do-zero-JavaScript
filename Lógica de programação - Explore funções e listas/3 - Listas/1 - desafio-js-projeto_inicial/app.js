/*

Desafios

1 - Crie uma lista vazia, com o nome listaGenerica.
2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

*/

// Desafio - 01

var listaGenerica = [];

// Desafio - 02

var linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Desafio - 03

linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

// Desafio - 04

console.log(linguagensDeProgramacao[0]);

// Desafio - 05

console.log(linguagensDeProgramacao[1]);

// Desafio - 06

console.log(linguagensDeProgramacao.slice(-1)[0]);
