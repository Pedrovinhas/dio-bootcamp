# Utilizando Módulos

## Objetivo do Curso

1. Explicar a necessidade do uso de módulos

2. Ensinar como utilizá-los

## Utilizando módulos

### Objetivos

1. Explicar o que são os módulos em Javascript

2. Ensinar como utilizar esses módulos

3. Alertar para algumas particularidades

### O que são módulos?
- Módulos são arquivos Javascript que tem a capacidade de **exportar** e **importar** infomrçãoes de outros arquivos do mesmo tipo.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fd36bb0-ce18-42bc-a766-f0ea7b060d34/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T182240Z&X-Amz-Expires=86400&X-Amz-Signature=7fd2354e7cd6a27d3d21c9fee4fb6cb4e37fabb6178031b8c9b2e2896ea57316&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Vantagens
1. Organização, legibilidade e manutenção do código
2. Compartilhamento de variáveis em escopos diferentes.
3. Explicita as dependências dos arquivos.

### Exportar

#### named export | `export`
- Quando queremos exportar mais de uma coisa do arquivo e exportamos ela individualmente
- Usamos muito no **React**

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6e7bfd10-ec77-4985-ab31-071ffb33e805/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184120Z&X-Amz-Expires=86400&X-Amz-Signature=6720cc51b6209b94446d1dcfc3cf8764694af3d16e73311b440212b96afdc12a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84f103b0-7eee-4978-a21f-a6c86304a15e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184141Z&X-Amz-Expires=86400&X-Amz-Signature=8cf5393674fa6edbacea33f15629bbb189bcfec19d3f5b744b89d5e0edf9d906&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### default exports
- Só pode haver um por arquivo
- Será o retorno padrão do seu arquivo.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6356d23d-5ebd-481e-b1d6-a7f5d51eca12/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184241Z&X-Amz-Expires=86400&X-Amz-Signature=d82b22bd4975e4b9e0b241ce298a226fc62dfd1ed69c027c85245d1324b1d351&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Importar
- Usamos os dois primeiros muito no **React**
#### named export

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/36dca5fd-6128-42dc-820c-2324655c59f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184322Z&X-Amz-Expires=86400&X-Amz-Signature=bfcb1286ecdd766be58a09f5cfffbd06276d1a4e89ff29dee2fa2aa14dfafc07&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
#### default export

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1dd29ca-a537-4804-89d5-9b5f5c110371/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184332Z&X-Amz-Expires=86400&X-Amz-Signature=e667d07329b679297ead4fc1ee6b9f7d35fda72daeefef75c05d02a6b6e82b5d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Trocando nome de imports

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/213328e7-0a47-4e51-aeca-ee7f1d670718/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184412Z&X-Amz-Expires=86400&X-Amz-Signature=812c91077eed5e8ed7bdd326bc6c652de58a1ca333d6a69456d71b5d97f61344&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Importando todos os dados de um arquivo

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c8e39a7-2c28-4d85-a90b-7483a06a9dcd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184445Z&X-Amz-Expires=86400&X-Amz-Signature=aa127308815b9f6c7912dea123997b6099ee262953ba542a18f55bee6dab9774&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Vinculando ao HTML
- Precisamos colocar o `type`como module no `<script>`
- Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor.
- Isso pode ser feito utilizando a extensão **Live** Server do VSCode.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6525a5f1-09f1-4c7f-bc3c-e488fad8aed2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184627Z&X-Amz-Expires=86400&X-Amz-Signature=1adc92d3db4fb66977b3965ac1039d64b528290380398d5b2c257cc8ddab12a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Curiosidades
- Módulos sempre estão em `strict mode`
- Podem ser utilizadas as extensões `.js` e `.mjs`
- Para testes locais é necessário utilizar um servidor.
- Ao importar sempre lembre da extensão utilizada (em alguns casos dispensam)
- Ao importar sempre utilize `./` como ponto de partida.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aff6a047-9962-402f-b7eb-4f805fa2c7a5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220428T184807Z&X-Amz-Expires=86400&X-Amz-Signature=8b5a9b8ca23658fb6870b5f1a50d537450726653039ef1f33a4d254af0503ff4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


## Atividade prática
### Imports

#### Objetivo
Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.

#### Passo a passo

1. Instale a extensão "Live Server" no seu VSCode;
2. Crie um arquivo com uma estrutura HTML padrão;
3. Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
4. No arquivo funcoes:
    - Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade de ${nome} é ${idade};
    -  Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
    - Exporte estas funções.
5. No arquivo main:
    - Importe as funções do arquivo funcoes;
    - Faça a chamada de todas elas;
6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.

#### Resolução

```
├── 📜 index.html
│
├── 📜 main.js
│
└── 📜 functions.js
```

**``functions.js``** 

```js
export function showAge(name, age) {
    return `A idade de ${name} é ${age}`
}

export function showCity(name, city) {
    return `A cidade de ${name} é ${city}`
}

export function showHobby(name, hobby) {
    return `O hobby de ${name} é ${hobby}}`
}

```

**``main.js``** 


```js
import { showAge, showCity, showHobby } from './function.js'

showAge('Pedro', 23)
showCity('Pedro', 'Salvador')
showHobby('Pedro', 'Basquete')

```

-> No nosso localhost temos o retorno esperado utilizando a ferramente Live Server.

### Imports Dinâmicos
Os imports dinâmicos não foram abordados no curso de "Módulos" porque é necessário que você tenha conhecimento prévio de Javascript Assíncrono. Sendo assim, recomendo que você volte neste repositório após completar o curso de Javascript Assíncrono que também faz parte deste Basecamp.

#### Exercício
1. Este exercício serve apenas como um exemplo de como utilizar módulos por demanda. 
2. Na nossa página HTML, ao clicar no botão, o fundo da página fica vermelho.
3. Não se esqueça de utilizar a extensão "Live Server" caso você vá tentar realizar este desafio!

