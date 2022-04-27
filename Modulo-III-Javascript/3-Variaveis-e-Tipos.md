# Atribuindo Valores

## Objetivos do curso

1. Explicar as principais estruturas de dados do Javascript

2. Como utilizá-las e suas possibilidades

## Variáveis

### Objetivos
1. Explicar o que são variáveis
2. Explicar o que são constantes
3. Explicar a diferença entre var, const e let

### Atribuição de Valores e Boas Práticas
- Muito importante saber como definir variáveis para tornar o código legível.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8dd28ad4-2373-468b-915a-c2219c15a694/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T132601Z&X-Amz-Expires=86400&X-Amz-Signature=86a06973617ba582269890926259a48d71d25a6f24fc215a4e7d5d6458ebbbc2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### var e let
- Valores que podem ser modificados ao longo do ciclo de vida do código

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bc09a3ec-f46b-41d1-abdd-d61c6ed85e23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T132856Z&X-Amz-Expires=86400&X-Amz-Signature=5df73ab5d0a9a6cc9ee542922066f0f2013feaa5ad9cc99ae32398086f844388&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


#### var
- Tem escopo global
- Não é recomendado usar, pois pode afetar toda sua aplicação
- Pode redeclarar e reatribuir

#### let
- Tem escopo de bloco
- Recomendado usar, pois pode ser alterada sem afetar sua aplicação toda.
- Não pode redeclarar, mas pode reatribuir.

Exemplo
- Podemos ver o comportamento dos escopos do var (global) e let (bloco)
- O retorno é ``Pedro Souza``.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ebdd0c8c-49ab-4a42-9d36-2b1318e57802/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T135931Z&X-Amz-Expires=86400&X-Amz-Signature=d4fb5769528e3cd4ea2f5b6ae272f54b2a53063d45ce5d86f6b5e7c8e5e260c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**Redeclaração x Reatribuição**

Exemplo 1

```js
var x = 10; // Declaração
var x = 12 // Redeclaração

x = 15 // Atribuição
x = 18 // Reatribuição

```



### Hoisting
Atribuir valor a uma variável antes de declará-la.
- Quando temos uma variável global
- Hoisting vem do inglês **Elevação**

### Exemplo
```js
numberOne = 1;

console.log(numberOne + 2)

var numberOne
```

- Temos como output, o resultado 3.
- Quando não declaramos com variáveis ou constante, o javascript supõe que é uma variável de escopo global

### Exemplo 2

```js
numberOne = 1;

console.log(numberOne + 2)

let numberOne
```

- Aqui aparece um erro dizendo: "Não é possível acessar antes da inicialização"
- No outro exemplo, quando temos uma variável global ou tem um var, ele leva para cima a variável, para o início do código
- Com o let, não é possível fazer essa elevação. É preciso declarar antes.

## Constantes
- Declara em ``SNAKE_UPPER_CASE``
- No meu caso uso o ``camelCase``
- Não pode reatribuir, nem redeclarar.
- O valor que ela foi inicializada é o que vai ficar para sempre.
- Escopo de bloco.
- Não faz hoisting;

```js
const DAYS_IN_A_WEEK = 7
const myName = 'Pedro'
```

## let, var e const

<img width=500px src="https://miro.medium.com/max/1400/1*TblJQp4DJ6XmVzHJ5X6Zmw.png">

## Referências para estudar

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0c8b9ccb-1752-4c3a-85a7-32ac7d67f814/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T140958Z&X-Amz-Expires=86400&X-Amz-Signature=c1e2041511cf346498162198dcfdd299d3742165682eacbd286725293a6d4632&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Tipos



## Estrutura de dados

### Objetivo

1. Apresentar as princiapis estruturas de dados do Javascript e seus principais métodos

### Tipagem dinâmica
Javascript é uma linguagem de tipagem dinâmica, não precisamos declarar o tipo de dado antes da variável.
- Antes de declarar um valor, não precisamos especificar o tipo dele.
- Além disso podemos modificar o tipo de dados da mesma variável.

#### ``typeof variavel`` 
- Vemos qual tipo da variável no Javascript.

### Tipos de dados

#### Primitivos
- Não guardam métodos dentro deles, apenas valores.

#### Não Primitivos
- Podem guardar métodos e valores.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1db18fc5-d1fd-4b9c-826a-f994e21c1259/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T141414Z&X-Amz-Expires=86400&X-Amz-Signature=96476f9793070e0b71a8f66ec6292f637df4e457b81630b9929bf49604e050cc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


## Strings
São textos, frases e trabalhamos com caracteres dentro do texto.
- Declarados entre aspas ou crases para usarmos variáveis dentro da String(template strings)
- Podemos usar métodos para realizar diversas operações dentro da String

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/57786513-4f87-4517-8fc8-f94d56793194/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T141634Z&X-Amz-Expires=86400&X-Amz-Signature=1b989e6ccc173a148f4b406b1aeea0211eb06b472d4ca4b21a65ba6138208d9d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Alguns métodos de String

#### Concatenação de Strings
```js
    let firstName = 'Pedro'
    let lastName = 'Henrique'

    firstName.concat(lastName) // Método

    concatenado = firstName + " " + lastName

    concatenado = firstName + "\n " + lastName

```

**Template Strings**

```js
    let firstName = 'Pedro'
    let lastName = 'Henrique'

    concatenado = `${firstName} ${lastName}`
    
    // -> Retorno Pedro Henrique
```

#### Tamanho de Strings

```js
let firstName = 'Pedro'
    firstName.length

    // -> O retorno é 5
```

#### Transformando String em Objeto
- Temos um objeto com todos os métodos que podemos usar dentro de uma string

```js
    let exemplo = new String('oioi')
```

#### Buscando o índice
- Índice começa do 0
- Tamanho começa do 1

```js
   let nome = 'Pedro'
   Pedro[1]

   // -> O retorno é "e"
```

#### Separando a frase
- Usamos o método ``split`` 
- O retorno é uma lista, onde cada índice depende do que passamos dentro do método.

```js
   let nome = 'Pedro, tudo bem?'
   nome.split("")

```

OBS: 
- Se quisermos printar aspas, basta escaparmos colocando é **\** ou definindo com aspas simples `` ' " '`` nossa string

### Documentação
- [MDN - Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods)


## Numbers
- Números inteiros ou decimais

### Objeto Math
- Permite usar mais termos matemáticos, como potência, raiz quadrada, PI etc.
- É um objeto javascript, por isso usamos a **notação ponto** para acessar seus métodos.

Alguns métodos:
- Math.pi
- Math.floor()
    - Arrendondar para cima
- Math.ceil()
    - Arrendondar para baixo
- Math.random()

OBS.: Como parâmetro passamos a nossa variável.

### Documentação

- [MDN - Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Boolenas
True or False.
- **``!variavel``** significa o valor contrário, não necessariamente falso.

### Tabela Truthy

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c0ea32d1-c43b-41bb-a7e1-270b8b8abcb3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T144121Z&X-Amz-Expires=86400&X-Amz-Signature=5575618c3faef0161793bd63fe916babb9b6a57b005e1a7f90ffa10161d742d2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Tabela Falsy

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/486bb139-35f5-45ee-a8cc-76e95ad2f94d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T144219Z&X-Amz-Expires=86400&X-Amz-Signature=a3c7597d230c0b2b49de80fd858ef18908fd43eef89cf21a4b514cae91adbb12&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


### Documentação

- [MDN - Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Arrays
Lista iterável de elementos

### Index
- O Index sempre começa no 0.

[imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91555246-65fe-4f19-ae73-ad5856e85abc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T144326Z&X-Amz-Expires=86400&X-Amz-Signature=3d015bd571b45ea5a0cfe8ed47f4c9f0dffcdee60333fd23b5f220b47088e25b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Declaração e métodos

```js
    let array = []

// Adicionar um elemento no Array
    array.push(3) 

// Remover um elemento do final do Array
    array.pop()

// Remover um elemento do início do Array
    array.shift()

// Adiciona um elemento no início do Array
  array.unshift(1)
```

### Principais
- Iremos aprender na parte de funções os métodos principais que iremos utilizar no cotidiano.
    - ``Map, filter, reduce, forEach...``

### Documentação
- [MDN - Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Objetos
Estrutura de dados do tipo **chave** e **valor**
- Engloba métodos e valores.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/016733d5-7ae5-4e01-bbab-98a0cb43eb06/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T144948Z&X-Amz-Expires=86400&X-Amz-Signature=b9e22a358e37c0fe20db51b0a2e91d1059dc433f786b62951b2d4f42a2fdb257&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Declaração e métodos

### Primeira forma de declarar objetos
```js
   let obj = {}

   // Criando uma chave e propriedade
   obj.name = "Pedro"
   obj.age = "23"
```

### Segunda forma de declarar objetos

```js
   let person = {
       name: "Pedro",
       age: "23"
   }
```

### Notação ponto
- Podemos acessar as chaves e valores usando a notação ponto
    - ``Objeto.chave``

### Chaves
- Podemos acessar também as chaves e valores usando colchetes
    - ``Objeto["chave"]``

### Modificando valor de uma chave
```js
   person[mom] = "Renata"
```

### Documentação
- [MDN - Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Objects)

## Empty, undefined e null
- Retornam como falso.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11946385-9f3d-434e-b317-b975dc2454b7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T145601Z&X-Amz-Expires=86400&X-Amz-Signature=cf2ad9d0f57b62dc23ca120745451de1a4aa3ff4116c4a13653034029d3654c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Empty
- Declarou a variável, mas com valor vazio
- Não tem nenhum valor dentro.

### Null
- A variável não foi inicializada.

### Undefined
- O valor não existe.
- Não foi declarada a variável.

### Documentação
- [Empty](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/Empty)
- [Null](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null)
- [Undefined](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Referências para Estudar

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1bf098e-a819-4e33-8a6d-6d5fbe479b60/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T150134Z&X-Amz-Expires=86400&X-Amz-Signature=ebacb7c10e76600fba694d158ffa070af6bd3f35485ef5f59305b50481fc4631&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Atividade prática