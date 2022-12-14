# Microsserviço em Node.js

- Esta aplicação utiliza:
    - Nest.Js
    - Node.Js
    - Prisma.Io
    - SQLite

# Caso de uso desse projeto
- Uma aplicação utiliza notificações para informar o usuário quando algo novo acontece
- Supondo que a aplicação possua:
    * um fórum que informe quando uma mensagem nova é recebida
    * uma seção de aulas que informe quando uma nova aula é postada
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

# Coisas úteis que facilitarão a sua vida
- Ao trabalhar com prisma, busque a extensão do mesmo
- Para autoformatar o código do prisma, vá em "settings.json", coloque o seguinte:
    * "[prisma]": {
        "editor.formatOnSave": true
      }

# Como rodar o projeto?
- Em breve

