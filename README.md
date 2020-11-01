<p align="center">
  <img alt="Travis CI" src="https://travis-ci.com/alexanderaugusto/imovel-api.svg?branch=master" />
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/alexanderaugusto/imovel-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/alexanderaugusto/imovel-api">
  
  <a href="https://github.com/alexanderaugusto/imovel-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alexanderaugusto/imovel-api">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
 
</p>

<h4 align="center"> 
	🚧  IMovel API - em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
<!--  <a href="#-layout">Layout</a> •  -->
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

IMovel API - é o backend do aplicativo [IMovel](https://github.com/alexanderaugusto/imovel-app.git), onde está toda regra de negócia da aplicação. Nesta parte, fazemos toda conexão com banco de dados, utilizando um ORM ([Sequelize](https://sequelize.org/master/)), processamos informações mais sigilosas, como token de autenticação, etc. e disponbilizamos em formato de API Restful utilizando o [Express](https://expressjs.com/) para manuseio das rotas.

Esta API também está hospedada no [Heroku](https://dashboard.heroku.com/) no endereço https://imovel-api.herokuapp.com/. Além disso, você pode acessar toda documentação das rotas em https://imovel-api.herokuapp.com/api/docs.

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. [Backend](Neste repositório)
2. [Fontend](https://github.com/alexanderaugusto/imovel-app.git)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/).

Alem disso é necessário que você tenha algum banco de dados relacional rodando localmente ou em algum servidor para fazer a conexão com a api. Como dito anteriormente, esta api está disponível em https://imovel-api.herokuapp.com/, rodando com um banco dados PostgreSQL, porém para rodar localmente é necessário que você configure o seu próprio banco de dados (somente crie o banco de dados, não é necessário criar as tabelas, isso será feito pelo nodejs). Recomendo que utilize o [ElephantSQL](https://www.elephantsql.com/), crie uma instâncie de banco de dados Postgres (é gratuito) e pegue as informações de acesso (username, password, name, hostname e port) para configurar no nodejs. Outra maneira, caso você tenha em sua máquina o [MySQL](https://www.mysql.com/), apenas crie um banco de dados nele e pegue as informações de acesso que serão utilizadas na execução do projeto.

Caso você já tenha estas ferramentas instaladas, <a href="#executando-o-projeto">clique aqui</a> para seguir ao próximo passo.

#### Instalações

##### 1) Windows: 
  No Windows, vamos instalar com o [chocolatey](https://chocolatey.org)

- Instalar chocolatey: Primeiro, abra o powershell como administrador (ctrl + X ou clique com o botão direito do mouse no botão iniciar).

  ```bash
  # Rode esse comando para checar se você tem permissão para instalar dependências com o terminal.
  $ Get-ExecutionPolicy

  # Se o retorno for diferente de "Restricted pule para o próimo comando. SEnao, rode este comando:
  $ Set-ExecutionPolicy AllSigned

  # Finalmente, instale o chocolatey.
  $ Set-ExecutionPolicy Bypass -Scope Process -	
  Force; [System.Net.ServicePointManager]::SecurityProtocol = 
  [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex
  ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

  # Agora, teste a instalação executando no terminal (Não pode retornar nenhum erro):
  $ choco
  ```

- Instalar nodejs e yarn:
  ```bash
  # Basta executar este comando para instalar o nodejs:
  $ choco install -y nodejs-lts yarn

  # Reinicie seu terminal e tente executar (todas as dependências devem retornar a versão do pacote):
  $ node -v
  $ npm -v
  $ yarn -v
  ```
 
 ##### 2) Linux:
    
###### - Ubuntu (Debian):

  - Instalar Curl:  
    ```bash
     # Verifique se você instalou o Curl:
     $ sudo  apt-get  install  curl
     ```   
   
  - Instalar nodejs: Neste tutorial, a instalação é com curl, se você deseja instalar com um gerenciador de pacotes, tente isto: [nvm](https://github.com/nvm-sh/nvm#about). 
    
    ```bash 
    # Agora, se o curl estiver instalado, execute este comando:

    # Usando Ubuntu:
    $ curl -sL https://deb.nodesource.com/setup_12.x | 			
    sudo -E bash - sudo apt-get install -y nodejs

    # Usando Debian, with root 
    $ curl -sL https://deb.nodesource.com/setup_12.x | bash -
    apt-get install -y nodejs
    ```
  
- Instalar yarn:
  ```bash
  # Configure o repositório yarn em seu sistema:
  $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - echo 
    "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

  # Execute este comando para instalar o yarn:
  $ sudo apt update && sudo apt install --no-install-recommends yarn
  
  # Agora, verifique as instalações:
  $ node -v
  $ npm -v
  $ yarn -v
  ```

###### - Arch Linux:

- Instalar nodejs e yarn:
  ```bash 
  $ sudo pacman -S nodejs yarn 
  
  # ou     
  
  $ sudo pacman -S nodejs npm
  ```

##### 3) Mac:
No mac, vamos instalar com o Homebrew.
	
- Instalar Homebrew:
  ```bash
  # Basta executar este comando para instalar o homebrew:
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```

- Instalar nodejs e yarn:
  ```bash
  # Com o homebew, vamos instalar o nodejs e yarn:
  $ brew install node
  $brew install yarn

  # Reinicie seu terminal e tente executar (todas as dependências devem retornar a versão do pacote):
  $ node -v
  $ npm -v
  $ yarn -v
  ```

#### Executando o projeto

##### 🧭 Rodando a aplicação Backend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/alexanderaugusto/imovel-api.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd imovel-api

    # Instale as dependências
    $ yarn install ou npm install

    # Antes de rodar o projeto, é necessário configurar um arquivo de variáveis ambiente (.env): na raiz do projeto crie um arquivo chamando .env e configure as seguinte variáveis de acesso ao banco de dados que você criou: 
    DEV_DB_USERNAME=<USERNAME_DO_BANCO_DE_DADOS>
    DEV_DB_PASSWORD=<SENHA_DO_BANCO_DE_DADOS>
    DEV_DB_NAME=<NOME_DO_BANCO_DE_DADOS>
    DEV_DB_HOSTNAME=<HOST_DO_BANCO_DE_DADOS>
    DEV_DB_PORT=<PORTA_DO_BANCO_DE_DADOS>
    # Se você configurou um banco de dados postgres:
    DEV_DB_TYPE=postgres
    # Se você configurou um banco de dados mysql:
    DEV_DB_TYPE=mysql 

    # Criando as migrations (tabelas) do banco de dados
    yarn sequelize db:migrate

    # Execute a aplicação
    $ yarn start ou npm start
    ou
    $ yarn dev ou npm dev # rodando em modo desenvolvimento (com nodemon)

    # Acesse http://localhost:5000 e veja a api em execução.
    # Caso queira ver a documentação das rotas, acesse http://localhost:5000/api/docs
    
   ```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **API**  ([Node JS](https://nodejs.org/docs/latest/api/))
- **Dependências**:
  -   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
  -   **[cloudinary](https://cloudinary.com/documentation/node_integration)**
  -   **[cors](https://www.npmjs.com/package/cors)**
  -   **[dotenv](https://www.npmjs.com/package/dotenv)**
  -   **[express](https://expressjs.com/)**
  -   **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**
  -   **[factory-girl](https://www.npmjs.com/package/factory-girl)**
  -   **[faker](https://www.npmjs.com/package/Faker)**
  -   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
  -   **[multer](https://www.npmjs.com/package/multer)**
  -   **[multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)**
  -   **[mysql2](https://www.npmjs.com/package/mysql2)**
  -   **[pg](https://node-postgres.com/)**
  -   **[pg-hstore](https://www.npmjs.com/package/pg-hstore)**
  -   **[sequelize](https://sequelize.org/master/)**
  -   **[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)**
  -   **[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)**
  -   **[yup](https://www.npmjs.com/package/yup)**
  
- **Dependências de Desenvolvimento**:
  -   **[cross-env](https://www.npmjs.com/package/cross-env)**
  -   **[jest](https://jestjs.io/)**
  -   **[nodemon](https://www.npmjs.com/package/nodemon)**
  -   **[sequelize-cli](https://www.npmjs.com/package/sequelize-cli)**
  -   **[sqlite3](https://www.npmjs.com/package/sqlite3)**
  -   **[supertest](https://www.npmjs.com/package/supertest)**
  
Veja o arquivo  [package.json](https://github.com/alexanderaugusto/imovel-api/blob/master/package.json)

---

## 🦸 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/alexanderaugusto/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/51683816?v=4" width="100px;" alt=""/><br /><sub><b>Alexander Augusto</b></sub></a></td>      
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>  
  </tr>
</table>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
