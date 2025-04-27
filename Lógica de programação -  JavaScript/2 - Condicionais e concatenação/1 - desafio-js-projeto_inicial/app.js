/*
Desafios

1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

//Desafio - 01

var diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

//Desafio - 02

var numero = prompt("Digite um número:");

if (numero < 0) {
  alert("Número negativo");
} else {
  alert("Número positivo");
}

//Desafio - 03

var pontuacao = 100;

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

//Desafio - 04

var saldoConta = 100000;

alert(
  `O saldo da sua conta é de R$:${saldoConta.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);

//Desafio - 05

var nome = prompt("Digite seu nome:");

alert(`Bem-vindo ${nome}!`);
