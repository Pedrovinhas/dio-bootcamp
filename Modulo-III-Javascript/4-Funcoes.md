# Tipos de função

## Apresentação do curso

1. Mostrar como declarar funções
2. COmo manipular parâmetros
3. Apresentar loops e outras declarações
4. Apresentar o argumento ``this``

## Estrutura e função anônima

### Objetivos

1. Apresentar a estrutura de uma função

2. Alguns outros tipos de funções e como são utilizadas

### Estrutura
- Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela

```js
    function nome(parametros){
        // Instruções
    }

```

#### Return

- Quando invocamos o ``return``, a função para de ser executada e vai retornar que vem após dele.
- Pode retornar valor ou não.
- Esse valor podemos usar em outras funções e em outras operações, como no nosso exercício

```js
    function nome(parametros){
        // Instruções
        return // Valor de retorno
    }

```

### Função anônima
- Uma variável pode armazenar uma função dentro dela.

```js
const soma = function (a, b) {
    return a + b
}

soma(1,2) // 3

```

## Função autoinvoked e Callbacks

### Função autoinvoked ou IIFE (Immediately Invoked Function Expression)
- Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada
    - Alguns método de tempo, como setTimeOut() é um exemplo prático

```js
    (
        function() {
            let name = 'DIO'
            return name;
        }
    )()

    // DIO
```

- Também pode ser utilizada com parâmetros ou armazenada em uma variável

```js
    (
        function(a,b) {
            return a + b
        }
    )(1, 2)

    // 3

    const soma3 = (
        function() {
            return a + b
        }
    ) (1,2)
    console.log(soma3) // 3
```

### Callback
- Uma função passada como argumento para outra
- Utilizando callbacks, você tem maior controle da ordem de chamadas/execução da função.

```js
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1, num2) {
    return num1 + num2
}

const sub = function(num1, num2){
    return num1 - num2
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2)

console.log(resultSoma) // 3
console.log(resultSub) // -1
```


# Parâmetros

## Valores padrão e Objeto "arguments"

### Objetivos

1. Ensinar como manipular parâmetros de uma função

2. Técnica para lidar com números indefinidos de parâmetros.

### Pré-ES2015

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3872f6f1-a328-461d-be87-b6d70c0f2e37/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T204923Z&X-Amz-Expires=86400&X-Amz-Signature=f71d77d4a8aad7f0213f651735def36d614db45ae770cc17cd460e80a60c1b7b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Pós-ES2015
- Definição do valor default, caso o parâmetro não exista.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/498894f2-df9b-40e2-ace3-0f5817ca8182/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T204939Z&X-Amz-Expires=86400&X-Amz-Signature=1c50d4dec3fd845d4d82a6fc0674aa897ade5508cab3ec782f865c2eae7c6e9e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Objetos arguments
- É um array com todos os parâmetros passados quando a função foi invocada.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7926c25f-ac90-4f72-8c67-c63615640274/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T205043Z&X-Amz-Expires=86400&X-Amz-Signature=400039294d1229af13e6a7b81532d5aa7cc18d76e9f4acd4aa083ac980c5abb2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Objeto Iterável

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04ccc59e-7cb5-411d-833e-a90760935762/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T205145Z&X-Amz-Expires=86400&X-Amz-Signature=5557c834229619e95aa600a439d001166157cc032fabae518dbcec07fd9d5e37&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Arrays e Objetos

### Spread 🎉
- É uma forma de lidar separadamente com elementos.
- O que era parte de um array se torna um elemento independente.
- Usamos quando estamos chamando a função

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/753d7083-c973-4c22-a6e7-0159c10fc90b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T205333Z&X-Amz-Expires=86400&X-Amz-Signature=719c40bfbe2effea89a196c3961b73bee26b2971af1e67df7588242eff045da7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Rest
- Combina os argumentos em um array.
- O que era um elemento independente se torna parte de um array
- Usamos quando estamos declarando a função

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afd60776-d9e9-4ddc-af9b-29f82bbcd6d6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T205427Z&X-Amz-Expires=86400&X-Amz-Signature=1a2b6837ac793baa4cd532db482bd22f0e610fb9bd381e3190837e74a0b4d03c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Object Destructuring

- Entre chaves ``{}`` podemos filtrar apenas os dados que nos interessam em um objeto
    - Usado muito em **React**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6535585c-a091-4862-8915-201dfee6c8fa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T205552Z&X-Amz-Expires=86400&X-Amz-Signature=2bd8cee0c047e2b4a141b6d20da1333edb1d5dc999dd7d22cc49fad430ce8fb0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Loops

## If/else e Switch

### Objetivos

1. Ensinar como utilizar algumas das mais famosas declarações da Javascript

### Estrutura do If/else

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e720c429-5133-4948-a087-71a24102a2d1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153052Z&X-Amz-Expires=86400&X-Amz-Signature=f33f72c30fbc85524b5f120b4ea39786f26b8097ad781d7068805ee71e87d11f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 1

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/821b1086-5fb7-4b89-9d02-ea6f141d1ec2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153125Z&X-Amz-Expires=86400&X-Amz-Signature=3bee05e96109989ec58e8348715aa09ad7d9c594583f4953ced3b94cf0d8b708&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 2

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20cd5a19-2212-44c6-b8a9-20d6aafa1712/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153155Z&X-Amz-Expires=86400&X-Amz-Signature=ebcba6be9465ac144d2177f510a3e77012543990c7f0c9ef3eb785cc0d979628&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 3

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8e5ea6c7-d7f9-46dc-8ea6-c2ea6371b4ef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153210Z&X-Amz-Expires=86400&X-Amz-Signature=767a722b71d0a7d784631609b2d80526207d4edf4216557ce6eb158eb6eb2ce7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


### Aninhando If/else
- Javascript não elseif, as palavras sempre estão espaçadas

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5297755-5b20-4023-a8e5-2517c1bb9163/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153015Z&X-Amz-Expires=86400&X-Amz-Signature=5b56362a461216ac65795c5443ea2c9e3f585a02f8c059aa6b362c9770d76343&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Switch/case
- Equivale a uma comparação de tipo e valor (``===``)
- Sempre precisa de um valor ``default``, quando não cumpre nenhuma das condições.
- Ideal para quando se precisa comparar muitos valores

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13239ca3-3097-40b2-8478-81cf02a639b2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153334Z&X-Amz-Expires=86400&X-Amz-Signature=1af9e69a4f5d53d818a0cfb290fd6c3443569778261fb5ec173235d3b416aba4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## For e While

### For
- Loop dentro de elementos iteráveis (arrays, strings)
- Temos ``i`` que é uma variável de iteração.

#### Exemplo
- Nesse exemplo sempre que nosso iterador for menor que o tamanho do array, ele vai multiplicar os número do índice por dois e adicionar no array com o método ``push``

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8de00c17-7e8b-43de-b2a9-54277bf30dcc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T153648Z&X-Amz-Expires=86400&X-Amz-Signature=1b0a27a4af3bce8f69522bca215a477f951f193c7ea518cd3b3e25b7e4a7eee1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### For... in
- Loop entre propriedades enumeráveis de um objeto
- Retorna cada propriedade de um objeto.

#### Exemplo 1

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe5bd8e5-0ccf-4cc8-8201-d7dac6bb3108/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154006Z&X-Amz-Expires=86400&X-Amz-Signature=cf37aba965deac07ce2ef3967e0efafe19decf45fe89aeb348be4f1a338cb6d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 2
- Printando o dado do objeto com colchetes.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1847632-9120-459a-b559-fe0f34ae71da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154029Z&X-Amz-Expires=86400&X-Amz-Signature=a199b261da9da7135c8dd8214000b3074def47924a9359f4d0d120a12c3209e0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### For...of
- Loop entre estruturas iteráveis como arrays e strings
- Retorna cada valor dos índices de um array.

#### Exemplo com String
- Retorna cada letra da String
    - Lembrando que podemos ver String como um array, onde cada caractere é um índice desse array.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1847632-9120-459a-b559-fe0f34ae71da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154029Z&X-Amz-Expires=86400&X-Amz-Signature=a199b261da9da7135c8dd8214000b3074def47924a9359f4d0d120a12c3209e0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


#### Exemplo com Array
- Retorna cada índice do Array.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2937b14-8abf-495b-8a08-6f78946b5b6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154249Z&X-Amz-Expires=86400&X-Amz-Signature=b3c70ddd1dd8052aac850bd8fcfc0ce03128604239ec6d0295b6469fa61a452e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### While
- Executa instruções até que a condição se torne **falsa**
- Significa enquanto

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e9bd305a-fc4a-47ed-ae73-8154939bfcd5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154403Z&X-Amz-Expires=86400&X-Amz-Signature=ec645c7b76975ec107615cb9e379074667c0b960b194cdf9699cf0ae5a568e40&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Do While
- Executa instruções até que a condição se torne falsa.
- Porém a primeira execução sempre ocorre.

#### Exemplo 1

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e9bd305a-fc4a-47ed-ae73-8154939bfcd5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154403Z&X-Amz-Expires=86400&X-Amz-Signature=ec645c7b76975ec107615cb9e379074667c0b960b194cdf9699cf0ae5a568e40&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 2

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1fb5bf29-81ea-44f5-bd2e-36e21ddc623f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154538Z&X-Amz-Expires=86400&X-Amz-Signature=124b2d0e18e6cb09fcd3c2840cd8168ac42599165ce440180f83a5500f29b092&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# This

## O que é this

### Objetivo

1. Apresentar a palavara ``this`` e seu uso

2. Como aplicar métodos para manipular seu valor

### This: o que é?
- A palavra reservada this é uma referência de contexto
- No exemplo, this refere-se ao objeto pessoa.
- **Sempre que uma função está dentro de um objeto, ela é chamada de método**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3f5c6c3a-96fc-4ca5-92af-eae1c26add31/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154757Z&X-Amz-Expires=86400&X-Amz-Signature=699bcf99eac844e11a4b7cdb65808b25e65f10c3609603fe5d9d5300d25e2bae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Seu valor pode mudar de acordo com o lugar no código onde foi chamada

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6a746cd9-b68d-4768-aa1f-41a26ec61aee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T154905Z&X-Amz-Expires=86400&X-Amz-Signature=ac56e637953b55a3c95812827c49a1319e24be3eab1c4ef41bed23a9790e528a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Exemplos

#### Fora de função

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7f60cec4-0b95-4251-adfc-25056abf7256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155133Z&X-Amz-Expires=86400&X-Amz-Signature=f749c829a9054deeab04767f5d1e1f27453eba71cf35abaa5aee833ad2e75761&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Dentro de uma função

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8e8a912b-a015-4acd-abba-acb13d55cfe3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155155Z&X-Amz-Expires=86400&X-Amz-Signature=5f8d2965c7691110eb4be9587e7417b37f51b6b72d59e8a14a73d98d4bf891c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### No navegador

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d0cc6a6-87ca-46cf-9bb7-e41cc669ce74/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155208Z&X-Amz-Expires=86400&X-Amz-Signature=a00e65a6452177860f4533ffe2f940ef9e53d437c15f5c7c784d1769a052c05e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Dentro de um objeto

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e1a8a501-56a3-481d-81b4-74c587f22e74/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155210Z&X-Amz-Expires=86400&X-Amz-Signature=091bb43e700d73fe6b5b57ed5afdf1b104ec36458bfdc5a703b481a19f454934&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Em um evento no HTML

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83a3d478-b2d9-4459-a245-da73cf2fb4dc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155213Z&X-Amz-Expires=86400&X-Amz-Signature=81b69767cfc182085f64722b5244f16f768de5aa474f7caa94b0e5d29db24a4c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


## Manipulando seu valor

### Call
- Passamos o objeto que queremos que o ``this`` se refira.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/96be1594-d325-4075-ab26-ebd430ad612a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155427Z&X-Amz-Expires=86400&X-Amz-Signature=1db7814b6ecce64c8704ecb2abd1a017aeedf342a00f1e31a0aad5f39ca036e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/78db6114-85f0-4da2-89e2-eb69b7083840/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155435Z&X-Amz-Expires=86400&X-Amz-Signature=8695a62d3a4b20dd4fab8006aad62c9ba60ae6bdeda2303679aef0fc13cad359&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Passando argumentos no call
- É possível passar argumentos para essa função separando-os por vírgula

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/32477011-3c17-4df8-8472-12c0a993b66f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155517Z&X-Amz-Expires=86400&X-Amz-Signature=b52f213d7f4b25a49252d791d87d99ff0b8c6ffa3b5cc80b2c86ecbdf990dba6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Apply

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/97d6321a-a9af-4715-8e32-a84f577c6d5f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155646Z&X-Amz-Expires=86400&X-Amz-Signature=b11955aea19bac587590061be4a40c10418031cfb27cd89c0f5ba2cb563b56b1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4872490-99a8-443d-ab28-ca2ac675a5a4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155649Z&X-Amz-Expires=86400&X-Amz-Signature=81cbc0002b79be63df63ea12d2d2dc25dfca437132136d65fcee5ca58181d8d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Passando argumentos no Apply
- É possível passar argumento para essa função dentro de um array.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1244d5c-ed07-4a68-bba6-52b540ed28e3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155720Z&X-Amz-Expires=86400&X-Amz-Signature=193e16bd778716e6ef362ef1d985f0f4859af42db0d34cb133acbe2cbb76abf0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Bind
- Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3917ad0-3739-40d6-91af-439bef5de58e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T155821Z&X-Amz-Expires=86400&X-Amz-Signature=47cefec6554da6fb3a2ae22bf61a8b1695005515e73c526174cec6c8930bdef0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


# Arrow function

### Objetivos

1. Apresentar a sintaxe da arrow function

### Sintaxe

#### Função normal

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f65f3511-368f-4c56-b080-5a465abb9ffa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195512Z&X-Amz-Expires=86400&X-Amz-Signature=da22b9f57ea6002c44663f719b7486a1c5b456f32e21954c130d5cb7e29c09f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Arrow function

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/27e7d534-6bfd-41c5-95a6-44e3950297e2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195524Z&X-Amz-Expires=86400&X-Amz-Signature=49a56b0120f9207d060168241306a9767fa2c6f47345c7e7b6e6388ba6f9c887&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Arrow function com apenas um retorno

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8787cfe4-8adf-47f0-89fd-4e49f5401b13/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195535Z&X-Amz-Expires=86400&X-Amz-Signature=942960c2247b1612c59c1ff72a23c6314f6b0187fad43943b10af2680b93ace2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Arrow function e retornos
- Caso exista apenas uma linha, pode dispensar as chaves e o return.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ce93dc68-d528-43fa-a521-27b627c0c1a9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195819Z&X-Amz-Expires=86400&X-Amz-Signature=63afb6e055561c5f18dbefb2b6811783b5c41807dc43b48384c9c6ba8de097e2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Caso exista apenas um parâmetro, pode dispensar os parênteses

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b91af4c-e4e9-41d6-a6ba-2c4e0ee58cef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195814Z&X-Amz-Expires=86400&X-Amz-Signature=6971e3eee225c026396767ce8c0c26bf83651e62c0b3af0883ca1b7ca5af38f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Arrow Function não faz Hoisting

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b58debb-9c29-4206-9889-969bf0d7e4e2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T195801Z&X-Amz-Expires=86400&X-Amz-Signature=6974e47609d6c6daa8baac80890f8e2fbce6dc639fcb04ce25780764f826ba74&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Outras restrições
- ``this`` sempre será o objeto global, métodos para modificar seu não irão funcionar
- Não existe o objeto ``arguments``
- O constructor (``new MeuObjeto()``) também não pode ser utilizado


## Atividade prática

### Atividade 1: Alunos aprovados
1. Crie uma função que recebe o array alunos e um número que irá representar a média final.
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final.
3. Utiliza a técnica **object destructuring** para manipular as propriedades desejadas de cada aluno

#### Resolução
```js

const students = [
    {
        name: 'Pedro',
        note: '8'
    },
    {
        name: 'Flávia',
        note: '10'
    },
    {
        name: 'Ernesto',
        note: '3'
    }

]

function aproveStudents (arr, media) {
    let studentsAproved = []

    for(i = 0; i < arr.length; i++) {

        const {name, note} = arr[i];

        if (note >= media) {
            studentsAproved.push(name)
        } 
    }

    return studentsAproved
}

console.log(aproveStudents(students, 7))
```


### Atividade 2: This
1. Dada a função ``calculaIdade``, utilize os métodos ``call`` e ``apply`` para modificar o valor de this.
2. Crie seus próprios objetos para esta atividade.

```js
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

 const pessoa = {
        nome: 'Pedro',
        idade: 23
    }

console.log(calculaIdade.call(pessoa, 30))
console.log(calculaIdade.apply(pessoa, [50] ))

```