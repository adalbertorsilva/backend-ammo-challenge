# backend-ammo-challenge

# frontend-ammo-challenge

Aplicação cliente do desafio da ammo varejo

## Efetuando build do projeto


### Opção 1

Para efetuar o build do projeto localmente é necessário:

- Docker
- Docker Compose

#### Passo a passo

- Baixe o projeto com o comando:

```
git clone https://github.com/adalbertorsilva/backend-ammo-challenge.git
```
- Entre na pasta do projeto

- Execute o comando:

```
docker-compose up --build
```

### Opção 2

Para efetuar o build do projeto localmente é necessário:

- Nodejs 8 ( ou mais atual )
- Banco de dados PostgreSQL ( 9.4 ou maior )

#### Passo a passo

- Baixe o projeto com o comando:

```
git clone https://github.com/adalbertorsilva/backend-ammo-challenge.git
```
- Entre na pasta do projeto
- Crie um arquivo **.env** e adicione a seguinte variavel de ambiente:

```
DATABASE_USERNAME = usuario do bando de dados
DATABASE_PASSWORD = senha de acesso do banco de dados
DATABASE_HOST = IP / URL de onde está localizado o banco
DATABASE_NAME = nome do banco de dados no ambiente de produção
```
- Inicie o projeto com o comando

```
npm start
```
