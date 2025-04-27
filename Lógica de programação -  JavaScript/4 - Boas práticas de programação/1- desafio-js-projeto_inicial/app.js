/*

Desafios finais

1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".

4.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

6.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

8.Crie uma variável "numero" e peça um valor com prompt. Verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

9.Use um loop while para imprimir os números de 1 a 10 no console.

10.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

11.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

12.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

*/

// Desafio - 01

console.log("Seja bem-vindo!");

// Desafio - 02

var nome = "Nilo";

console.log(`Seja bem-vindo ${nome}!`);

// Desafio - 03

var nome2 = "Nilo";

alert(`Seja bem-vindo ${nome2}!`);

// Desafio - 04

var suaLinguagemDeProgramacao = prompt(
  "Qual a linguagem de programação que você mais gosta?"
);

console.log(suaLinguagemDeProgramacao);

// Desafio - 05

var valor1 = 5;
var valor2 = 5;

var resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Desafio - 06

var valor3 = 5;
var valor4 = 5;

var resultado = valor3 - valor4;

console.log(`A subtração de ${valor3} e ${valor4} é igual a ${resultado}`);

// Desafio - 07

var idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade!");
}

// Desafio - 08

var numero = prompt("Digite um número:");

if (numero == 0) {
  console.log("Seu número é 0, um número neutro.");
} else if (numero < 0) {
  console.log(`Seu número é ${numero}, ele é negativo.`);
} else {
  console.log(`Seu número é ${numero}, ele é positivo.`);
}

// Desafio - 09

var loopNumero = 1;

while (loopNumero <= 10) {
  console.log(`Contador ${loopNumero}`);

  loopNumero++;
}

// Desafio - 10

var nota = 10;

if (nota >= 7) {
  console.log(`Sua nota é ${nota} você foi aprovado!`);
} else {
  console.log(`Sua nota é ${nota} você foi reprovado!`);
}

// Desafio - 11

var numeroAleatorio1 = Math.random();

console.log(numeroAleatorio1);

// Desafio - 12

var numeroAleatorio2 = parseInt(Math.random() * 10 + 1);

console.log(numeroAleatorio2);

// Desafio - 13

var numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);

console.log(numeroAleatorio3);
