(function (exports) {
  const petSittersTable = [
    {
      id: 1,
      foto: "images/imgperfil1.png",
      nome: "Fulana Maria de Tal",
      habilidades: [
        "MEDICAMENTOS",
        "INJECOES",
        "TUTOR",
        "GATO",
        "CACHORRO",
        "PASSARO",
      ],
      custo: 10.0,
      localizacao: "Santa Efigênia",
      dataDisponivelInicio: "2024-07-06",
      dataDisponivelTermino: "2025-10-06",
    },

    {
      id: 2,
      foto: "images/imgperfil2.png",
      nome: "Cicrano José Souza",
      habilidades: ["MEDICAMENTOS", "INJECOES", "GATO", "CACHORRO", "PASSARO"],
      custo: 12.0,
      localizacao: "Savassi",
      dataDisponivelInicio: "2024-08-06",
      dataDisponivelTermino: "2025-10-06",
    },

    {
      id: 3,
      foto: "images/imgperfil4.png",
      nome: "Beltrano Silva",
      habilidades: ["MEDICAMENTOS", "TUTOR", "GATO", "CACHORRO"],
      custo: 10.0,
      localizacao: "Lourdes",
      dataDisponivelInicio: "2024-09-06",
      dataDisponivelTermino: "2025-10-06",
    },
    {
      id: 4,
      foto: "images/imgperfil3.png",
      nome: "Felícia Santos",
      habilidades: ["MEDICAMENTOS", "GATO", "CACHORRO"],
      custo: 15.0,
      localizacao: "Santa Tereza",
      dataDisponivelInicio: "2024-10-06",
      dataDisponivelTermino: "2025-10-06",
    },
  ];

  function PetSitters() {}

  PetSitters.prototype.getAll = function () {
    return petSittersTable;
  };

  PetSitters.prototype.find = function (filtros) {
    return petSittersTable
      .filter((petSitter) => {
        if (filtros.localizacao) {
          return petSitter.localizacao
            .toLocaleLowerCase()
            .startsWith(filtros.localizacao.toLocaleLowerCase());
        }
        return petSitter;
      })
      .filter((petSitter) => {
        if (
          filtros.habilidadesSelecionadas &&
          filtros.habilidadesSelecionadas.length
        ) {
          const habilidadesLowerCase = petSitter.habilidades.map((habilidade) =>
            habilidade.toLocaleLowerCase()
          );

          return filtros.habilidadesSelecionadas.every(
            (habilidadeSelecionada) =>
              habilidadesLowerCase.includes(
                habilidadeSelecionada.toLocaleLowerCase()
              )
          );
        }

        return petSitter;
      })
      .filter((petSitter) => {
        const dataDisponivelInicio = new Date(petSitter.dataDisponivelInicio);
        const dataDisponivelTermino = new Date(petSitter.dataDisponivelTermino);

        const dataInicio = filtros.dataInicio
          ? new Date(filtros.dataInicio)
          : null;
        const dataTermino = filtros.dataTermino
          ? new Date(filtros.dataTermino)
          : null;

        if (dataInicio && dataTermino) {
          return (
            dataInicio >= dataDisponivelInicio &&
            dataTermino <= dataDisponivelTermino
          );
        } else if (dataInicio) {
          return dataDisponivelInicio >= dataInicio;
        } else if (dataTermino) {
          return dataDisponivelTermino <= dataTermino;
        }
        return true;
      });
  };

  exports.PetSitters = PetSitters;
})(this);
