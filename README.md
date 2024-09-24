# uZero

## Descrição do Projeto
Este é um projeto de uma aplicação frontend para gerenciamento de usuários, desenvolvida usando React, TypeScript, Next.js, Redux Toolkit (RTK Query) para o gerenciamento de estado e consumo de APIs.

## Funcionalidades Requeridas
1. **Listar Usuários**:
   - Consumir uma API REST para listar os usuários.
   - Exibir os usuários em uma tabela com colunas de nome, e-mail e ações (editar e deletar).

2. **Criar Usuário**:
   - Implementar um formulário para adicionar novos usuários.
   - Os campos do formulário devem incluir: nome, e-mail e cargo (role).
   - Ao enviar o formulário, o usuário deve ser adicionado à lista consumindo a API.

3. **Editar Usuário**:
   - Permitir editar as informações de um usuário existente.
   - O formulário de edição deve ser populado com os dados do usuário selecionado.

4. **Deletar Usuário**:
   - Permitir deletar um usuário da lista.
   - Exibir um modal de confirmação antes de proceder com a exclusão.

5. **Busca de Usuários**:
   - Implementar um campo de busca para filtrar os usuários por nome ou e-mail.

## Requisitos Técnicos
1. **React e Next.js**:
   - A aplicação deve ser criada usando Next.js para garantir renderização do lado do servidor (SSR) quando apropriado.

2. **TypeScript**:
   - O projeto deve ser totalmente tipado com TypeScript.

3. **Redux Toolkit (RTK Query)**:
   - Utilizar RTK Query para consumir e gerenciar os dados da API de maneira eficiente.
   - Gerenciar o estado global da aplicação (usuários) utilizando Redux Toolkit.

4. **Componentização**:
   - Aplicar boas práticas de componentização e reutilização de código.

5. **Design Responsivo**:
   - A interface deve ser responsiva e funcional em dispositivos móveis e desktop.

6. **Validação de Formulários**:
   - Utilizar validação nos formulários (por exemplo, Yup ou outra biblioteca).

## Instruções Finais
- A API pode ser simulada usando a ferramenta JSONPlaceholder (https://jsonplaceholder.typicode.com/) ou outra de sua escolha.
- O código deve estar bem organizado e seguir boas práticas de desenvolvimento, como o uso de hooks, separação de responsabilidades e manipulação eficiente de estados.
- Fazer uso de commit frequentes para demonstrar a abordagem incremental no desenvolvimento.

## Critérios de Avaliação
- Implementação correta das funcionalidades.
- Uso adequado de TypeScript.
- Boa componentização e reutilização de código.
- Gerenciamento eficiente de estados com Redux Toolkit e RTK Query.
- Qualidade do código (organização, legibilidade, uso de boas práticas).
- Testes de unidade (opcional, mas será um diferencial).