alert("Seja bem vindo");

var numeroMaximo = 10;
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
var chute = 0;
var tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Chute um número de 1 a ${numeroMaximo}`);

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que: ${chute}`);
    } else {
      alert(`O número secreto é maior que: ${chute}`);
    }
    tentativas++;
  }
}

var plavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Você acertou! O número é ${numeroSecreto}, você precisou de ${tentativas} ${plavraTentativa}.`
);
