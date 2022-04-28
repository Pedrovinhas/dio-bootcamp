# Asincronicidade

## Apresentação do Curso

### Documentação


### Objetivos
1. Explicar o conceito de assincronicidade
2. Apresentar Promises
3. Ensinar como fazer requisições de APIs

## Definição, Promises e Async/Await

### Objetivos

1.Explicar o que são Promises

2. Ensinar como manipulá-las

3. Apresentar as palavras-chave `async` e `await`

### Definição
- **Assíncrono** é algo que não ocorre ou não se efetiva ao mesmo tempo

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5865c84-10f8-4d6d-876a-f4b662ab3d84/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T144948Z&X-Amz-Expires=86400&X-Amz-Signature=0cfeb2469e56d0ff76d334f5f17c3f7302dc3c4232af91cf62cedcc23145d60b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- O javascript por padrão roda de maneira **síncrona**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/93e0860c-d1a6-4dab-8b35-41938eb545d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T145010Z&X-Amz-Expires=86400&X-Amz-Signature=0331ff54f29e2efa7efef9db9dff2a4443463c3af226601fa8a185a25ce249db&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Promises
- Inicialmente, seu valor é desconhecido
- Ela pode, então, ser **resolvida** ou **rejeitada**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/976a487f-c52c-477f-a84a-b05736050ca0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T144919Z&X-Amz-Expires=86400&X-Amz-Signature=efdfbcbdce6d669c42bc813773035ecf2a35230bfae0c9cf3a71d794ddbcd39b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Estados da Promises
1. Pending
2. Fulfilled
3. Rejected

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1c688e7-d0af-4e6b-8d30-37d0336ad48b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T144909Z&X-Amz-Expires=86400&X-Amz-Signature=f78d02a6f222e077acad93148ca4090ee99d2644b422b5ef625bd7433fdcd07f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Estrutura

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bf8861e-36d3-4784-98a6-010b98ddbfe3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T144858Z&X-Amz-Expires=86400&X-Amz-Signature=bfe6200318b35999dd1394fe05817a4db46be552e47c1a532d6dbd58db5c31f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### Manipulação
- Precisamos usar a palavra `await` para resolver a promise.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eea75a17-4b43-41f9-a7c3-ef5eb47351db/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T144848Z&X-Amz-Expires=86400&X-Amz-Signature=334e0916548b79db70f45c30eb7560accee480e6a8f54795826b185695f5d8e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Async/Await
- Funções assíncronas precisam dessas duas palavras chaves para serem resolvidas.
- Await para o código e espera a promise ser resolvida.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/66e1b4d8-36f2-4062-a813-0f1581350b0e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T145158Z&X-Amz-Expires=86400&X-Amz-Signature=2c7a56e754cac9544627396f2eda39b0c7d7cd8a153adfd6374ba97e56448fe0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Funções assíncronas também retornam `Promises`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a35f051a-94d9-459d-8f35-29e98a8c4485/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T145247Z&X-Amz-Expires=86400&X-Amz-Signature=290234fbd3b3f2a0c8b7f47e7b28fb232f6a8cfa2afb4c1f9c28dfbf86c402ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- Utilizando o try...catch com a `promise`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ae15c77-cc24-44ed-8015-9c09c81acbbd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T145327Z&X-Amz-Expires=86400&X-Amz-Signature=423cd4504e7cdf7616e994189bd20c3f5663617e10da21f23413e18ad44765b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

# Consumindo APIs

## O que são APIs e Fetch

### Objetivos

1. Explicar o que são APIs

2. Ensinar como lidar com requisições dessas APIs

3. Apresentar o método `fetch()`

### O que são APIs?
**Application Programming Interface**
- Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ce59530a-e7fb-4963-9583-37927bf14472/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T150717Z&X-Amz-Expires=86400&X-Amz-Signature=3760ff5095505840f0898a70a9a8f0d9cb4028a915b317e053bbe60d70508861&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
#### JSON (Javascript Object Notation)
- É muito comum que APIs retornem seus dados no formato `.json`, portanto precisamos tratar esses dados quando os recebermos.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/40373e1d-f62e-4dbe-a571-be43282c8b07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T150709Z&X-Amz-Expires=86400&X-Amz-Signature=4a49479d6adbc2af11c424f50af55a4f91cbedf3eb2a55f929d1081714c5585b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Fetch
- Método para consumir APIs
    - Usamos o `.then` para realizarmos algo com o dado.
    - Precisamos converter a `response` com `response.json()`
    - Precisamos utilizar o `await` quando retorna uma promise

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b69a5582-f6fa-4786-89fd-c6cce2707030/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T150613Z&X-Amz-Expires=86400&X-Amz-Signature=8802e640a205fe5971c3c4265f9bf41e95ab498044019d1cd2fa9274e1e8cbf4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Operações no banco (POST, GET, PUT, DELETE, etc)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/501b51d1-d9aa-4900-a1c6-677ec484f58c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T150659Z&X-Amz-Expires=86400&X-Amz-Signature=a281c447bcf7592fc9526b27339b2b377fb27a8e6480910a3e3006cedf0a3a2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Atividade prática

- Você pode consultar o projeto [aqui](./projeto-cat-generator/)

### Resolução

#### Com `try...catch`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a75b3f54-bd47-42ff-a3f0-abf4fa4ce212/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T162830Z&X-Amz-Expires=86400&X-Amz-Signature=27d7db8099e11ffc45ab8235827dc8a9f6383923d190dd62f7c40c7a4ef167a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Sem `try...catch`

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5b00b04-5e5e-40d8-9264-18f7672ab549/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T162943Z&X-Amz-Expires=86400&X-Amz-Signature=5f4815d35a1b8481c1cb4fcff226b38b62f67914944cff019ab0b3a128d29caf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)