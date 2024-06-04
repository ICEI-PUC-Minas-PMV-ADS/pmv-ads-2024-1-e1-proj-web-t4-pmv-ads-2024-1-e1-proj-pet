((exports) => {
  const ICONE_POR_HABILIDADES = {
    MEDICAMENTOS: "images/iconeremedios.png",
    GATO: "images/iconegato.png",
    CACHORRO: "images/iconecachorro.png",
    PASSARO: "images/iconepassaro.png",
    TUTOR: "images/iconetempet.png",
    INJECOES: "images/iconeinjecao.png",
  };

  let petSittersTable;
  function BuscaController() {
    petSittersTable = new PetSitters();
  }

  BuscaController.prototype.criarGruposDeArray = function (array) {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
      result.push(array.slice(i, i + 3));
    }
    return result;
  };

  BuscaController.prototype.exibirResultados = function (params) {
    const resultsDiv = document.getElementById("resultados");
    resultsDiv.innerHTML = "";

    // busca petSitters
    petSitters = petSittersTable.find({
      localizacao: document.getElementById("localizacao").value,
    });

    if (petSitters.length === 0) {
      resultsDiv.innerHTML =
        "Nenhum pet sitter encontrado para esta localização.";
    } else {
      petSitters.forEach((sitter) => {
        const sitterDiv = document.createElement("div");
        sitterDiv.innerHTML = `
        <div class="card">
          <div class="card-title">
            <a href="perfil.html" target="_self" rel="noopener noreferrer"
              >${sitter.nome}</a
            >
          </div>
          <div class="card-body">
            <div class="card-icons">
              ${this.criarGruposDeArray(sitter.habilidades)
                .map((grupos) => {
                  let div = '<div class="iconrow">';
                  div += grupos
                    .map(
                      (habilidade) =>
                        `<img src=${ICONE_POR_HABILIDADES[habilidade]} />`
                    )
                    .join("");
                  div += "</div>";
                  return div;
                })
                .join("")}
              <p>${sitter.localizacao}</p>
            </div>
            <div class="card-photo">
              <img src="${sitter.foto}" alt="" />
              <p>${Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(sitter.custo)}</p>
            </div>
          </div>
        </div>
      `;
        resultsDiv.appendChild(sitterDiv);
      });
    }
  };

  exports.BuscaController = BuscaController;
})(this);
