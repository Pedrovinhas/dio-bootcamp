# Tipos de erros

## Apresentação do curso

1. Mostra como lidar com erros e exceções

2. Ensinar como criar o próprio erro personalizado

## Referências
- [MDN Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)

## ECMAScript Error e DOMException

### Objetivos
1. Apresentar o objeto Error do ECMAScript

2. Apresentar a DOMExcepetion (erros de exceção)

### ECMAScript Error
- Erros que ocorrem em tempo de execução

Composto por
- Mensagem
- Nome
- Linha
- Call Stack

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4cdc021-f8c5-4892-81d2-6eb727f91674/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T014903Z&X-Amz-Expires=86400&X-Amz-Signature=64348c7518bd0b84f6bbf5dcdd8571dfaacbc165a1e27c0e876033ca6bbcefd1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### DOMException
- Erros que acontecem no DOM, relacionados aos erros do nosso código na página da WEB

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/66d6c286-0803-4f7a-a235-5b0a51730708/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T014959Z&X-Amz-Expires=86400&X-Amz-Signature=1dd1a36ced589679cf84c5ac01f0a1a36da1399d59f97edf40280b178c69480a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Tratando erros

## Throw, Try/Catch e Finally

### Objetivos
1. Explicar a diferença entre ``throw`` e ``return``
2. Apresentar a implementação da declaração ``try/catch``

### Throw
- Podemos **jogar** um erro em tela que nós próprios definimos, dizendo todas as propriedades do nosso erro, diferente do ``return`` que retorna um valor.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b523b74e-571a-4cc4-a12f-1b035717a22d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015218Z&X-Amz-Expires=86400&X-Amz-Signature=ee3e9fb9777d04643d0d6807a01b72496436632f8298e11c2a61c5b907173899&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


### Try..catch
- Dentro do ``try`` verificamos um pedaço de código e se tiver um erro, ele será capturado na função ``catch`` e podemos manipular o erro dentro dela.

#### Exemplo 1
![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c32104d0-0545-45f5-af08-7a26a0daebef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015408Z&X-Amz-Expires=86400&X-Amz-Signature=bdf46e289ab733f4e093b3bd06dd0013ad5251532e1c88f0d469e533b76b265a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Exemplo 2

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c7bd7bf-9201-4e0a-8c9c-4819b653341f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015516Z&X-Amz-Expires=86400&X-Amz-Signature=5e84edf6f7202b3368349fc3bef0844265ea08e1ac412854842dbfd0acb347d7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Finally
- O ``finally`` é uma instrução que vai ser chamada, independente de ter o erro ou não.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4701adc7-22c7-451e-8641-16d68202af31/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015541Z&X-Amz-Expires=86400&X-Amz-Signature=fe9526778fe715bb5efc8c31cf4d30ed4e8837e766e091f1271580e4be15dafc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Criando erros

## O objeto Error

### Objetivos

1. Explicar como manipular o objeto Error

### O que é?
- Objeto que já vem do JS e que podemos colocar métodos e propriedades dentro dele.
- Recomendado usar apenas em casos de uso específicos que o javascript não trate.

#### Código
- Todos os parâmetros são opcionais, normalmente usamos apenas a ``message``

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c189d6e9-a6ab-45ef-a448-bf3822c0a275/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015730Z&X-Amz-Expires=86400&X-Amz-Signature=6220b7808f5ef68de9071ca7cbbce36181ce872b2adec3e17393e3df5a05849b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Resultado

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/41545ff5-90c4-46df-b8d0-bc3b866109e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015751Z&X-Amz-Expires=86400&X-Amz-Signature=caa3bedef53aa1fa22b5780b7d59bd0c452df3f32245b718ef7b781a147abd43&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Dando nome ao objeto Error
- Podemos personalizar o nome do objeto do Error.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/572356c4-7822-4524-8069-6a95be996ba2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015847Z&X-Amz-Expires=86400&X-Amz-Signature=051d2cff451ec505194147e39bf40f702ce8c3420fcd791718a247e78ce4f4dd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Testando o Error no console

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26cd69b2-6813-4bd9-8427-093c5290c505/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T015915Z&X-Amz-Expires=86400&X-Amz-Signature=40d2172044dafd0956791599896f46e9a0a4dad6e0d1aba2b75fde12182fae80&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Atividade prática

### Objetivo
O objetivo é que a função recebe um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário um erro será lançado.

### Passo a passo
1. Crie uma função que recebe um array e um número
2. Realize as seguintes validações
    - Se os parâmetros não forem enviados, lance um erro do tipo ``ReferenceError``
    - Se o array não for do tipo ``object``, lance um erro do tipo `TypeError`
    - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
3. Utilize a declaração `try...catch`
4. Filtre as chamadas de `catch` por cada tipo de erro utilizando o operator `instanceOf`

### Resolução
```js
    
    function validate(arr, num) {

        try {
        !arr && !num ? throw new ReferenceError("Envie os parâmetros") : ''
        
        typeof arr !== 'object' ? throw new TypeError('O Array precisa ser do tipo Object.'): ''

        typeof number !== 'number' ? throw new TypeError('O Number precisa ser do tipo number.'): ''

        arr.length !== num ? throw new RangeError('Tamanho inválido') : ''

        return arr

        } 
        catch(e) {
            if (e instanceof ReferenceError) {
                console.log('Este erro é um ReferenceError')
                console.log(e.message)
            } else if (e instanceof TypeError) {
                console.log('Este erro é um TypeError')
                 console.log(e.message)
            } else if (e instanceof RangeError) {
                console.log('Este erro é um RangeError')
                console.log(e.message)
        } else {
            console.log('Tipo de erro não esperado:' + e)
        }
    }

    console.log(validate())

```

