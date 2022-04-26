# Operadores

## Apresentação do curso

1. Operadores

2. Atividades prática

## Operadores

1. Conhecer os operadores mais populares tipos de operadores

### O que são?
São sinais que utilizamos para manipularmos certos valores ou validar uma condição
- Aritimética
- Atribuição
- Comparação
- Lógica
- Condicional

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b5b2fa5-41b0-4e6a-bb81-df0c1e7960ab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T003740Z&X-Amz-Expires=86400&X-Amz-Signature=6739cfa7941c089046756554eb3c6c4c43e969a6715da90f7dd627217e8abc5a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Operadores de Atribuição
- Atribui a variável a um valor.
    - Módulo retorna o resto da divisão entre dois números.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d0013bf0-78c5-4172-b93a-ce405fb2f7a7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T003754Z&X-Amz-Expires=86400&X-Amz-Signature=41e5a8f49ced4f772e9d281234d34bd9e84083dcae41ffb2a2cb20004d8b1ffd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Operadores de Aritmética

![Imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/657e135a-35c2-4668-ba65-3f7d600d9c68/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T122959Z&X-Amz-Expires=86400&X-Amz-Signature=7c479128a87f7d5acc6128de10ff878512ff2d4ab89f0d7d0687fb2360b60720&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Operadores de Comparação
- Podemos fazer comparação entre dois tipos de dados diferentes, pois o Javascript tem tipagem fraca.
- Usando três iguais, temos comparação de valor e tipo.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/788544a2-f88f-482c-af52-1a1b799d3a8e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T123032Z&X-Amz-Expires=86400&X-Amz-Signature=22097a61f4501f8afbc459a14a4ad46cae5f06f03b6581f89ff4510374ba3d76&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Operadores Lógicos
- No ``&&``, as duas afirmações precisam ser verdadeiras para sentença ser verdadeira.
- No ``||``, basta uma afirmação ser verdadeira para sentença ser verdadeira.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8c90e732-fcb4-4d1a-b5f2-494afd343988/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T123236Z&X-Amz-Expires=86400&X-Amz-Signature=58206c2c179c3534e3f9590d4625a028db8b171705441797733d9b971d587e8f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Operadores condicionais

**If Ternário**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1b1f326-d188-4ce1-b84b-50f08ac8b4f5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T123337Z&X-Amz-Expires=86400&X-Amz-Signature=caf0f785cdc69283510461b2c70e0b93235e0234b29632bd18c3c3a7124747e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Atividade prática

## Explicando a atividade
1. Crie uma função que recebe dois números como parâmetros
2. Confira se os números são iguais
3. Confira se a soma dos números é maior que 10 ou menor que 20
4. Retorne uma string dizendo 'Os números ``num1`` e ``num2`` não/são iguais. Sua soma é ``soma``, que é ``maior/menor`` que 10 e ``maior/menor`` que 20'.

### Exemplo

```
input: 1, 2
output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```

## Atividade prática

- Minha resolução para o desafio proposto

### Dicas
1. Escreve a função e variáveis no padrão **camelCase**
2. Como estamos passando parâmetros, todas as funções precisam ter um **``return``**
3. Quebre seus problemas em partes menores!
4. Você pode executar o javascript e conferir o resultado no console do browser, basta colar seu código e executar.

```js

function compareTwoNumbers(num1, num2) {
    const firstProblemPhrase = firstProblem(num1, num2);
    const secondProblemPhrase = secondProblem(num1, num2);

    return `${firstProblemPhrase} ${secondProblemPhrase}`
}

function firstProblem(num1, num2) {
    const equalNumbers = num1 === num2

    return equalNumbers ? `Os números ${num1} e ${num2} são iguais ` : `Os números ${num1} e ${num2} são diferentes `

}

    
function secondProblem(num1, num2){
    let soma = num1 + num2

    if(soma > 20) {
       return `Sua soma é ${soma}, que é maior que 10 e maior que 20`
    } else if(soma > 10 && soma < 20 ) {
       return `Sua soma é ${soma}, que é maior que 10 e menor que 20`
    } else if(soma < 10 && soma < 20 ) {
       return `Sua soma é ${soma}, que é menor que 10 e menor que 20`
    }
    
}

console.log(compareTwoNumbers(1,3))
```

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f4779f9-e12f-4482-b41e-e8ddb1bd05d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220426T131132Z&X-Amz-Expires=86400&X-Amz-Signature=b2119e2ec94e727d3a7c200e21082de98565c867bd493354c97295e12cb21b6a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)