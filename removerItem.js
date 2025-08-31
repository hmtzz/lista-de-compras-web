function removerItem(botao) {
  const li = botao.parentElement;  // pega o <li> do botão
  li.remove();                    // remove o <li> do DOM
}