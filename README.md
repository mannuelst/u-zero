# U-Zero
U-Zero é uma aplicação de gerenciamento de usuários desenvolvida com Next.js, React e Redux Toolkit.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/mannuelst/u-zero.git
   cd u-zero
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando o projeto

Para iniciar o projeto em modo de desenvolvimento:

```
npm run dev
```

Isso iniciará:
- O servidor de API mock com json-server na porta 3333
- O servidor de desenvolvimento Next.js

Acesse `http://localhost:3000` no seu navegador para ver a aplicação.

## Scripts disponíveis

- `npm run dev`: Inicia o ambiente de desenvolvimento (API mock + Next.js)
- `npm run build`: Constrói o projeto para produção
- `npm start`: Inicia o servidor de produção
- `npm test`: Executa os testes com Playwright
- `npm run lint`: Executa o linter para verificar o código

## Tecnologias principais

- Next.js
- React
- Redux Toolkit
- React Hook Form
- Zod (para validação)
- Tailwind CSS
- Playwright (para testes)

## Estrutura do projeto

(Aqui você pode adicionar informações sobre a estrutura de diretórios do seu projeto)

## Testes

Os testes são escritos usando Playwright. Para executar os testes:

```
npm test
