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

  // renderiza o resultado
  BuscaController.prototype.exibirResultados = function (filtros) {
    const resultsDiv = document.getElementById("resultados");
    resultsDiv.innerHTML = "";

    // busca petSitters
    petSitters = petSittersTable.find(filtros);

    // começa a renderizar os petsitters
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

  // cria grupos de 3 habilidades
  BuscaController.prototype.criarGruposDeArray = function (array) {
    const result = [];
    for (let i = 0; i < array.length; i += 3) {
      result.push(array.slice(i, i + 3));
    }
    return result;
  };

  BuscaController.prototype.carregarPagina = function () {
    const url = new URLSearchParams(window.location.search);
    const filtros = {
      localizacao: url.get("localizacao"),
      dataInicio: url.get("dataDisponibilidadeInicio"),
      dataTermino: url.get("dataDisponibilidadeTermino"),
    };

    if (filtros.localizacao) {
      document
        .getElementById("localizacao")
        .setAttribute("value", filtros.localizacao);
    }

    if (filtros.dataInicio) {
      document
        .getElementById("dataDisponibilidadeInicio")
        .setAttribute("value", filtros.dataInicio);
    }

    if (filtros.dataTermino) {
      document
        .getElementById("dataDisponibilidadeTermino")
        .setAttribute("value", filtros.dataTermino);
    }

    this.exibirResultados(filtros);
  };

  BuscaController.prototype.submit = function () {
    const todasAsHabilidades = document.getElementsByName("habilidades[]");
    const habilidadesSelecionadas = [];

    for (let i = 0; i < todasAsHabilidades.length; i++) {
      if (todasAsHabilidades[i].checked) {
        habilidadesSelecionadas.push(todasAsHabilidades[i].value);
      }
    }

    const filtros = {
      localizacao: document.getElementById("localizacao").value,
      habilidadesSelecionadas,
      dataInicio: document.getElementById("dataDisponibilidadeInicio").value,
      dataTermino: document.getElementById("dataDisponibilidadeTermino").value,
    };

    this.exibirResultados(filtros);
  };

  exports.BuscaController = BuscaController;
})(this);
