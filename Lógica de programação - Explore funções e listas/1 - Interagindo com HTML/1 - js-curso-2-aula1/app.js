var listaDeNumerosSorteados = [];
var numeroLimite = 10;
var numeroSecreto = gerarNumeroAleatorio();
var tentativas = 1;

function exiberTextoNaTela(tag, texto) {
  var campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exiberTextoNaTela("h1", "Jogo do número secreto");
  exiberTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
  var chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exiberTextoNaTela("h1", "Você acertou!");

    var palavraTentativas = tentativas > 1 ? "tentativas" : "tentativas";
    var mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativas}!`;

    exiberTextoNaTela("p", mensagemTentativas);

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exiberTextoNaTela("p", "O número secreto é menor");
    } else {
      exiberTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  var NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  var quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    return NumeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = " ";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
