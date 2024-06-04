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
    },

    {
      id: 2,
      foto: "images/imgperfil2.png",
      nome: "Cicrano José Souza",
      habilidades: ["MEDICAMENTOS", "INJECOES", "GATO", "CACHORRO", "PASSARO"],
      custo: 12.0,
      localizacao: "Savassi",
    },

    {
      id: 3,
      foto: "images/imgperfil4.png",
      nome: "Beltrano Silva",
      habilidades: ["MEDICAMENTOS", "TUTOR", "GATO", "CACHORRO"],
      custo: 10.0,
      localizacao: "Lourdes",
    },
    {
      id: 4,
      foto: "images/imgperfil3.png",
      nome: "Felícia Santos",
      habilidades: ["MEDICAMENTOS", "GATO", "CACHORRO"],
      custo: 15.0,
      localizacao: "Santa Tereza",
    },
  ];

  function PetSitters() {}

  PetSitters.prototype.getAll = function () {
    return petSittersTable;
  };

  PetSitters.prototype.find = function ({ localizacao }) {
    return petSittersTable.filter((petSitter) => {
      return petSitter.localizacao
        .toLocaleLowerCase()
        .startsWith(localizacao.toLocaleLowerCase());
    });
  };

  exports.PetSitters = PetSitters;
})(this);
