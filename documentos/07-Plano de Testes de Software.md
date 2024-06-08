# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |


|Caso de Teste    | CT-01 - Verificar a funcionalidade do formulário de busca |
|:---|:---|
| Requisitos Associados | RF-02: O sistema deve permitir a listagem de pet sitters. |
| Objetivo do Teste | Verificar se o formulário de busca retorna resultados com base na localização digitada. |
| Passos | 1. Acessar o formulário; 2. Digitar o nome de um bairro de Belo Horizonte; 3. Visualizar o que foi retornado na página Busca. |
| Critérios de êxito | A listagem deve conter todos os perfis que atendam ao critério especificado, no caso, a localidade.  |
| Responsável pela elaborar do caso de Teste | Ana Cavalcanti |


|Caso de Teste    | CT-02 - Verificar a funcionalidade de filtragem de busca |
|:---|:---|
| Requisitos Associados | RF-12: O sistema deve ter um sistema de filtro de informações de pet sitters. |
| Objetivo do Teste | Verificar se o formulário de busca retorna resultados com base no filtro ou nos filtros selecionados. |
| Passos | 1. Ir à página Busca; 2. Clicar em um ou mais filtros na caixa lateral esquerda que tem opções de filtragem; 3. Visualizar o que foi retornado na página Busca. |
| Critérios de êxito | A listagem deve conter todos os perfis que atendam a todos os critérios especificados, no caso, os filtros selecionados.  |
| Responsável pela elaborar do caso de Teste | Ana Cavalcanti |

#### Caso de Teste: CT-03 - Verificar a funcionalidade de cadastro de usuário

| Caso de Teste    | CT-03 - Verificar a funcionalidade de cadastro de usuário |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve permitir o cadastro de novos usuários. |
| Objetivo do Teste | Verificar se o formulário de cadastro permite que novos usuários sejam cadastrados com sucesso. |
| Passos | 1. Acessar a página de cadastro; 2. Preencher todos os campos obrigatórios do formulário; 3. Clicar no botão "Cadastrar"; 4. Verificar se uma mensagem de sucesso é exibida e se o usuário é redirecionado para a página de login. 5. Verificar o JSON do novo usuário no localStorage |
| Critérios de êxito | O cadastro deve ser realizado com sucesso, exibindo uma mensagem de confirmação e redirecionando o usuário para a página de login. O usuário deve estar presente como um JSON no localStorage |
| Responsável pela elaboração do caso de Teste | Grace Kelly |

#### Caso de Teste: CT-04 - Verificar validação de senhas no cadastro de usuário

| Caso de Teste    | CT-04 - Verificar validação de senhas e preenchimento completo no cadastro de usuário |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve permitir o cadastro de novos usuários. |
| Objetivo do Teste | Verificar se o sistema valida corretamente a confirmação de senha no formulário de cadastro. |
| Passos | 1. Acessar a página de cadastro; 2. Preencher os campos de forma incompleta ou com senhas não-iguais ; 3. Clicar no botão "Cadastrar"; 4. Verificar se uma mensagem de erro é exibida informando a inconsistência do preenchimento. |
| Critérios de êxito | O sistema deve exibir um aviso informando a inconsistência do preenchimento para que o usuário faça o preenchimento completo de maneira correta. |
| Responsável pela elaboração do caso de Teste | Grace Kelly |

#### Caso de Teste: CT-05 - Verificar cadastro com e-mail já existente

| Caso de Teste    | CT-05 - Verificar cadastro com e-mail já existente |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve permitir o cadastro de novos usuários. |
| Objetivo do Teste | Verificar se o sistema impede o cadastro de um usuário com um e-mail já existente no banco de dados. |
| Passos | 1. Acessar a página de cadastro; 2. Preencher todos os campos obrigatórios com dados válidos, usando um e-mail que já esteja cadastrado; 3. Clicar no botão "Cadastrar"; 4. Verificar se uma mensagem de erro é exibida informando que o e-mail já está cadastrado. |
| Critérios de êxito | O sistema deve exibir uma mensagem de erro informando que o e-mail já está cadastrado e impedir a conclusão do cadastro. |
| Responsável pela elaboração do caso de Teste | Grace Kelly |

#### Caso de Teste: CT-06 - Verificar Login com e-mail e senha cadastrados

| Caso de Teste    | CT-06 - Verificar Login com e-mail e senha cadastrados |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve verificar se e-mail e senha estao corretos. |
| Objetivo do Teste | Verificar se o sistema confirma o e-mail e senha do usuario. |
| Passos | 1. Acessar a página de Login; 2. Preencher todos os campos obrigatórios com dados válidos, usando um e-mail que já esteja cadastrado; 3. Clicar no botão "Entrar"; 4. Verificar se uma mensagem de confirmação é exibida informando que o Login foi feito com sucesso. |
| Critérios de êxito | O sistema deve exibir uma mensagem confirmando que o Login foi realizado. |
| Responsável pela elaboração do caso de Teste | Felipe Soares Kutschera |

| Caso de Teste    | CT-07 - Verificar Login com e-mail e senha cadastrados |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve verificar se e-mail e senha estao corretos. |
| Objetivo do Teste | Verificar se o sistema impede o usuario de fazer Login com dados errados. |
| Passos | 1. Acessar a página de Login; 2. Preencher todos os campos obrigatórios com dados válidos, usando um e-mail que já esteja cadastrado; 3. Clicar no botão "Entrar"; 4. Verificar se uma mensagem de confirmação é exibida informando que e-mail ou senha estão errados. |
| Critérios de êxito | O sistema deve exibir uma mensagem que o e-mail ou a senha estão errados. |
| Responsável pela elaboração do caso de Teste | Felipe Soares Kutschera |

| Caso de Teste    | CT-08 - Verificar se e-mail é cadastrado para recuperar senha |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve verificar se e-mail é cadastrado para recuperar senha. |
| Objetivo do Teste | Verificar se o usuario possui e-mail cadastrado para recuperar a senha. |
| Passos | 1. Acessar a página Recuperar senha; 2. Preencher e-mail, usando um e-mail que já esteja cadastrado; 3. Clicar no botão "Enviar"; 4. Verificar se uma mensagem de confirmação é exibida informando que o e-mail foi enviado. |
| Critérios de êxito | O sistema deve exibir uma mensagem que o e-mail de recuperação de senha foi enviado. |
| Responsável pela elaboração do caso de Teste | Felipe Soares Kutschera |

| Caso de Teste    | CT-09 - Verificar se e-mail é cadastrado para recuperar senha |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve verificar se e-mail é cadastrado para recuperar senha. |
| Objetivo do Teste | Verificar se o usuario possui e-mail cadastrado para recuperar a senha. |
| Passos | 1. Acessar a página Recuperar senha; 2. Preencher e-mail, usando um e-mail que já esteja cadastrado; 3. Clicar no botão "Enviar"; 4. Verificar se uma mensagem e-mail incorreto, favor tentar novamente é exibiba. |
| Critérios de êxito | O sistema deve exibir uma mensagem e-mail incorreto. Por favor, tente novamente |
| Responsável pela elaboração do caso de Teste | Felipe Soares Kutschera |

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
