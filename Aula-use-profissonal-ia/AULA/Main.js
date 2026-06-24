console.log("Script carregando com sucesso");
const form = document.querySelector("#form-nome");
const saudacao = document.querySelector("#saudacao");
const historico = document.querySelector("#historico");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const campoNome = document.querySelector("#nome");

    if (campoNome.value.trim() === "") {
        saudacao.textContent = "por favor, digite seu nome.";
        return;

    }

    const historicoDaSaudacao = document.createElement("li");
    historicoDaSaudacao.textContent = `Saudação enviada para ${campoNome.value}`;
    historico.appendChild(historicoDaSaudacao);



    saudacao.textContent = `Olá, ${campoNome.value}!`;

    campoNome.value = " ";
    campoNome.focus();
});