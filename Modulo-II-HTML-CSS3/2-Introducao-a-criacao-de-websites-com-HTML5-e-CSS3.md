# Introdução ao curso de HTML

## Prática do Desafio
- Confira o [link](./Pratica-II/) para os arquivos da prática durante esse Módulo 

## Estrutura básica

### Definição e estrutura básica

- Em 1991 Tim Berners-Lee criou essa linguagem de marcação para melhorar a comunicação entre ele e seus colegas de trabalho no CERN, desde então já surgiram 5 versões e o HTML se tornou a base da web.
- Com o HTML definimos o significado e a estrutura do conteúdo da web e, além de texto, nossas páginas precisam de imagens, vídeos e vários outros formatos e para isso temos os elementos HTML.

### Como é formado o HTML
- Um elemento HTML é formado pela tag de abertura e seus atributos, o conteúdo e uma tag de fechamento. E mais a frente veremos que existem elementos que não tem tag de fechamento.
- Com esses elementos podemos agrupar tipos de conteúdo, alterar tamanho e forma de fontes e adicionar diferentes mídias ao nossa página na web.
- E agora podemos ver como é a estrutura básica de um arquivo HTML.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d242382e-280b-4c25-bd44-0a9004bdb595/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T214336Z&X-Amz-Expires=86400&X-Amz-Signature=1101e9ef6f4903177a1bb9ce2e4cc6efccb766e52dac04dde30d64047855647a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Estrutura básica do HTML
- A primeira linha do documento deve ser o `` <!DOCTYPE html> ``, apesar de parecer um elemento HTML ela apenas diz ao navegador que ele está lidando com um arquivo do tipo HTML5. Os elementos HTML vem logo abaixo.

#### ``**<html>**`` 
- A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

#### ``**<head>**`` 
- A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

#### ``**<body>**`` 
- E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

![Imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cd052391-beac-4827-bb90-c4bf7cb50d24/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T214504Z&X-Amz-Expires=86400&X-Amz-Signature=532dd27950505c9af266397a2934f26d9afbc97a9bd05d3ce6fed1a99ac025f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Prática
- Como exercício para esse curso iremos construir um site pessoal, e precisamos começar com a estrutura básica que acabamos de ver.

1. Vamos criar um arquivo index.html e adicionar o doctype e os elementos html, head e body.
2. Depois adicionaremos os elementos meta e title, no primeiro adicionamos o atributo charset com o valor UTF-8 para dizer ao navegador qual é a codificação dos caracteres e no segundo podemos colocar nosso nome.
3. E por último escreveremos nosso nome dentro do elemento body apenas para enxergarmos isso no navegador.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
``` 

---

# Entendendo o que é semântica

## Semântica
- Durante muitos anos o elemento padrão no HTML era a div, construíamos nosso conteúdo todo baseado nela, e assim nascia a sopa de divs.
- Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade, mas nesse curso introdutório vamos focar na semântica.
- A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais significado assim. E temos vários elementos para ressignificar as divs:

### ``<section>`` 

Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

### ``<header>`` 

É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

### ``<article>``

Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

### ``<aside>``

É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

### ``<footer>``

Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um <footer> são informações de autor e links relacionados.

### ``<h1>-<h6>``

Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo <h1> o mais importante e <h6> o menos. Uma dica: use apenas um <h1> por página, pois ele representa o objetivo da sua página.

## Prática

1. Dando continuidade ao nosso site iremos montar sua estrutura. 
2. Adicionaremos um cabeçalho com nosso nome, uma lista de posts (como um blog) e um rodapé para nossos contatos.
3. Vamos abrir nosso arquivo index.html e começar pelo cabeçalho: criamos um ``<header>`` logo abaixo do ``<body>`` e colocamos o título da nossa página dentro de um `` <h1>`` .
4. Depois criaremos a lista de postagens: abrimos um elemento section e dentro dele adicionamos outro `` <header>``  contendo um `` <h2>`` . Notem que eu posso ter mais de um `` <header>``  na página.
5. Para criar nossa postagem adicionamos um ``<article>`` com um ``<header>`` e um `` <h3>`` .
6. O último passo desta etapa é criar um rodapé para nossas informações de contato: crie um elemento footer antes de fechar o `` </body>`` .

**OBS.:**Não se preocupe com o layout e com conteúdo da página, nós vamos tratar isso mais a frente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1> Pedro </h1>
    </header>
    <section>
        <header>
            <h2> Posts </h2>
        </header>
        <article>
            <header>
                <h3> Post 1 </h3>
            </header>
        </article>
    </section>
    <footer></footer>
</body>
</html>

```
---
# Como usar textos e links em HTML

## Textos e links
- A criação do HTML foi motivada pela necessidade de compartilhar textos e documentos, e mesmo depois de quase 30 anos, com toda a evolução da web, isso ainda representa uma boa parte do conteúdo da web.
- Já falamos anteriormente sobre os elementos h1-h6 e, eles são essenciais para nos indicar visualmente a importância e localização de seções de texto na página, mas para textos maiores e mais densos usamos o elemento p.

### ``<p>``

O ``<p>`` representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

### ``<a>``
Um outro elemento interessante e extremamente necessário na web é o ``<a>``
- Significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

#### Atributos
- O elemento a tem vários atributos, mas vamos focar em dois, o ``href`` e o ``target``.

``href``
- O href representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos mailto: e tel:, respectivamente.

``target``
- O target neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

## Prática
1. Vamos adicionar um texto fictício a nossa postagem: logo após o fechamento do ``</header>`` vamos adicionar um elemento p e inserir um texto que vamos retirar do site lipsum.com
2. E em alguma parte deste texto vamos adicionar um hiperlink para outra página e um para nosso e-mail.
3. Criaremos um hyperlink para meu perfil no LinkedIn: adicione o hyperlink no atributo href e o valor ``_blank`` no atributo ``target``, assim o link será aberto em outra aba. 
4. E em algum outro lugar do texto adicionarei meu e-mail e um link para ele, desta forma: ``<a href="mailto:seuemail" target="_blank"> seu email </a>``

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1> Pedro </h1>
    </header>
    <section>
        <header>
            <h2> Posts </h2>
        </header>
        <article>
            <header>
                <h3> Post 1 </h3>
            </header>
            <p> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer></footer>
</body>
</html>

```
---
# Como inserir imagens em seu site

## Imagens
A web também é feita de imagens e para representá-las temos o elemento ``<img>``, ele é um daqueles elementos sem tag de fechamento.

### ``<img>``
O elemento img é bem simples, contendo apenas 2 atributos próprios, o src e o alt.

### Atributos

**``src``**
- O src é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.

**``alt``**
- O alt não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela significa.

## Prática
1. Vamos adicionar uma imagem ao cabeçalho da página e uma imagem a postagem.
2. Primeiro vamos colocar as imagens na pasta do nosso projeto. 
3. Para a imagem do cabeçalho, uma foto com 100 pixels de largura e 100 pixels de altura e para a imagem da postagem eu procurei por html code no site Unsplash, escolhi uma das imagens e deixei ela com 960 pixels de largura por 322 pixels de altura.
4. Dentro do primeiro ``<header>`` da página e antes do ``<h1>`` iremos adicionar um elemento img e no atributo src colocamos o caminho para a nossa foto, /lucas-vilaboim.jpg, e o atributo alt deve conter um significado para a imagem, como no meu caso é uma ilustração, colocarei Ilustração do rosto de (Seu Nome).
5. E dentro do ``<header>`` do ``<article>`` vamos fazer a mesma coisa, mas agora depois do ``<h3>``, e no atributo alt colocaremos Editor de texto mostrando códigos HTML.
6. Usar tinypng.com para otimizar o uso de imagens e dar rapidez ao carregamento.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <img src="pedro.jpg" alt="Imagem do rosto de Pedro">
        <h1> Pedro </h1>
    </header>
    <section>
        <header>
            <h2> Posts </h2>
        </header>
        <article>
            <header>
                <h3> Post 1 </h3>
                <img src="postagem-1.jpg" alt="Editor de texto contendo código HTML">
            </header>
            <p> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer></footer>
</body>
</html>
```

---

# Como organizar listas com HTML

## Listas
Os últimos elementos que veremos neste módulo são os relacionados a listas: ``<ul>, <ol> e <li>.``

Listas servem para agrupar uma coleção de itens, como uma lista de ingredientes ou, como será no nosso caso, uma lista com contatos.

### ``<ul>``

O elemento ul cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

### ``<ol>``

O ``<ol>`` serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

### ``<li>``

E o elemento li é um item dentro de uma dessas listas. Um <li> pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.

## Prática
1. Adicionaremos uma lista de contatos ao rodapé da nossa página, e para isso usaremos também o elemento a que vimos anteriormente.
2. Crie um elemento ul e dentro dele adicione um ``<li>`` com um elemento ``a``, no atributo ``href`` adicione o link de alguma rede social que você mantenha e, no conteúdo da âncora coloque o nome dessa rede.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <img src="pedro.jpg" alt="Imagem do rosto de Pedro">
        <h1> Pedro </h1>
    </header>
    <section>
        <header>
            <h2> Posts </h2>
        </header>
        <article>
            <header>
                <h3> Post 1 </h3>
            </header>
            <p> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer>
        <ul>
            <li>
                <a href="mailto:pedro@gmail.com"> pedro@gmail.com</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pedro.henrique.vinhas"> Linkedin </a>
            </li>
            <li>
                <a href="https://www.github.com/in/pedrovinhas"> Github</a>
            </li>
        </ul>
    </footer>
</body>
</html>
```

---

# Introdução e conceitos básicos do CSS3

✔ Um editor de texto

✔ Navegador de internet

✔ Ter assistido às aulas de introduçã ao HTML5
## CSS 3

### Definição e seletores
- Após a criação do HTML a necessidade de formatar as páginas ficou evidente, assim, em 1996, foi criada a linguagem de estilo que conhecemos por CSS.
- A sintaxe é bem simples e pode ser explicada com a frase "você cria regras de estilo para elementos ou grupos de elementos".
- Vamos usar um elemento HTML que vimos anteriormente, a âncora ``<a>``, para exemplificar.

### Regra CSS
- Uma regra CSS é representada por um seletor ou um grupo de seletores
- No nosso caso é o ``<a>``, então dentro de um par de chaves adicionamos as declarações, no exemplo acima estamos alterando cor e tamanho da fonte dessa âncora, as declarações são formadas por uma propriedade e um valor.
- Percebam que podemos colocar vários seletores em uma regra separando-os por vírgula.

![IMAGEM](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/53de74c4-dcf1-4982-92b4-7221e26c3a08/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T221414Z&X-Amz-Expires=86400&X-Amz-Signature=916ade68f7ebb6f3c1f6e36cb452ea814882ff9f491ddeb476fda3a0dcc14d01&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### Pseudo-classes
- Há um último detalhe nesse exemplo: a pseudo-classe. 
- Elementos HTML sofrem alterações causadas pela interação do usuário, como mover o mouse por cima ou clicar nesse elemento.

**OBS.:**
- O ``a:hover`` do exemplo significa que a âncora também terá essa aparência quando o usuário passar o mouse por cima de um hyperlink.

 

### ID x Classe
- No exemplo anterior criamos uma regra que altera um elemento HTML diretamente, mas isso significa que todos os elementos ``<a>`` ficarão com aquela aparência, e normalmente temos sites mais complexos que precisam de várias regras diferentes para elementos iguais.

- Para ficar mais tangível vamos relembrar um pouco o site que começamos a fazer no módulo passado, ele tinha vários elementos header, mas não vamos querer que o header principal tenha a mesma formatação que o header de uma postagem, é aí que entram os IDs e Classes.
- O seletor que vimos no primeiro exemplo é um seletor de tipo, pois ele representa um elemento HTML, e com IDs e Classes podemos representar qualquer tipo de elemento mas há algumas diferenças entre eles:

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a54d94db-baa4-475f-abf2-1c893fdef944/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T221710Z&X-Amz-Expires=86400&X-Amz-Signature=b0ac5ea6a92f3c933bc0c8bfdd3e1d4d4e7f1df36eb7073de928f75de5c3b613&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### **ID**
- É representado pelo símbolo **#**(hash) seguido de um nome para esse ID.

#### **Classe**
- A classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.

#### **Atenção**
-  A diferença mais importante entre eles é a forma como devem ser usados:
    - ‼ o ID só pode ser usado uma vez em uma página HTML enquanto a classe não tem restrições.
## Exercício
1. Vamos adicionar algumas classes no nosso site e alterar alguns elementos, mas antes precisamos adicionar um arquivo CSS a nossa página.
2. No módulo de HTML descobrimos que podemos adicionar CSS de duas formas, com o elemento style, e assim suas regras ficarão no arquivo HTML, ou podemos criar um arquivo CSS e adicioná-lo na página através do elemento link, e é essa forma que usaremos.
3. Crie um elemento link dentro do head do seu arquivo e adicione os atributos rel="stylesheet" e href="style.css", o rel denota o tipo de arquivo que estamos incluindo na página e o href é o caminho para o arquivo. E na mesma pasta do arquivo HTML crie um arquivo chamado style.css.
4. Agora sim vamos ao CSS, adicione um ID #title ao h1 da página, pois queremos que ele seja único, e depois adicione as classes .subtitle e .post_title ao h2 e h3, respectivamente.
5. No arquivo CSS vamos mudar a cor desses três títulos, e depois alterar o tamanho da fonte do título da postagem.

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="pedro.jpg" alt="Imagem do rosto de Pedro">
        <h1 id="title"> Pedro </h1>
    </header>
    <section>
        <header>
            <h2 class="subtitle"> Posts </h2>
        </header>
        <article>
            <header>
                <h3 class="post_title"> Post 1 </h3>
            </header>
            <p> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer>
        <ul>
            <li>
                <a href="mailto:pedro@gmail.com"> pedro@gmail.com</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pedro.henrique.vinhas"> Linkedin </a>
            </li>
            <li>
                <a href="https://www.github.com/in/pedrovinhas"> Github</a>
            </li>
        </ul>
    </footer>
</body>
</html>
```

### styles.css

```css
#title, .subtitle, .post_title {
    color: blue;
}

.post_title {
    font-size: 16px;
    font-style: italic;
}
```

 
---
# Box-model
- Quando estamos criando o layout de um site o navegador representa cada elemento HTML  como uma caixa retangular, isso é o box-model. 
- Com CSS nós alteramos a aparência dessa caixa (largura, altura, cor de fundo, etc.). Essa caixa é composta por 4 áreas: o conteúdo, o padding, a borda e a margem.

**Margin**
- As margens (margin) são espaçamentos entre elementos;

**Border**
- As bordas (border), circundam o padding e conteúdo, conseguimos alterar largura e cor.

**Padding**

O padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele;

**Content**
O conteúdo (content) é o que o seu bloco representa, um texto, uma imagem, um vídeo;
 
![Box-model](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/110e8be6-07a8-4812-a0fb-34449c84b957/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T224917Z&X-Amz-Expires=86400&X-Amz-Signature=6e6441904bdb134c9f05d43377c8b4c69ace953516e5bc3e21cf1b8709508f2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Exercício
1. Para enxergamos o box-model vamos adicionar cores e bordas a alguns elementos.
2. Primeiro adicionaremos uma cor de fundo para a visualização ficar mais fácil, usaremos a propriedade background com o valor ``#fcfcfc`` no elemento ``body``.
3. Depois vamos adicionar uma classe ao ``<article>``, pode ser ``.post``, e então vamos colocar a cor branca de fundo com a propriedade background e o valor ``#FFF``. Agora conseguimos enxergar o content do box-model.
4. Vamos adicionar um padding de 10 pixels neste mesmo article. Perceberam o espaçamento que surgiu em volta do nosso conteúdo?
5. Agora adicionamos um borda mais escura a ele com a propriedade border. Vou falar mais detalhadamente sobre border mais a frente, mas por enquanto vamos deixar essa borda com 3 pixels de largura, o contorno sólido e a cor azul.
6. Por último vamos adicionar uma margem do lado de fora do post com a propriedade margin e o valor 10 pixels.
7. Agora inspecionando o nosso elemento conseguimos todas aquelas camadas citadas antes: o conteúdo em azul, o padding em verde, as bordas em marrom e as margens em laranja.
8. Já que começamos a falar sobre bordas e cor de fundo, no próximo vídeo vamos nos aprofundar nessas propriedades.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="pedro.jpg" alt="Imagem do rosto de Pedro">
        <h1 id="title"> Pedro </h1>
    </header>
    <section>
        <header>
            <h2 class="subtitle"> Posts </h2>
        </header>
        <article class="post">
            <header>
                <h3 class="post_title"> Post 1 </h3>
            </header>
            <p> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer>
        <ul>
            <li>
                <a href="mailto:pedro@gmail.com"> pedro@gmail.com</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pedro.henrique.vinhas"> Linkedin </a>
            </li>
            <li>
                <a href="https://www.github.com/in/pedrovinhas"> Github</a>
            </li>
        </ul>
    </footer>
</body>
</html>
```

### styles.css
```css
body {
    background: #ccc;
}

#title, .subtitle, .post_title {
    color: blue;
}

.post_title {
    font-size: 16px;
    font-style: italic;
}

.post {
    background: #FFF;
    padding: 10px;
    border: 3px solid #000;
    margin: 10px;
}
```

# Estilizando elementos, textos e listas 

## Estilizando elementos
- Agora que entendemos o box-model podemos focar em deixar nosso site mais bonito, então vamos repassar pelas propriedades já citadas:

## Padding e Margin
Anteriormente usamos o padding e o margin da forma mais básica, com apenas um valor, mas eles são mais poderosos que isso. Se quisermos atribuir tamanhos diferentes para cada lado do box nós podemos, e vamos ver três formas de fazer isso.

### Superior e Inferior

- A primeira é colocando um valor para as partes **superior** e **inferior** e depois para os lados esquerdo e direito.

- O valor de 10 pixels se refere ao eixo Y, ou partes superior e inferior, e os 5 pixels se referem aos lados esquerdo e direito.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5957adb1-e7db-4560-ba62-b8abffa07a5b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232025Z&X-Amz-Expires=86400&X-Amz-Signature=18ed1e22b078065250191633e0d2a37276869b8ec3d6ebbcc4cfe5f77d31c17d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### Para os 4 lados

- A segunda forma é dando valores para cada lado do box.

- Então começamos pelo topo com 15 pixels, passamos o lado direito com 10 pixels, depois para a parte inferior com 5 pixels e por último o lado esquerdo com 0, e sempre nessa ordem.

#### **Ordem**

- Topo esquerda, topo direita, inferior direito, inferior esquerdo

Uma boa dica também é que quando o valor for 0 não precisamos não precisamos colocar a unidade.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/214f3f6e-1b95-4be7-8536-c94dd4e8b9fa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232343Z&X-Amz-Expires=86400&X-Amz-Signature=53718feb743b3fb2a90c144f3a03d88956362dc16ae9e50cd59e06d48709ce64&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Propriedades específicas 

- A terceira forma é com as propriedades específicas para cada lado, até agora tínhamos visto atalhos para essas propriedades.

- Essa opção é mais usada quando temos o mesmo valor para 3 lados, e o quarto precisa ter um valor diferente, então usamos o padding com apenas um valor e uma dessas opções para representar o lado diferente.

 ![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5d4b040-1202-43f1-bbf2-a7e8e420964c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232355Z&X-Amz-Expires=86400&X-Amz-Signature=6ac08714735669f6c025322026c93bd89fcc65316ff58aa60483ed183e2a2343&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Background
- A propriedade background também é um atalho para várias propriedades, mas isso vocês podem absorver aos poucos, e uma boa opção de leitura é a documentação do MDN.
- Por enquanto veremos apenas como mudar a cor de fundo.

 ![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5d4b040-1202-43f1-bbf2-a7e8e420964c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232355Z&X-Amz-Expires=86400&X-Amz-Signature=6ac08714735669f6c025322026c93bd89fcc65316ff58aa60483ed183e2a2343&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Formas de usar o background
- Aqui temos 3 formas de colocar uma cor de fundo, e ainda existem outras.
- A primeira é pelo nome da cor em inglês, a segunda é pelo código hexadecimal e a terceira é usando apenas o atalho background.

 ![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/661fe1bf-ef8c-4733-8de2-0f62c35fc840/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232536Z&X-Amz-Expires=86400&X-Amz-Signature=0642f3e860d88eecd2aa1986506288db24200702972ceaba3fdd2050f866c9a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
## Border
- Vimos que a propriedade border pode ter 3 valores: a largura, a cor e o estilo, mas existem algumas particularidades nisso.

- A largura pode ser usada com várias unidades, como px, em e mm. 
- A cor pode ser atribuída pelo nome ou por um código hexadecimal, assim como fizemos com o background, e o estilo é representada por palavras-chave, vamos ver algumas delas:

### Estilos da borda

solid: mostra uma borda simples e reta;

dotted: são bolinhas com um pequeno espaçamento entre elas;

dashed: forma uma linha tracejada.

 ![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b226d96c-a8e8-4e7c-9889-24112cf8f0bb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232632Z&X-Amz-Expires=86400&X-Amz-Signature=0c5986b562017f4d39a53aaae3e38846246f644f1916dc735c3c85c244803e48&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Separando lados da borda | ``border-top, bottom, left, right``
- Aproveitando que mostrei esse código temos que falar sobre como separar a estilização dos lados de uma borda.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6d82810b-2d02-492b-a3f5-e44a84dccd8a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232837Z&X-Amz-Expires=86400&X-Amz-Signature=3fc92dced191aee728e6997a86b096dcc559b9b75e926d14fcf8be2fca875ad1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### ``Border-width, border-color e border-style``

- E se você não quiser usar a propriedade border existem as propriedade específicas para cada aspecto de uma borda, são elas border-width para a largura, border-color para a cor e border-style para o estilo.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6d82810b-2d02-492b-a3f5-e44a84dccd8a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232837Z&X-Amz-Expires=86400&X-Amz-Signature=3fc92dced191aee728e6997a86b096dcc559b9b75e926d14fcf8be2fca875ad1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Aqui temos o mesmo código anterior de duas formas diferentes, a primeira com o atalho border e a segunda com cada propriedade específica.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f230403b-4e1e-43b4-85be-62235cb54780/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T232948Z&X-Amz-Expires=86400&X-Amz-Signature=88f7a2ec1642557f9cfb201b0968dac9acad7b5bddbb67848f72b506878e1bec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### ``border-top-width, border-top-color e bordero-top-style`` 
- Depois disso podemos juntar os lados com os aspectos de uma borda e criar uma regra mais específica ainda.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/55cfe210-1430-4010-bb50-33581d8c0623/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T233027Z&X-Amz-Expires=86400&X-Amz-Signature=7f922b314f337bcb7bcbfcb8fbd04264cb7cc0494976dddc0ba90fbc17a9c61a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

 ### OBS
 - Nesse caso usamos mais a expressão shorthand, ``border`` 

## Border-radius
- A última propriedade é o border-radius, ele permite arredondar os cantos de um elemento. 
- Podemos usar várias unidades, mas as mais comuns são os pixels e a porcentagem.
- Colocando apenas um valor mudamos todos os cantos do elemento, mas seguindo aquela mesma ordem que vimos no padding e margin -  -  conseguimos alterar cada canto separadamente.
### Ordem
- Topo esquerdo, Topo direita, inferior direita e inferior esquerda
## Exercício
1. Neste exercício vamos deixar o nosso site um pouco mais bonito usando as propriedades que acabamos de ver.
2. Vamos aumentar o padding para 15 pixels e colocar uma margem de também de 15 pixels só na parte de baixo do post.
3. Quando olhamos para os textos percebemos que os espaçamentos estão diferentes do restante do post, então vamos padronizar isso.
4. No título do post vamos retirar todas as margens para depois colocar apenas uma margem inferior de 15 pixels. E no corpo do post precisamos adicionar uma classe e remover todas as margens para depois adicionar uma margem superior de 15 pixels.
5. Podemos manter o background branco, mas vamos diminuir a largura das bordas para 2 pixels e mudar a cor para a mesma do texto - ``#505050`` - e por último adicionaremos um ``border-radius``, 5 pixels são suficientes. 
6. Podemos adicionar esse mesmo de valor de ``border-radius`` na imagem, para isso vamos acrescentar uma ``class`` a imagem antes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="pedro.jpg" alt="Imagem do rosto de Pedro" class="post_image" class="photo">
        <h1 id="title"> Pedro </h1>
    </header>
    <section>
        <header>
            <h2 class="subtitle"> Posts </h2>
        </header>
        <article class="post">
            <header>
                <h3 class="post_title"> Post 1 </h3>
            </header>
            <p class="post_content"> Lorem ipsum dolor <a href="mailto:seuemail@gmail.com" target="_blank"> seu email </a>sit amet consectetur adipisicing elit. I.</p>
        </article>
    </section>
    <footer>
        <ul>
            <li>
                <a href="mailto:pedro@gmail.com"> pedro@gmail.com</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pedro.henrique.vinhas"> Linkedin </a>
            </li>
            <li>
                <a href="https://www.github.com/in/pedrovinhas"> Github</a>
            </li>
        </ul>
    </footer>
</body>
</html>

```

```css
body {
    background: #f7f7f7;
}

.photo {
    border: 1px solid #505050;
    border-radius: 50%;
}

#title, .subtitle, .post_title {
    color: #505050;
}

.post_title {
    font-size: 16px;
    font-style: italic;
    margin:0;
    margin-bottom: 15px
}

.post {
    background: #FFF;
    padding: 15px;
    border: 3px solid #505050;
    margin-bottom: 15px;
    border-radius: 5px;
}

.post_content {
    margin: 0;
    margin-bottom: 15px;
}

.post_image {
    margin-bottom: 15px;
}
```
---
## Estilizando textos
Já sabemos que podemos mudar cor e tamanho de algumas fontes, e agora vamos nos aprofundar nisso.
### font-family
Com o font-family podemos alterar a fonte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, chamadas de web safe fonts.
- Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e podem ser usadas sem preocupação.
- Caso a primeira fonte não funcione, a segunda entra como back-up

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5ac6190b-8073-4da6-bfe2-54ffe2c585d9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T233928Z&X-Amz-Expires=86400&X-Amz-Signature=0e638720f5cc257ca53b6f58f36e746d1651921c738f69fe55f4090615e9c06a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### font-size
O font-size nos ajuda a mudar o tamanho do texto, existem algumas unidades de medida para ele mas por enquanto os pixels são suficientes para nós.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/179e25d5-1413-4365-a0de-733217133ad0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T234006Z&X-Amz-Expires=86400&X-Amz-Signature=d60cb17db8d4222d8adebed9c267c68a7c2e027c3b23522a3af73346e5706bd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### font-style
Usamos o font-style para tornar um texto itálico, na maioria das vezes você usará apenas o valor italic para ele, mas se precisar tirar o itálico de um texto você pode usar o valor normal.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/244c8199-3d30-46dc-b17d-925349441d0a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T234024Z&X-Amz-Expires=86400&X-Amz-Signature=f2aca61b8c12cee9e5addb2d30bf3337af2eb604a1968b06abd57f381dac4b6a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### font-weight
Altera o peso do texto, existe palavras-chaves e valores numéricos.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5c0f8db8-130e-4416-ab6d-24fd79b349a5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T234031Z&X-Amz-Expires=86400&X-Amz-Signature=f8ab74cea46b6290852d850b1a7ed7767197b7440b53b56992948fafb9ed7ca2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### text-transform
Altera o texto entra maiúscula, minúsculas, capitalize (primeiras letras de cada paalvra em maiúscula)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f4fc765-e89c-45d7-88cf-616561996256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T234103Z&X-Amz-Expires=86400&X-Amz-Signature=20a0a077444ddda6e04d1387d3ea89433e5403042776a7dd69e1fbdddac60521&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### text-decoration
Usado para dar destaque ao texto coloca linhas.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/375e84d0-e857-48ca-8d60-a1eb64666bee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T234111Z&X-Amz-Expires=86400&X-Amz-Signature=0c3d518170e2eff8d9c3e8e2db922bb1e6ccc9d568bf6fe0dcb42a945c9ea36c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Exercício prático
1. Vamos alterar as fontes e algumas propriedades dos nossos textos.

```css
body {
    background: #f7f7f7;
    font-family: Verdana;
}

.photo {
    border: 1px solid #505050;
    border-radius: 50%;
}

#title, .subtitle, .post_title {
    color: #505050;
}

#title {
    font-size: 40px;
    text-transform: uppercase;
}

a {
    text-decoration: line-through;
    color: #505050;
}

.post_title {
    font-size: 16px;
    font-style: italic;
    margin:0;
    margin-bottom: 15px
}

.post {
    background: #FFF;
    padding: 15px;
    border: 3px solid #505050;
    margin-bottom: 15px;
    border-radius: 5px;
}

.post_content {
    margin: 0;
    margin-bottom: 15px;
    text-transform: capitalize;
}

.post_image {
    margin-bottom: 15px;
}

```

---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>