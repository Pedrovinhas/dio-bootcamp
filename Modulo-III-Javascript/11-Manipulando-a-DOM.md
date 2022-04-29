# Entendendo a D.O.M.

## Apresentação do Curso

1. Explicar o que é o DOM
2. Esclarecer as diferenças entre o DOM e o BOM
3. Principais métodos para manipular páginas da web

## O que é D.O.M. e D.O.M vs B.O.M

### Objetivos

1. Explicar o que é o DOM
2. Explicar a diferença entre DOM e BOM

### O que é o DOM?
- O Document Object Model é um padrão de como **acessar** e **modificar** os elementos HTML de uma página.
- É uma árvore de hierarquia, onde através dela podemos acessar todos os filhos (nós).
- Manipulamos ele e tudo que está dentro dele, como tags, textos, atributos etc...

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81929188-0429-44e7-8fc2-faee693ae74d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T201155Z&X-Amz-Expires=86400&X-Amz-Signature=f37d0aad27f2b1f589a0b741542b3910082d89be24d6583098e1602a4c99a686&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### BOM
- É o Browser Object Model
- É a Árvore de objetos do nosso Browser.
- Tudo o que está dentro do objeto Window, e um dos filhos dela é a DOM.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/935e08ca-b61c-4aec-8f67-6e4c755af02c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T201207Z&X-Amz-Expires=86400&X-Amz-Signature=52e42be895d9c850d956b7d569a5d53ac8b4a8751719802609bc1051d34b35ab&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Selecionado elementos

## Métodos

### Objetivos

1. Apresentar a estrutura HTML
2. Apresentar métodos para interagir com os elementos de uma página

### Estrutura HTML

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3c3c138-b1ec-4ca8-9f45-c79d7aa0a679/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T201410Z&X-Amz-Expires=86400&X-Amz-Signature=4df031aeae1fbefe0fb9cbd98c242e74898ea8abf8fe27cc6d5201be9e00954f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Selecionando os elementos de uma página
- Exemplos de como selecionar
    - `document.getElementById('id')`
        - Retorna um elemento html
    - `document.getElementsByClassName('classe')`
        - Retorna um HTMLCollection
        - Podemos usar os métodos de um array
    - `document.getElementsByTagName('tag')`
         - Retorna um elemento html
    - `document.querySelector('.classe')`
        - Retorna um elemento html
        - Seleciona #id, tag ou .classe
    - `document.querySelectorAll('.classe')`
        - Seleciona #id, tag ou .classe
        - Retorna um NodeList
        - Não podemos usar os métodos de um array

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a8e12de7-9113-4539-ab26-e30448d17b17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T201712Z&X-Amz-Expires=86400&X-Amz-Signature=4a517a941bf6efbc80d504c2ccaa5f193c657ad531d7ec4f43aebad61d38ebd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b235e21e-1cde-44c1-a8a0-59dfd9bbc8c1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T202125Z&X-Amz-Expires=86400&X-Amz-Signature=34c0547af8cb7f3d0b6ae6f71888f8396a3d1b6c2cb4fb053adf57f586564086&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### HTML Collection x NodeList
- No HTMLCollection não podemos usar métodos de Array, como filter, forEach...
- No NodeList podemos nos valer desses métodos para obtermos o que queremos.

### Adicionar e deletar

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/22cfed61-029a-42ca-ac91-67066ac09dc1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T202700Z&X-Amz-Expires=86400&X-Amz-Signature=81b6d9184123c6a8742c2f0c26bb826d6ecbf6260e0c73a0aee34d6ed89da24a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
# Trabalhando com estilos

## Trabalhando com estilos

### Objetivos

1. Ensinar como manipular estilos do elemento HTML

### `Element.classList`
- Adicionando uma classe a um elemento via javascript.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68cfacc2-42d3-4fad-b386-1c407bfe2d3a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T205736Z&X-Amz-Expires=86400&X-Amz-Signature=e4b580c7d4d770c8850b2dc4e32b299f56f1ddedc282a2c7e45da7fbbdd5288b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Acessando diretamente o CSS de um elemento com `style.atributo`
- Adicionamos um estilo diretamente.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b29d75b-b4b4-427e-b60e-f74d1027c18b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T205934Z&X-Amz-Expires=86400&X-Amz-Signature=0111cb3a93a4bc5fb1ca64abe28920dad255906ceef43a71097e402df161767a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Eventos

## Tipos e acionando eventos
- Qualquer tipo de ação que um usuário faz numa página da web
### Objetivos

1. Explicar o que são eventos
2. Apresentar eventos comumente utilizados
3. Ensinar como acionar estes eventos

### Tipos

#### Eventos de mouse `mouseover, mouseout`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/576cf0ac-5965-422c-99ba-9588cf5ae6bc/mouseover.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T211725Z&X-Amz-Expires=86400&X-Amz-Signature=536ad68334df7d84c46cb153c459bb8ff948449650ee3b684f1f9b8994f6fb72&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22mouseover.gif%22&x-id=GetObject)
#### Eventos de clique `click, dbclick`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10efeeb5-5198-41c1-bf32-ac29d5afdec3/click.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T211749Z&X-Amz-Expires=86400&X-Amz-Signature=01d1a7b64fc1207669b19c4c540483a241f213a1b6417623fb5a5d3325b4afec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22click.gif%22&x-id=GetObject)
#### Eventos de atualização `Change, load`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/edeb054d-1b03-4b75-a194-80a8d6de9633/change.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T211755Z&X-Amz-Expires=86400&X-Amz-Signature=66ecbab18ceac593397865e3b1adeb1146a43c673d5a69efe9feec4b51b0da88&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22change.gif%22&x-id=GetObject)
### Event Listener |
- Diretamente no Javascript cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.
- Escutador de eventos

#### `addEventListener`
- Como argumentos passamos o **tipo de evento** e **uma função** dizendo o que fazer quando o evento for acionado
- A função será ativada quando ocorrer o evento.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a29757d2-3d2f-49ff-830a-10813bb248f6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T211519Z&X-Amz-Expires=86400&X-Amz-Signature=2acc56f0ef8a181143423a2fef350c8ce3746e98b3b7cb005ab5b2c42983cb5e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### No atributo HTML
- Especifica a função a ser chamada diretamente no elemento HTML
- Usamos o `on` na frente do evento.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a4146a0d-6995-4607-b514-c674a38b330f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T211646Z&X-Amz-Expires=86400&X-Amz-Signature=9e07b8241a9883bf1504484b67a1e3ab869d950b00d0f9bc616719eb9f13342c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Atividade práticas

- Você pode consultar o projeto [aqui](./projeto-dark-mode/)