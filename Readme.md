# Projeto de Testes de API com Cypress

Este projeto contém testes de API usando o Cypress. Os testes são focados na criação de usuários com diferentes condições.

## Pré-requisitos

- Node.js e npm instalados em sua máquina.

## Instalação

1. Clone este repositório para a sua máquina local.
2. Navegue até a pasta do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.

## Executando os testes

Para executar os testes no modo headless, use o comando `npm run cypress:run`.
Para executar os testes no modo interativo, use o comando `npm run cypress:open`.

## Testes

Os testes estão localizados na pasta `cypress/e2e/api-reqrein`. Aqui está uma descrição dos testes:

- `Create User`: Este teste cria um usuário com um nome e trabalho gerados aleatoriamente.
- `Create User without name`: Este teste tenta criar um usuário sem um nome.

## Funções Auxiliares

- `generateUser()`: Esta função gera um usuário com um nome e trabalho aleatórios. Os nomes e trabalhos possíveis estão definidos dentro da função.

## Comandos do Cypress

- `createUser(user)`: Este comando envia uma solicitação `POST` para criar um usuário. Ele espera um objeto `user` como argumento.

## Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar uma pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes