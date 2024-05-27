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

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Administrador da plataforma </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela manutenção e gerenciamento da plataforma, garantindo que o sistema funcione corretamente e ofereça uma experiência segura e satisfatória para tutores e pet sitters.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Ferramentas de monitoramento e gerenciamento de usuários e transações; Capacidade de responder a questões de suporte e manter a integridade da plataforma; Análise de dados para melhorar e adaptar continuamente a plataforma às necessidades dos usuários.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Dono da plataforma (Clinte) </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Este usuário tem interesse direto no sucesso operacional e financeiro da plataforma que acompanha a gestão de indicadores e resultados da plataforma.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Funcionalidades que atendam às demandas do mercado de pet sitting, baseando-se em pesquisa e análise de dados; Interface intuitiva e atraente para usuários (tutores e pet sitters) e fácil de gerenciar para o administrador; Relatórios e analytics para monitorar o desempenho da plataforma, preferências dos usuários, e eficácia das funcionalidades implementadas; Segurança de dados e transações financeiras, para proteger as informações dos usuários e garantir transações seguras.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

No desenvolvimento da plataforma web Pet in a flat, é necessário incluir as descrições simplificadas das funcionalidades que serão oferecidas pelo sistema. Cada história de usuário descreve uma parte do comportamento esperado do sistema, focando nas necessidades e nos objetivos do usuário ao interagir com a plataforma. Para comunicar e priorizar requisitos do sistema, garantindo que o produto final atenda às necessidades dos usuários, foi adotada a ferramenta de gestão ágil, conforme especificado na tabela abaixo.


Aqui está a tabela atualizada com a parte solicitada incluída:

| EU COMO... `QUEM`        | QUERO/PRECISO ... `O QUE`                                                                  | PARA ... `PORQUE`                                                                   |
|--------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Tutor de pet             | Encontrar um pet sitter na minha região que possa cuidar de pets.                          | Saber que meus animais estão bem cuidados.                                           |
| Pet sitter               | Registrar-me na plataforma e criar um perfil detalhado, incluindo minhas habilidades, experiências e tipos de animais que prefiro cuidar. | Aumentar minha visibilidade para tutores potenciais e obter mais oportunidades de trabalho. |
| Tutor de pet             | Avaliar o pet sitter com base na qualidade do serviço prestado.                            | Contribuir para a comunidade, fornecendo feedback que ajudará outros tutores a tomarem decisões informadas. |
| Pet sitter               | Receber avaliações dos tutores para construir minha reputação na plataforma.               | Aumentar minha credibilidade e atrair mais clientes.                                 |
| Administrador da plataforma | Revisar e moderar avaliações para assegurar autenticidade e relevância.                    | Manter a confiança e a integridade das avaliações, garantindo uma comunidade segura e confiável. |
| Dono da Plataforma (Cliente) | Gerenciar eficazmente a plataforma e garantir a qualidade e satisfação do serviço.           | Assegurar a melhor experiência para os usuários e o sucesso contínuo do negócio com gestão de indicadores e performance da plataforma e serviço ofertado. |


## Requisitos do Projeto

Para atender às especificações, funcionalidades e características que a plataforma Pet in a flat deverá possuir e, às necessidades e expectativas dos usuários e stakeholders, as informações foram tabuladas e organizadas em duas categorias: requisitos funcionais e não funcionais, conforme detalhadas a seguir.

### Requisitos Funcionais

|ID     | Descrição                       | Prioridade |
|-------|---------------------------------|------------|
| RF-01 |  O sistema deve permitir o registro e a listagem de pet sitters.  | Alta   | 
| RF-02 |  O sistema deve permitir o registro e a listagem de tutores.  | Alta   |
| RF-03 |  O sistema deve ter uma plataforma de moderação de todas as informações dos usuários.  | Alta   |
| RF-04 |  O sistema deve fazer uma verificação de identidade de tutores e pet sitters.  | Alta   |
| RF-05 |  O sistema deve possuir um chat entre tutores e pet sitters.  | Alta   |
| RF-06 |  O sistema deve ter notificação de mensagens do chat.  | Alta   |
| RF-07 |  O sistema deve ter solicitação e cancelamento de serviços.  | Alta   |
| RF-08 |  O sistema deve ter notificação de solicitação e cancelamento de serviço.  | Alta   |
| RF-09 |  O sistema deve ter avaliação de tutores e pet sitters.  | Alta   |
| RF-10 |  O sistema deve permitir o pagamento, recebimento e estorno dos valores pagos pelos serviços.  | Alta   |
| RF-11 |  O sistema deve ter um mapa da região indicando onde estão os pet sitters cadastrados.  | Alta   |
| RF-12 |  O sistema deve ter um sistema de filtro de informações de pet sitters.  | Alta   |
| RF-13 |  O sistema deve manter um histórico de serviços contratados.  | Alta   |
| RF-14 |  O sistema deve permitir que os usuários denunciem comportamentos antiéticos, criminosos e quaisquer outros que ponham em risco a segurança dos usuários.  | Alta   |
| RF-15 |  O sistema deve ter uma área de gerenciamento de indicadores e performance do negócio.  | Alta   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|-----------|
| RNF-01 |  A exibição dos pet sitters cadastrados, no mapa, deve levar no máximo 2 segundos.                    | Alta   | 
| RNF-02 |  O sistema deve estar disponível 24 h por dia e todos os dias da semana.                    | Alta   |
| RNF-03 |  O sistema deve ser responsivo, permitindo a visualização em diversos dispositivos como tablets e celulares.                    | Média   |
| RNF-04 |  O sistema deve ser compatível com os navegadores mais utilizados: Google Chrome, Firefox, Safari, Microsoft Edge.                    | Alta   |
| RNF-05 |  A sintaxe da aplicação web deve ser semanticamente correta para um melhor rankeamento SEO.                    | Alta   |
| RNF-06 |  Boa manutenibilidade do Sistema.                    | Alta   |
| RNF-07 |  A plataforma deve ser intuitiva e de fácil usabilidade.                    | Alta   |

**Prioridade: Alta / Média / Baixa. 

