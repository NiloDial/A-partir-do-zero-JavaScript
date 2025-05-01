let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");
  let nome = amigo.value.trim();

  // Impede nomes vazios ou duplicados
  if (nome === "" || amigos.includes(nome)) {
    alert("Nome inválido ou já adicionado.");
    amigo.value = "";
    return;
  }

  amigos.push(nome);
  amigo.value = "";

  atualizarLista();
  atualizarSorteio();
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos para sortear.");
    return;
  }

  embaralhar(amigos);

  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let destino = i === amigos.length - 1 ? amigos[0] : amigos[i + 1];
    sorteio.innerHTML += `${amigos[i]} --> ${destino}<br/>`;
  }
}

function excluirAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
  atualizarSorteio();
}

function embaralhar(lista) {
  for (let i = lista.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [lista[i - 1], lista[j]] = [lista[j], lista[i - 1]];
  }
}

function atualizarSorteio() {
  document.getElementById("lista-sorteio").innerHTML = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = amigos[i];

    paragrafo.addEventListener("click", function () {
      excluirAmigo(i);
    });

    lista.appendChild(paragrafo);
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
