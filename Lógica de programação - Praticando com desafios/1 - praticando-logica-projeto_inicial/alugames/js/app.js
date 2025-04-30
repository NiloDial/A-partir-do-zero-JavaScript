function alterarStatus(id) {
  var gameEscolhido = document.getElementById(`game-${id}`);
  var imagem = gameEscolhido.querySelector(".dashboard__item__img");
  var botao = gameEscolhido.querySelector(".dashboard__item__button");

  if (botao.classList.contains("dashboard__item__button--return")) {
    botao.classList.remove("dashboard__item__button--return");
    imagem.classList.remove("dashboard__item__img--rented");
    botao.innerHTML = `Alugar`;
  } else {
    botao.classList.add("dashboard__item__button--return");
    imagem.classList.add("dashboard__item__img--rented");
    botao.innerHTML = `Devolver`;
  }
}
