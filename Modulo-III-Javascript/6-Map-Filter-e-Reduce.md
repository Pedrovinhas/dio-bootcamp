# Map

## Apresentação do Curso
Métodos utilizados para tratar **listas/array** no Javascript

### Objetivo
1. Conhecer a implementação do método map
2. Demonstrar a utilização de três métodos importantes para Arrays

## O que é, Sintaxe e Map vs forEach

### O que é?

1. Cria um novo array
2. Não modifica o array original!
3. Realiza as operações em ordem (do índice 0 ao último)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c7f5622-fb11-4790-b25e-f9af281db7b4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T220716Z&X-Amz-Expires=86400&X-Amz-Signature=5e77a762d0039ca8f72ec2e8773de353059864270a034e4afb2eeff7c70afc73&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Sintaxe
- Recebe dois parâmetros, um a ``callback`` e outro ``thisArg``

#### Callback
- Função a ser executada em cada elemento
- Temos acesso ao **item** que vamos modificar, o **index** do item e ao **array original**.

#### thisArg (opcional)
- Valor de ‘this’ dentro da função de callback
- Muito pouco usado!

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/76d441e7-5180-4d0a-a17c-552e138f4e30/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T220932Z&X-Amz-Expires=86400&X-Amz-Signature=614c38a440c11ad8b06ac4779d5e2cf078cd60a3d953559e2f31ba5286db5988&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Map vs forEach

- Valor de retorno
    - no map não modificamos o valor original e geramos um novo array.
    - no forEach precisamos armazenar nosso retorno em uma constante ou variável para utilizarmos, se não temos retorno ``undefined``
- Considere se o array auxiliar será necessário

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2846bbfa-fa2f-4d02-8cec-78fc1c43922e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T221051Z&X-Amz-Expires=86400&X-Amz-Signature=2292f6a98aae8e0382cb1d10c99f716b06e1fb75ca74fe62e76adb9e1479a6c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Filter

## Filter e Sintaxe

### Objetivos
1. Conhecer a aplicação do método filter

### O que é?
- Coloca o array dentro de um filtro, e os itens que corresponderem a determinada condição vão ser retornados num novo array.
    -Cria um novo array
    - Não modifica o array original

### Parâmetros

#### Callback
- Função a ser executada em cada elemento

#### thisArg (opcional)
- Valor de ‘this’ dentro da função de callback

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a941a96-ec77-4e4c-87f6-e89d62a9af40/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T002142Z&X-Amz-Expires=86400&X-Amz-Signature=87b0a0aba9371ea27df1e05e1d124b362c069a13d956359b634abfb0266c3776&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Exemplo
- Podemos dar qualquer nome para nosso item.
- Podemos usar métodos referentes a Strings.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/061f5aee-0157-4d2d-a8ae-0f24bc893f2c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T002111Z&X-Amz-Expires=86400&X-Amz-Signature=9b7e028adb3c85bcd50d7159fa234fd64b523abbfc6e8d28aa612e41517eca22&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Reduce

## Reduce e Sintaxe

### Objetivos

1. Conhecer a implementação do método reduce.

### O que é?
- Executa uma função em todos os elementos do array, retornando um **valor único**
- Pode ser **qualquer tipo de dado** de retorno.
- Não precisamos passar todos os parâmetros do ``reduce``

### Sintaxe

#### Callback
- Função a ser executada a partir do acumulador
    - Callback é chamada toda vez que executa uma função

#### initialValue
- Valor sobre o qual o retorno final irá atuar
    - É dispensável

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b33b003-96f7-4c6e-998d-a689ecff3ea7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T002455Z&X-Amz-Expires=86400&X-Amz-Signature=cdea2c4c02c54e0c47791be4e50045cd4b1d9efebae0b01b931f590fac8bef85&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### accumulator/prevValue
- Acumulador de todas as chamadas de callbackFn

#### currentValue
- Elemento atual sendo acessado pela função

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/72f56319-1534-47b4-8893-118697eeb1a2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T002513Z&X-Amz-Expires=86400&X-Amz-Signature=7cde044f44214d17bd0a2264d108e8ae2ba34415e82e03a8f4c0189e689bef61&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### use cases
- Somar o valor de um array.

# Colocando em prática

## Prática com Map

1. Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro ``this`` de um objeto criado por você, e depois sem ele

- Em todos as práticas o nosso array original fica intacto.

### Resolução com This

```js

const bills = {
    value: 2
}

function mapThis (arr, thisArg) {
    return arr.map(item => {
        return item * this.value
    }, thisArg)
}

const numbers = [1, 2]

console.log(mapThis(numbers, bills))

```

### Resolução com Arrow Function

```js

function map (arr) {
    return arr.map(item => {
        return item * 2
    })
}

const numbers = [1, 2, 4, 5, 6]

console.log(map(numbers))

```

## Prática com Filter

1. Filtre e retorne todos os números pares de um array

### Resolução

```js

function evenNumbers(arr) {
    return arr.filter(item => {
        return item % 2 === 0
    })
}

const numbers = [2, 3, 4, 6, 8, 7]

console.log(evenNumbers(numbers))

```

## Prática com Reduce

1. Some todos os números do array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
3. Calcule qual será o saldo final após subtrair todos os preços da lista enviada

### Resolução
- Não vamos mudar o valor inicial
- Toda vez que a callback roda, define o novo valor do ``previous``

```js

function addNumbers(arr) {
    arr.reduce((prev, current) => {
        console.log({prev, current})
        return prev + current
    } /* 0 */ )
}

const arr = [1, 2]

```
![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f787cb62-a9f5-4cbb-b914-9187115f1da1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T011836Z&X-Amz-Expires=86400&X-Amz-Signature=39219149cfbe8c752e5932fc9f5c54f98a48db56aecb0208b0ce5de6c747239e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


### Resolução 2

```js

const marketList = [
    {
        name: 'Pão',
        value: 30
    }, 
    {
        name: 'Salame',
        value: 15
    },
    {
        name: 'Queijo',
        value: 10
    }
]

const money = 100

function finalValue (money, marketList) {
    return marketList.reduce((prev, current, index) => {
        console.log('Turno', index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, money)
}

console.log(finalValue(money, marketList))

```

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/075aa71f-5027-49b8-b61b-18b4938000d1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T011822Z&X-Amz-Expires=86400&X-Amz-Signature=00d67067fc4fbd022a4e02d3fc22e4edfa82c91d2db3fc026092eecb8979291b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)