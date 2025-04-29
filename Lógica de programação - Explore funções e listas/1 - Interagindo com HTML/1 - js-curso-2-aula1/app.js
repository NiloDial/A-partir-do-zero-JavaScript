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
  return parseInt(Math.random() * 10 + 1);
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
