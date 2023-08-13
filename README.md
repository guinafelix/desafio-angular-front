
# Desafio Desenvolvedor (Front End)

Esse repositório contém o front end do desafio proposto para a vaga de desenvolvedor.




## Autores

- [@guinafelix](https://www.github.com/guinafelix)


# Stack Utilizada

**Back-End**: Node.js, Typescript, Angular

**Bibliotecas**: JwtDecode



## Documentação do Projeto

#### Esse projeto foi desenvolvido para consumir as rotas da aplicação back end. Para acessar a documentação, basta acessar http://localhost:8080/api/docs.html

## Funcionalidades

- Administrador (CRUD Completo de Disciplinas, Cursos, Perfis e Usuários)
- Alunos e professores (Visualizar matriz curricular)


## Rodando localmente

Clone o projeto

```bash
git clone git@github.com:guinafelix/desafio-profectum-front.git
```

Entre no diretório do projeto

```bash
cd my-project
```

Instale as dependências

```bash
npm install
```

Com o back end rodando inicie o projeto

```bash
ng g serve -o
```


## FAQ

#### Qual arquitetura foi desenvolvida na execução deste projeto?

Este projeto foi desenvolvido implementado os princípios do SOLID no qual cada funcionalidade tem seu pŕoprio módulo, o que divide a aplicação em pequenos segmentos que atuam em conjunto.

#### Quais funcionalidades estão presentes nesse projeto?
- Apesar de algumas funcionalidades não estarem completas este projeto possui sistema de autenticação por login jwt e possui exemplos funcionais de integração com o back-end nas principais requisições http [POST, PATCH, GET, DELETE].

#### Quais pontos do projeto podem ser melhorados?

- O design do projeto está bem simples, feito com o intuito apenas de atender funcionalmente as requisições solicitadas.

- O processo de autenticação jwt foi implementado porém a tela de início ainda não está exibindo o painel dinamicamente adequado para o perfil daquele usuário. NO entanto, mesmo visualizando o painel, o usuário não consegue acessar informações que não sejam referentes ao seu conjunto de permissões, o que atende parcialmente a funcionalidade proposta na definição deste desafio.


## 🚀 Sobre mim
Eu sou um Desenvolvedor FullStack que possui conhecimento nas Stacks Spring Boot, Node.js, Nest.js, React.js, Angular, Flask e FastAPI.
## Licença

[MIT](https://choosealicense.com/licenses/mit/)
