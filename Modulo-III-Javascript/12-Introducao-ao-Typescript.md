# Como implementar Typescript na prática

## Exemplo das vantagens do Typescript
- O Typescript é um superset/extensão do Javascript, ou seja, ele tem tudo que o javascript tem, mas ajuda a adicionar tipagem para ele.
- Isso previne vários erros na hora de desenvolvimento e permite com que tenhamos retornos e erros mais explicáveis.

## Criando o arquivo index.ts e executando o comando parcel

1. `npm init`
2. instalando o bundler para compilar nosso código typescript em js com `npm i parcel-bundler` e o browser entender.
3. Criamos index.html para realizar os testes
4. Dessa vez criaremos um `index.ts`
5. Alteramos nosso package.json
6. Linkamos com a tag `script`no html.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f7eb442-8d25-4936-889a-c0e4a5afe691/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220429T024341Z&X-Amz-Expires=86400&X-Amz-Signature=0d2276c10f00ad39348c4b04d7f31a1bf9b3ab0d3eec7e65586db470a45a800c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Escrevendo a função soma com typescript
- Quando temos o typescript instalado temos acesso ao `tsc` que é o compilador do TypeScript
- Nele podemos chamar o arquivo `index.ts` que compilará para javascript o nosso código.
- Normalmente usamos um **Bundler**, que fará essa compilação do TS para o JS e o browser entenderá.

### Construindo nossa Função de Soma
- Permite adicionarmos os tipos já nos parâmetros da função.
- Se chamarmos os argumentos a, b como Strings, já temos um erro na hora do desenvolvimento, não precisamos nem chegar a compilar.

```ts
    function soma(a: number, b: number) {
        return a + b
    }

    soma(1, 3)
```

## Como funcionam as interfaces
- Além de poder tipar as variáveis e parâmetros das nossas funções, temos acesso a **`types`** e **`interface`**

### Types
- Definimos uma estrutura de dados para os parâmetros que quisermos, dizendo o tipo de cada dado que esperamos neles.

### Interfaces
- São contratos para implementarmos as nossas validações de tipos de dados.
- Seguem o padrão `INomeDaInterface`

```ts
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
}

const animal: IAnimal = {
    nome: 'Tamanduá'
    tipo: 'terrestre'
}
```

- O VSCode já mostra automaticamente com o autocomplete os tipos de dados esperados dentro da nossa interface.
- Qualquer coisa diferente, o VSCode já mostra um erro. É

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6ff0a59d-3f42-46a3-b7c1-40d87bfdfd14/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220429T025233Z&X-Amz-Expires=86400&X-Amz-Signature=a4f8eea7c877c3be8699bf87627d61efcb6680d746b314a60855b1bf7bcd3f11&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Podemos estender a Interface com `extends`

```ts
interface IFelino extends IAnimal {
    visaoNorturna: boolean;
}

const felino: IFelino = {
    nome: 'Gato',
    tipo: 'terreste',
    visaoNoturna: true;
}
```

#### Podemos também adicionar funções dentro da Interface
- Colocamos se tem retorno ou não e também se tiver parâmetros.

```ts
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarMiado(): void;
}

interface IFelino extends IAnimal {
    visaoNorturna: boolean;
    ataque(velocidade: number): void;
}

const animal: IAnimal = {
    nome: 'Tamanduá'
    tipo: 'terrestre'
}

const felino: IFelino = {
    nome: 'Gato',
    tipo: 'terreste',
    visaoNoturna: true;
    ataque: (velocidade) => (`${velocidade} km/h`)
}

animal.velocidade(23)


```

- O próprio VSCode mostra que está faltando um tipo que definimos na interface.
- Se colocarmos um retorno diferente do que definimos na `Interface`, o VSCode já diz.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fe0991d-fc03-4af9-b458-d871948cc3e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220429T025700Z&X-Amz-Expires=86400&X-Amz-Signature=979a310d8634617e03e7c9cd0bd49de7c7b739c39baf03c83dff4b7fc4aa93c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Como funcionam os Types
- Podemos fazer tudo que fazemos com `Interface` só que com `Types`
- A diferença é que  tem o sinal de igual, enquanto na Interface abrimos os parênteses só.
- Usamos Interface para definirmos contratos.
- Usamos Types para juntar diferentes Interaces, ou definir que uma variável pode ser uma Interface ou outra Interface

```ts
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarMiado(): void;
}

``` 

### Exemplo de uso real do Types
- Definimos o `Types` para aceitar uma `Interface` ou outra.

```ts
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarMiado(): void;
}

interface IFelino extends IAnimal {
    visaoNorturna: boolean;
    ataque(velocidade: number): void;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
    ataque: (velocidade) => (`${velocidade} km/h`)
}

``` 

## Tratando a tag input
- Temos que saber como tratar tipos que tem no Desenvolvimento Web.
- Iremos ver como tratar o tipo `input` da web

### `type HTMLInputElement`
- Como fazer para o TypeScript saber que estamos pegando não um elemento genérico da página, mas especificamente um input?
- Se quisessemos pegar outro elemento, era só trocar o input pela tag correspondente.

```ts


```