# Compreendendo Orientação a Objets

## Apresentação do Curso

### Objetivos

1. Explicar o conceito de POO (Paradigma de Orientação a Objetos)

2. Apresentar seus principais pilares

3. Explicar como o Javascript lida com esse paradigma

## Paradigmas e Pilares

### Objetivos

1. Apresentar alguns paradigmas da programação

2. Apresentar os pilares da Orientação a Objetos

### Paradigmas da Programação

#### Imperativo

- Como vamos resolver o problema, apenas declaramos

#### Declarativo

- Temos que dizer como vamos resolver os problemas, a ordem

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73f14020-b579-4a54-977d-510e721a1793/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T164813Z&X-Amz-Expires=86400&X-Amz-Signature=0518564ced5acddda410a64027fef203884ba82eab38088d29a6637b025d7720&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Características da Orientação a Objetos

- Os programas são objetos que possuem uma série de propriedades

#### Pilares

1.**Herança**
2.**Polimorfismo**
3.**Encapsulamento**
4.**Abstração**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/06b9d3f4-5d21-46e8-a373-6d71104e7fe1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T165031Z&X-Amz-Expires=86400&X-Amz-Signature=9c3f9fd0e01b542f8f8cd8899a84bfa2f40504673d0748757fe5f5eaeb9b8e93&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Abstração

- Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo
- Simplificar e generalizar cada vez mais.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee12fc2f-9689-48bd-b0cd-936c12185ec0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T165049Z&X-Amz-Expires=86400&X-Amz-Signature=d994e66937e05025cf2e7d8196ba457e105e492469575fa77c27a3632abb9020&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Herança

- Objeto filho herda propriedades e métodos do objeto pai

![imagem]()

### Encapsulamento

- Cada classe tem propriedades e métodos independetes do restante do código

![imagem]()

### Polimorfismo

- Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos

![imagem]()

# Orientação a Objetos em Javascript

## Protótipos e Classes

### Objetivos

1. Apresentar o conceito de protótipos e cadeia de protótipos
2. Apresentar a estrutura de classes em Javascript

### Protótipos

- Todos os objetos Javascript herdam propriedades e métodos de um `prototype`
- O objeto Object.prototype está no topo desta cadeia.
- Caso não tenha propriedade, busca no objeto ascendente até acabar a cadeia de protótipo e se não achar retorna `null`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/049bf225-072d-483b-8a0b-26ac12618c4d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T180720Z&X-Amz-Expires=86400&X-Amz-Signature=20779ed4d09b3067accf02e93326341ccc58c9172d5a51d87265eedbe6934459&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Cadeia de protótipos (prototype chain)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de6ce167-3168-493d-82e8-4647eaaa469d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T180740Z&X-Amz-Expires=86400&X-Amz-Signature=67fe1e9a7ca162d28e40861495db6cf123b8dfd049b8f0979f927de475382be0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Classes

- Javascript não possui classes nativamente
- Todas as classes são objetos e a herança se dá por protótipos.
- Utilizamos sempre objetos, objetos que tem herança.
- Hoje, a partir do ECMAScript 6 temos a adição de classes, mas que no fundo são objetos.
- ‼ Não é muito usado

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ad0f89b-85a8-4452-967e-b4abe760dd96/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T180935Z&X-Amz-Expires=86400&X-Amz-Signature=d042878c1ad5595da6e304002fed00a77c024f7a5c966556adf398650e31aff8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Syntatic sugar

- Uma sintaxe feita para facilitar a escrita.

#### Construtor, Getter e Setter

#### Construtor

- Inicia a classe e se passarmos parâmetros, atribui o valor dentro da classe

#### Get

- Busca o valor que queremos dentro da classe

#### Set

- Define um valor que queremos.

#### Super

- Ele passa os argumento enviados para a classe ascendente.

#### Métodos

- Podemos sobrescrever em cada classe

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b6bbbc8-dc69-43a0-8c6b-438617f2ad1a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T181018Z&X-Amz-Expires=86400&X-Amz-Signature=925dbd6306c9bea1bb41d507e85b81044943f6f2f73d1ef5cc72c2eb541fd938&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Atividade prática

### Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

### Resolução

```js

class ContaBancaria {
 constructor(agencia, numero, tipo) {
  this.agencia = agencia;
  this.numero = numero;
  this.tipo = tipo;
  this._saldo = 0;
 }

 sacar(valor) {
  if (valor > this._saldo) {
   return console.log('Saque negado; saldo insuficiente!');
  }

  this._saldo = this._saldo - valor;
  return this._saldo;
 }

 depositar(valor) {
  this._saldo = this._saldo + valor;
  return this._saldo;
 }

 set saldo(valor) {
  this._saldo = valor;
 }

 get saldo() {
  return this._saldo;
 }
}

class ContaCorrente extends ContaBancaria {
 constructor(agencia, numero, cartaoCredito) {
  super(agencia, numero);
  this.tipo = 'corrente';
  this._cartaoCredito = cartaoCredito;
 }

 set cartaoCredito(valor) {
  this._cartaoCredito = valor;
 }

 get cartaoCredito() {
  return this._cartaoCredito;
 }
}

class ContaPoupanca extends ContaBancaria {
 constructor(agencia, numero) {
  super(agencia, numero);
  this.tipo = 'poupança';
 }
}

class ContaUniversitaria extends ContaBancaria {
 constructor(agencia, numero) {
  super(agencia, numero);
  this.tipo = 'universitária';
 }

 sacar(valor) {
  if (valor > 500) {
   return 'Operação negada.';
  }

  this._saldo = this._saldo - valor;
  return this._saldo;
 }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);

```
