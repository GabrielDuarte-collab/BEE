const cores = fetch('./cores.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });

const sectionCores = document.querySelector("#cores > section");

cores.then(coresdata => {
    coresdata.forEach(cor => {
        const divCor = document.createElement("div");
        divCor.style.backgroundColor = cor.hexadecimal;
        divCor.style.color = '#fff';
        divCor.style.padding = '20px';
        divCor.style.margin = '10px';
        divCor.style.display = 'inline-block';
        divCor.style.borderRadius = '20%';
        divCor.textContent = cor.nome;
        divCor.addEventListener( 'click', function () => {
            mudarCorDeFundo(cor.hexadecimal);
        });

        sectionCores.appendChild(divCor);
    });
});

function mudarCorDeFundo(cor) {
    document.body.style.backgroundColor = cor;