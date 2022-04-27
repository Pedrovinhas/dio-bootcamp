# Map

## Objetivo do Curso

1. Apresentar o objeto Map

2. Apresentar o objeto Set

3. Coleções Chaveadas.

## Estrutura, métodos e Map vs Objeto

### Objetivos
1. Apresentar a coleção Map
2. Explicar sua aplicação
3. Explicar a diferença entre Map e Objeto

### OBS
- Eu não vejo muita utilidade hoje em projetos pessoais e aplicações web.

### Estrutura
- Obedece a estrutura chave e valor

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9147638f-abfc-42f6-a889-c347098b1a2d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T204537Z&X-Amz-Expires=86400&X-Amz-Signature=67f1b87da9d056ca0bae556e16a253554c0a20b749ea9990a833be187bbbbe62&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Características
- Uma coleção de arrays no formato ``[chave, valor]``
- Pode ser iterado por um loop ``for...of``

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad806f92-fafa-4c4c-b41d-b29d25261fb1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T204602Z&X-Amz-Expires=86400&X-Amz-Signature=870f94dd677226330fd4c11c191e72e49e4470a7b6e54ad62e80bf27f38b76de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Métodos
- Adicionar, ler e deletar

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/57b400f6-d994-4b5e-af9f-c53992212dac/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T204741Z&X-Amz-Expires=86400&X-Amz-Signature=a16f28bff5595731fbc5c28b6a4476f4e129233f2a01e7b2157406bd02535e46&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Map vs Objeto
1. Maps podem ter chaves de qualquer tipo
2. Maps possuem a propriedade length
3. Maps são mais fáceis de iterar
4. Utilizado quando o valor das chaves é desconhecido
5. Os valores tem o mesmo tipo 

- Usamos mais o objeto por conta da flexibilidade de armazenar tipos.

# Set

## Estrutura, métodos e Map vs Objeto

### Objetivos
1. Apresentar a coleção Set
2. Explicar sua aplicação
3. Explicar a diferença entre Set e Array

### Estrutura
- Sets são estruturas que armazenam apenas **valores únicos**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c8998076-2a86-40bc-af13-ea840caccbb3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T211932Z&X-Amz-Expires=86400&X-Amz-Signature=6f40d50a6eed98972c0ec0c99db364e59d7b7041536b250e9dc83bb7088442f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Métodos
- Adicionar, consultar e deletar

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/000e736e-e79d-48ba-a562-505d73482cf6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220427T212004Z&X-Amz-Expires=86400&X-Amz-Signature=23d212d8b1b39f01208d70f4631a6a6f9231cb0437f175759f0f4c876f37f692&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Set vs Array
- Possui valores únicos
- Em vez da propriedade length, consulta-se o número de registros pela propriedade ``size``
- Não possui os métodos ``map, filtar, reduce`` etc.
- Array é muito mais flexíviel, por isso usamos mais ele.


## Atividade prática

### Atividade 1 - Maps
1. Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
2. Crie uma função ``getAdmins`` que recebe um ``Map``
3. Crie um ``Map`` e popule-o com nomes de usuários e seuas papeis no sistema.
4. Dentro de ``getAdmins`` utilize o loop ``for...of`` para retornar uma lista com os nomes dos usuários que são administradores.

```js
    function getAdmins(map) {
        let admins = []
        for([key, value] of map){
            if( value === 'Admin') {
                admins.push(key)
            }
        }

        return admins
    }

    const users = new Map()

    users.set('Pedro', 'Admin')
    users.set('Flávia', 'Admin')
    users.set('Pinho', 'User')

    console.log(getAdmins(users))
```


### Atividade 2 - Sets
1. Dado o array ``[30, 30, 40, 5, 223, 2049, 3034, 5]`` retorne outro array apenas com valores únicos.

```js

const arrayNumbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

function singleValues(arr) {
    const mySet = new Set(arr)

    return [...mySet]
}

console.log(singleValues(arrayNumbers))

```