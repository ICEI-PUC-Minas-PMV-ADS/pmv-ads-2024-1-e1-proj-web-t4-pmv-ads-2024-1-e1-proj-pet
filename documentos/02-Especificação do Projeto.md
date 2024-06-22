# Especificação do Projeto

## Perfis de Usuários

Para o desenvolvimento de uma plataforma web de qualidade e bem estrutura, é necessário categorizar os diferentes tipos de usuários que irão interagir com o sistema. Cada perfil representa um conjunto específico de necessidades, interesses e permissões dentro da plataforma. Portanto, para o desenvolvimento da plataforma Pet in a flat foram estabelecidos os seguintes perfis de usuários: Tutor de pet, Pet sitter, Administrador da plataforma e Dono da Plataforma. As tabelas abaixo detalham cada perfil de usuário estabelecido para o desenvolvimento da plataforma.

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Tutor de pet </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que possuem animais de estimação procuram serviços de pet sitting para cuidar de seus pets durante sua ausência, seja por motivos de viagem, trabalho ou outras necessidades pessoais</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Encontrar pet sitters confiáveis e qualificados; Agendamento flexível conforme a rotina do tutor; Comunicação eficiente com o pet sitter para instruções específicas e atualizações sobre o pet.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Pet sitter </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que oferecem serviços de cuidado para animais de estimação, disponíveis para serem contratados por tutores que precisam de assistência na ausência.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Plataforma para listar seus serviços, qualificações e disponibilidade; Sistema de avaliação para construir confiança com potenciais clientes; Gerenciamento fácil de agendamentos e comunicação com tutores.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

No desenvolvimento da plataforma web Pet in a flat, é necessário incluir as descrições simplificadas das funcionalidades que serão oferecidas pelo sistema. Cada história de usuário descreve uma parte do comportamento esperado do sistema, focando nas necessidades e nos objetivos do usuário ao interagir com a plataforma. Para comunicar e priorizar requisitos do sistema, garantindo que o produto final atenda às necessidades dos usuários, foi adotada a ferramenta de gestão ágil, conforme especificado na tabela abaixo.

| EU COMO... `QUEM`        | QUERO/PRECISO ... `O QUE`                                                                  | PARA ... `PORQUE`                                                                   |
|--------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Tutor de pet             | Encontrar um pet sitter na minha região que possa cuidar de pets.                          | Saber que meus animais estão bem cuidados.                                           |
| Pet sitter               | Registrar-me na plataforma e criar um perfil detalhado, incluindo minhas habilidades, experiências e tipos de animais que prefiro cuidar. | Aumentar minha visibilidade para tutores potenciais e obter mais oportunidades de trabalho. |
| Tutor de pet             | Avaliar o pet sitter com base na qualidade do serviço prestado.                            | Contribuir para a comunidade, fornecendo feedback que ajudará outros tutores a tomarem decisões informadas. |
| Pet sitter               | Receber avaliações dos tutores para construir minha reputação na plataforma.               | Aumentar minha credibilidade e atrair mais clientes.                                 |

## Requisitos do Projeto

Para atender às especificações, funcionalidades e características que a plataforma Pet in a flat deverá possuir e, às necessidades e expectativas dos usuários e stakeholders, as informações foram tabuladas e organizadas em duas categorias: requisitos funcionais e não funcionais, conforme detalhadas a seguir.

### Requisitos Funcionais

| ID    | Descrição                                                                 | Prioridade |
|-------|---------------------------------------------------------------------------|------------|
| RF-01 | O sistema deve permitir o cadastro de usuários.                        | Alta       |
| RF-02 | O sistema deve permitir o login de usuários.                           | Alta       |
| RF-03 | O sistema deve manter os dados do usuário persistentes após o login.      | Alta       |
| RF-04 | O sistema deve permitir a busca de pet sitters.                        | Média       |
| RF-05 | O sistema deve permitir a recuperação de senha para os usuários.       | Baixa      |
| RF-06 | O sistema deve exibir informações sobre o serviço na página "Sobre".   | Média      |
| RF-07 | O sistema deve armazenar os dados dos usuários e pet sitters. | Alta       |
| RF-08 | O sistema deve mostrar o perfil do pet sitter com detalhes.            | Alta       |
| RF-09 | O sistema deve validar a entrada de dados no cadastro e login.            | Baixa       |
| RF-10 | O sistema deve permitir filtrar pet sitters por localização.              | Média       |
| RF-11 | O sistema deve permitir filtrar pet sitters por habilidades.              | Média      |
| RF-12 | O sistema deve permitir filtrar pet sitters por experiência prévia.          | Baixa       |
| RF-13 | O sistema deve exibir a localização dos pet sitters em um mapa.           | Baixa      |
| RF-14 | O sistema deve permitir a edição dos dados do usuário.           | Alta      |

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

| ID     | Descrição                                                                     | Prioridade |
|--------|-------------------------------------------------------------------------------|------------|
| RNF-01 | A exibição dos pet sitters cadastrados, no mapa, deve levar no máximo 2 segundos. | Média      |
| RNF-02 | O sistema deve estar disponível 24 h por dia e todos os dias da semana.           | Média       |
| RNF-03 | O sistema deve ser responsivo.                                                   | Média      |
| RNF-04 | O sistema deve ser compatível com os navegadores mais utilizados, como Google Chrome, Firefox. | Alta       |
| RNF-05 | Boa manutenibilidade do Sistema.                                               | Alta       |
| RNF-06 | A plataforma deve ser intuitiva e de fácil usabilidade.                        | Alta       |

**Prioridade: Alta / Média / Baixa.
