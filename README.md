# Backend teste

- Clone esse Projeto

- Run Yarn para baixar as dependencias da node_modules

# Antes de rodar o projeto crie um arquivo .env na raiz do projeto e coloque as seguintes variaveis

MONGO_URI=mongodb://unzp0iy7cdajd1jdy7gw:6T2WQFycR9KLUBgLPLYt@bzjtpyw2ybt2rxl-mongodb.services.clever-cloud.com:27017/bzjtpyw2ybt2rxl
SECRET=DWOKIVHDF!@#$!$#@

# Logo apos use o comando para iniciar o backend Run yarn dev ou run yarn start para dar start o projeto

# Documentação das rotas Para o funcionamento do backend

- Para usar a criação de post você precisa inicialmente criar um usuario na rota 

http://localhost:8080/api/user 

- passando como body json nesse formato:
{
    "username":"luis",
    "password":"123",
    "description":"o luis e meu amigo",
    "handler":"nada"
}

- Logo apos a criação voce precisa logar usando a rota http://localhost:8080/api/auth  e usando um json no formato 

{
    "username":"",
    "password":""
}



- ele irá retornar um token copie e cole como varivável de authorization como Bearer Token e voce esta pronto para usar as duas rotas que precisam de token 

# Ambas as rotas precisam de um Bearer token para funcionar

# Rota de criação de post - http://localhost:8080/api/post

- Precisa de um Json no formato 
{
    "message":"vamos ver o que faz"
}

- Retorn um json com um _id copie e coloque na rota seguinte para criar um comentario nesse post

# Rota de criação de comentario em um determinado post - http://localhost:8080/api/post/{id do post criado na rota de criar post}/comment

- Precisa de um Json no formato 
{
    "message":"vamos ver o que faz"
}

# Rotas que nao precisam de token 

- http://localhost:8080/api/post - Retorna todos os Posts

- http://localhost:8080/api/post/{id do post} - Retorna um Post pelo id 

- http://localhost:8080/api/post/{id do post}/comment - Retorna um comentário pelo id do post

# Rotas a mais que criei que nao precisam de token

- http://localhost:8080/api/user/ - Retorna uma lista de usuarios

- http://localhost:8080/api/user/5f8e74dcfc37b5461475847d - Retorna o usuario pelo id
