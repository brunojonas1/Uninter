document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("mensagemBotao");
    const paragrafoMensagem = document.getElementById("mensagemTexto");

    botao.addEventListener("click", function () {
        paragrafoMensagem.textContent = "Seja bem-vindo! O conhecimento é a chave que abre todas as portas. 🗝️";
    });
});