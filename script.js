let lanches = 0;

const botao = document.getElementById("btn-lanche");
const textoContador = document.getElementById("contador");
const textoMensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  lanches += 1;
  textoContador.textContent = `Lanches: ${lanches}`;

  if (lanches >= 5) {
    textoMensagem.textContent = "🎉 Seu bichinho está feliz!";
  }
});
