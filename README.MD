# Microsserviço em Node.js

- Esta aplicação utiliza:
  - Nest.Js
  - Node.Js
  - Prisma.Io
  - SQLite

# Caso de uso desse projeto

- Uma aplicação utiliza notificações para informar o usuário quando algo novo acontece
- Supondo que a aplicação possua:
  - um fórum que informe quando uma mensagem nova é recebida
  - uma seção de aulas que informe quando uma nova aula é postada
- Este microsserviço especializado de notificações vai ouvir todas essas funcionalidades que precisam de notificações

# Breve tutorial para recriar o projeto

    1 - Configurações iniciais
        - Instale o Nest no seu terminal com
            * npm i -g @nestjs/cli
        - Crie o projeto com
            * nest new nome-do-projeto

    2 - Instalando dependências
        - Instalando o prisma como dependência de desenvolvimento
            * npm i prisma -D
        - Instalando dependência do prisma para produção
            * npm i @prisma/client

    3 - Criando o schema do prisma
        * npx prisma init --datasource-provider SQLite

    4 - Dependências para validação de informações vindas das requisições
        * npm i class-transformer
        * npm i class-validator

    5 - Na hora dos Testes, ir em "package.json" e copiar o conteúdo do "jest": "{ ... }" e criar um arquivo "jest.config.ts" com o conteúdo do "jest"

# Coisas úteis que facilitarão a sua vida

- Ao trabalhar com prisma, busque a extensão do mesmo
- Para autoformatar o código do prisma, vá em "settings.json", coloque o seguinte:
  - "[prisma]": {
    "editor.formatOnSave": true
    }
- Para uma verificação mais profunda das tipagens do Typescript, vá em "tsconfig.json" e adicione:
  - "scrict": true
  - "strictNullChecks": true

# Como rodar o projeto?

- Em breve

# Algumas considerações

    - Tudo relacionado a uma camada externa da aplicação, está na pasta "infra".
    - Tudo que dá acesso ao mundo exterior à aplicação.
        * Banco de dados
        * Conexão com outras APIs
        * Rotas

    - Dentro da pasta "application"
    - Todos os arquivos que são independentes de banco de dados ou qualquer coisa que toque a camda externa
