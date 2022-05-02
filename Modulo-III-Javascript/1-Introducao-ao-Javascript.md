# O que é Javascript?

## Instrutora
- Stephany Nusch

## Apresentação do curso
Entender o que é Javascript, suas aplicações na vida real e conhecer o Mercado de trabalho.

### O que iremos ver?

- [] O que é Javascript?
- [] Recursos básicos da linguagem
- [] Console
- [] Javascript numa página da web
- [] Percurso
- [] Atividade Prática
- [] Frameworks e mercado de trabalho

## História, Evolução e Aplicações

### Objetivos

1. Entender a história da linguagem
2. Familiarizar-se com a sintaxe
3. Utilização de recursos básicos
4. Criar seu primeiro projeto
5. Conhecer possibilidades no mercado de trabalho

### História

- Leve
- Interpretada
    - Browser roda em tempo real e o código é disponibilizado instantâneamente no momento da codificação.
    - Resultado executado no tempo de programação
    - Se fosse compilada, a linguagem precisa passar pelo compilador para o computador entender as instruções.
- Baseada em Protótipos
    - Base para grande quantidade de estrutura de dados
    - Conjunto de funcionalidades e possibilidades nessa estrutura de dados
- Multiparadigma
    - Funcional
    - Estruturada
    - POO
- Comumente utilizada em aplicações
- web client-side
    - Linguagem da Web, que os browsers entendem.
- Segue o padrão ECMAScript
    - Conjunto de normas que diz quais são atualizações lançadas em determinada linguagem

### Evolução
Damos destaque ao ECMAScript 6 que foi uma atualização que possibilitou o uso do paradigma de Orientação a Objetos, Arrow Function e jeitos novos de declarar e usar variáveis.
- Todo ano tem atualização de no ECMAScript.

![Imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20e1cadf-7d27-449f-af62-da711c550c82/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220425T145021Z&X-Amz-Expires=86400&X-Amz-Signature=51257159283f57eb5155eef93997396fad780be19e66c904aff46258721354db&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Aplicações
O javascript hoje desenvolve para inúmeros dispositivos e diversas possibilidades
- Web
- Mobile
- Smartwatches
- Games
- Internet of Things
    - Desenvolve rotinas para Alexa com NodeJS
- APIs

# Recursos básicos da Linguagem

## Manipulando um arquivo

### Objetivos

1. Se familiarizar com a sintaxe da linguagem
2. Entender a diferença entre variável e constante
3. Ser capaz de comentar seu código

### Comentário

#### Comentário em uma linha
- Atalho **CTRL + /**

```js
// var y = 0
```

#### Comentário em múltiplas linhas
- Atalho **CTRL + ;**

```js
/* var y = 0
   var x = 3
*/
```
### Variáveis
- Dar nomes que façam sentidos para suas variáveis
- Olhar padrões para criação de variáveis como:
    - camelCaser
    - snake_case

### var
- Tem escopo global
- Pode ser redeclarado

### let
- Escopo local
- Pode ser redeclarado

### const
- Escopo local
- Não pode ser redeclarada

```js
var desconto = 0.2;
const preco = 2;

var total = preco - desconto;
```

## Funções
Usamos a palavra ``function``.
- Dentro dos parênteses, declaramos os **parâmetros** da função
- O ``console.log`` serve para apenas ver o resultado no console da operação.
- O ``return`` indica o retorno da nossa função
- Devemos chamar/invocar a função e passar os **argumentos** nela.

### Definição com function

```js
function soma(a, b) {
    return a + b;
}

soma(3, 5);
```

# Console

## Objetivo

1. Aprender a utilizar o console em uma página web
2. Aprender a utilizar o console no terminal


## Executando um arquivo .js

## Console em uma página web
- Aperte F12 e você terá acesso ao DevTools do navegador.
- No console podemos executar código javascript.

![Imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3ddd0d0c-a5cd-406c-8551-ea97f6af27bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220425T153555Z&X-Amz-Expires=86400&X-Amz-Signature=5aa231953cb43681bd9160c4760f38cd209e0a1a08e33a9a7f59b2b8b50aa9b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


## Console no terminal
- Instale o [NodeJS](https://nodejs.dev/)
- Adicione ao Path
- Criamos nosso arquivo javascript
- Acessamos a pasta onde está o arquivo
- Executamos com ``node nomeDoArquivo.js`` 

![Imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd9ef015-0cf5-4f99-99e5-2a8d42053b87/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220425T153801Z&X-Amz-Expires=86400&X-Amz-Signature=df1392554afe34c7a15c76b4c0ee643fc085cb2ea4c9550ae34d4f647d17dfcb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Frameworks
- Quando estivermos usando Frameworks como VueJS, Angular, ou até mesmo React vamos conseguir o output no console o tempo inteiro por conta do **NodeJS**

### OBS
- Existem várias formas de usar o ``console`` além do ``console.log``. Você pode consultar a [MDN-Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Console)
    - ``console.table``
    - ``console.error``
    - ``console.assert``

# Javascript em uma página Web

### Objetivos

1. Se familiarizar com uma estrutura de projeto simples

2. Aprender a interagir com elementos HTML no DOM

## Estrutura de projeto

### Projetos pequenos
- index.html é a primeira página que o browser carrega
    - Atalho ``'`` usando a extensão de snippets.
- 📂 assets: é onde vão ficar os componentes da página html, como o css e o javascript.

```
├── 📂 assets
│   ├── 📂 css
│   │        └──📜 styles.css
│   ├── 📂 js
│   │       └──📜 script.js
│   └── 📂 img
│     
│
└── 📜 index.html
```

## Inserindo javascript numa página HTML
Colocamos ele ao final da tag ``body`` pois a página é lida de cima para baixo, então se o arquivo javascript for grande e usar os elementos da página, impactará no carregamento da tela.

### ``<script>`` 
- Usaremos essa tag no final do nosso ``<body>`` para usar nosso arquivo javascript junto com o atributo src
- Podemos também escrever código javascript dentro dela

#### ``src="assets/js/script.js``
- Passaremos o caminho para nosso arquivo javascript

### Sugestão
- Usar a extensão Live-Server para abrir um servidor na porta **localhost:3000.**

## Interagindo com os elementos da DOM

### O que é DOM?
- Document Object Model
- Mostra toda a Estrutura dos elementos dentro da janela do browser, desde nossas tags em HTML, até nosso CSS.
- Ela é chamada também de Árvore de elementos, pois se origina no document e se expande pegando todos os elementos da página

![dom](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/80487c01-2c25-48f7-8924-825a6ab5dc25/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220425T231222Z&X-Amz-Expires=86400&X-Amz-Signature=1dd008135e900ee5eaefb90849546b2394fb38dfdab40fed21efa987075bcd38&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Como manipular os elementos da DOM?
- Sempre ao usarmos manipulação da DOM é importante guardar as operações dentro de uma variável, ou uma constante (recomendo o último).

#### ``document.getElementsByTagName('h1')`` 
- Retorna um **HTMLCollection** com a tag ``h1`` no índice 0.
- Mudando o texto para vermelho

#### ``document.getElementById('id')`` 
- Retorna o elemento com o id passado

#### ``document.getElementsByClassname('classe')`` 
- Retorna os elementos com a classe passada

#### ``document.querySelector('.id')`` 
- Retorna elemento com a tag, ou classe, ou id passado.
- Se usamos id, devemos passar com o # antes.
- Se usamos classe, devemos passar com o . antes.
- Se usamos tag, devemos passar a tag.


# Colocando em prática

1. Criar seu primeiro componente dinâmico

2. Introdução a eventos

## Criando um contador
- Para acessar o projeto do Contador, clique [aqui](./Pratica-I/).

## Desafio: to-do-list
- Para acessar o projeto do to-do-list, clique [aqui](./Pratica-II/).

# Mercado de trabalho

1. Entender as exigências do mercado de trabalho

2. Saber onde encontrar oportunidades

## Frameworks e Bibliotecas
São ferramentas que desenvolvedores criaram para ter mais facilidade e rapidez em criar sites interativos e perfomáticos. Eles ajudam muito na **produtividade** na hora de desenvolver um site.

### ‼ Atenção
Necessário e muito recomendado saber a base que é **Vanilla Javascript** ou **Javascript puro** antes de ir para os frameworks.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/50bee384-ea3a-474e-93e5-cef30a550d1c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T000252Z&X-Amz-Expires=86400&X-Amz-Signature=766c6d7e38bd709803697ef72a30b91f93614eeb99203376d869bde0ca455acf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Mercado de trabalho
A rotina do desenvolvedor envolve muita pesquisa e principalmente solucionar problemas
- Muito recomendado aprender sobre metodologias ágeis.
    - DIO tem curso!
- Criar um Github e colocar os projetos lá.
- Criar um Linkedin e postar projetos nele!
- Seguir influenciadores e desenvolvedores no twitter.

### Documentações
- MDN Mozilla
- W3C
- Digital Inovation One
- Stack Overflow (google dos desenvoledores)
- YouTube

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/70b13637-d5a2-4c1a-b01a-8c9fe2f9f53f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220502T143152Z&X-Amz-Expires=86400&X-Amz-Signature=239c857f9abf685404b3024437c2c8583a07b8709effbfc0f64e5f7edd4ab838&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)