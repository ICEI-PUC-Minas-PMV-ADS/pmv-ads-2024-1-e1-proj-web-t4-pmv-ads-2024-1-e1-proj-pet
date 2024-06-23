(function (exports) {
  const petSittersTable = [
    {
      id: 1,
      email: "fulanamariadetal@gmail.com",
      senha: "1234",
      foto: "images/imgperfil1.png",
      nome: "Fulana Maria",
      sobrenome: "de tal",
      telefone: "(31)988776655",
      endereco: "Rua Men de Sá, 300",
      endereco2: "",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      cep: "30280-250",
      serPetSitter: true,
      raioAtendimento: 1,
      sobreMim:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate? Aperiam atque unde ea voluptas iure necessitatibus beatae, cum quo eligendi inventore nihil rerum minima provident saepe laboriosam ullam quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vel obcaecati reiciendis voluptate quidem corrupti id expedita provident porro. Voluptatibus nobis, consectetur id molestias rerum nemo impedit odio at rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident earum repudiandae praesentium magnam atque iure cum autem sed facere. Vero magni molestias aliquam ad distinctio quasi modi. Praesentium, harum?",
      custo: 10.0,
      custo2: 20.0,
      anosExp: 10,
      instagram: "@fulaninha",
      facebook: "@fulaninha",
      twitter: "@fulaninha",
      habilidades: [
        "MEDICAMENTOS",
        "INJECOES",
        "TUTOR",
        "GATO",
        "CACHORRO",
        "PASSARO",
      ],
      localizacao: "Santa Efigênia",
      dataDisponivelInicio: "2024-07-06",
      dataDisponivelTermino: "2025-10-06",
    },

    {
      id: 2,
      email: "cicranojsouza@gmail.com",
      senha: "1234",
      foto: "images/imgperfil2.png",
      nome: "Cicrano José",
      sobrenome: "Souza",
      telefone: "(31)988776655",
      endereco: "Rua Sergipe, 44",
      endereco2: "",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      cep: "30281-250",
      serPetSitter: true,
      raioAtendimento: 5,
      sobreMim: "Eu sou brabo dos pet. Fala dele.",
      custo: 12.0,
      custo2: 25.0,
      anosExp: 15,
      instagram: "@CicraninBH",
      facebook: "@CicraninBH",
      twitter: "@CicraninBH",
      habilidades: ["MEDICAMENTOS", "INJECOES", "GATO", "CACHORRO", "PASSARO"],
      localizacao: "Savassi",
      dataDisponivelInicio: "2024-08-06",
      dataDisponivelTermino: "2025-10-06",
    },

    {
      id: 3,
      email: "beltranosilva@gmail.com",
      senha: "1234",
      foto: "images/imgperfil4.png",
      nome: "Beltrano",
      sobrenome: "Silva",
      telefone: "(31)988776655",
      endereco: "Rua Rio de Janeiro, 1500",
      endereco2: "",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      cep: "30282-250",
      serPetSitter: true,
      raioAtendimento: 5,
      sobreMim: "Eu sou brabo dos pet.",
      custo: 10.0,
      custo2: 20.0,
      anosExp: 5,
      instagram: "@Belsilva",
      facebook: "@Belsilva",
      twitter: "@Belsilva",
      habilidades: ["MEDICAMENTOS", "TUTOR", "GATO", "CACHORRO"],
      localizacao: "Lourdes",
      dataDisponivelInicio: "2024-09-06",
      dataDisponivelTermino: "2025-10-06",
    },

    {
      id: 4,
      email: "feliciasantos@gmail.com",
      senha: "1234",
      foto: "images/imgperfil3.png",
      nome: "Felícia",
      sobrenome: "Santos",
      telefone: "(31)988776655",
      endereco: "Rua Salinas, 1437",
      endereco2: "",
      cidade: "Belo Horizonte",
      estado: "Minas Gerais",
      cep: "30283-250",
      serPetSitter: true,
      raioAtendimento: 2,
      sobreMim: "Eu sou sinistra mesmo",
      custo: 15.0,
      custo2: 30.0,
      anosExp: 5,
      instagram: "@Felicia",
      facebook: "@Felicia",
      twitter: "@Felicia",
      habilidades: ["MEDICAMENTOS", "GATO", "CACHORRO"],
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
