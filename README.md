# challenge-03-github-blog
Desafio 03 - Github Blog react App

## Descricao
Nesse desafio, você vai desenvolver uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog.

- [x] Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- [x] Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- [x] Criar uma página para exibir um post (issue) completo

- Utilizar:
  * [x] Fetch / Axios
  * [x] Roteamento e React Router DOM
  * [x] Formulários
  * [x] React através do Vite com TypeScript, Axios, react-hook-form, entre outras bibliotecas.

## Desenvolvendo o projeto

Para desenvolver esse projeto, recomendamos utilizar as principais ferramentas que utilizamos durante o desenvolvimento do primeiro módulo do Ignite, ou seja, React através do Vite com TypeScript, Axios, react-hook-form, entre outras bibliotecas.

Além disso, você vai precisar de alguns **preparativos** para completar esse desafio.

Primeiramente, crie um repositório **público** no GitHub. Esse repositório será onde você vai criar `issues` que serão os posts do seu blog que, inclusive, podem ser do mesmo repositório onde você vai deixar o seu código.

O título da `issue` será o nome do Post e o conteúdo será o corpo do post.

Caso você queira ver um exemplo, criamos um repositório com uma issue representando o resultado do post e que você pode ver [clicando aqui](https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1).

Depois disso, você irá precisar utilizar algumas API’s do GitHub:

- [x][GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): Será utilizada para buscar os dados do seu usuário do GitHub. No link você pode ver como fazer a requisição para ela, mas basicamente você deve fazer uma chamada para `api.github.com/users/${username}`.
    
    
- [x][GitHub Search API:](https://docs.github.com/pt/rest/search) Essa é a parte mais divertida da aplicação! Você vai utilizar a API de busca do GitHub para filtrar por issues do repositório que você criou. Além disso, essa será a mesma API que você utilizará para fazer o filtro por busca.

A rota a ser utilizada principalmente é a rota [`https://api.github.com/search/issues`](https://api.github.com/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test).
Essa rota recebe um parâmetro `q` que faz uma busca a partir de uma string. Nessa string, você pode passar, por exemplo, qual repositório você quer buscar enviando o texto `q=${texto}%20repo:${username}/${repo}`. Além disso, o parâmetro `q` também será usado para enviar um texto de busca, ou seja, você enviara o texto de busca + o parâmetro `repo` para ele buscar tudo junto.

Você pode ver mais sobre a busca de issues na API do GitHub por aqui: https://docs.github.com/pt/rest/search#search-issues-and-pull-requests

Um exemplo de chamada à API com busca é a seguinte: [`https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge`](https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge)

PS: Perceba que nessa busca, no parâmetro `q` foi passado a string `Boas%20práticas` e também o nome do repositório com um espaço do título. Isso irá buscar entre as issues qualquer uma que possua o texto `boas práticas` em seu título ou até descrição.

- [x][GitHub Issues API:](https://docs.github.com/pt/rest/issues/issues#get-an-issue) Para exibir o post completo, você precisará utilizar a `GitHub Issues API` para retornar todos os dados de uma issue. Você pode fazer isso através do `number` da issue para acessá-la através da URL no mesmo repositório, onde no mesmo exemplo de issue anterior, a URL ficaria assim: [`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1`](https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1)

```
Atenção: A API do GitHub possui um limite de 10 requisições por minuto caso você não configure uma chave privada. Você pode ter gratuitamente até 30 requisições por minuto configurando uma chave privada, você pode ver pela documentação: https://docs.github.com/pt/rest/search#rate-limit
```

Além disso, é legal que você utilize as rotas dinâmicas do [react-router](https://reactrouter.com/), onde você pode receber parâmetros através dela para exibir a página do post completa. Esse parâmetro pode ser o `number` da issue para você conseguir fazer o fetch na Issues API. Para isso, você pode utilizar o hook useParams do react-router-dom.

Como última dica, para exibir o post você precisará formatar ele, pois no GitHub ele é escrito no formato de markdown e para ser exibido em tela corretamente, você precisará converter ele desse formato markdown para um formato HTML. Para isso você pode utilizar o [react-markdown](https://github.com/remarkjs/react-markdown).

Caso você tenha alguma dificuldade você pode ir no nosso [**fórum**](https://app.rocketseat.com.br/h/forum/react-js) e deixar a sua dúvida por lá! 

Após terminar o desafio, caso você queira, você pode tentar dar o próximo passo e deixar a aplicação com a sua cara. Tente mudar o layout, cores ou até adicionar novas funcionalidades para ir além 🚀 

Abaixo você também pode assistir um vídeo que gravamos para fazer um onboarding no fluxo da aplicação e dar várias dicas para desenvolver as funcionalidades e o layout:

## Github API
- Veja as instrucoes no Post Oficial
- https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1

## Layout
 - https://www.figma.com/file/sl3nfN1AfmCLtoAonUx2aH/GitHub-Blog-(Community)?node-id=0%3A1&mode=dev
