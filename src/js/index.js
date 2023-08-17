// passo 1 - pegar personagens
const personagens = document.querySelectorAll(".personagem");

// passo 2 - adicionar a classe SELECIONADO no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // passo 3 - verificar se há personagem selecionado, se sim, remover seleção
    removerSelecao();

    personagem.classList.add("selecionado");

    // passo 4 - pegar imagem
    alterarImagem(personagem);

    // passo 6 - alterar nome
    alterarNome(personagem);

    // passo 7 alterar descrição
    alterarDescricao(personagem);
  });
});

function alterarDescricao(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNome(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagem(personagem) {
  const imgPersonagemGrande = document.querySelector(".personagem-grande");
  // passo 5 - alterar imagem
  const idPersonagem = personagem.attributes.id.value;
  imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecao() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
