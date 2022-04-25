# 🔎 Table of Contents
- [Introdução]()
    - []()
- [Fundamentos do Flexbox - Parte 1]()
- [Fundamentos do Flexbox - Parte 2]()
- [Projeto]()
# 🔸 Introdução ao Curso 

## Documentos das práticas
- [Karen Santos - Projeto Flexbox DIO](https://gitlab.com/karensantos/project-flexbox-dio)

## Objetivo do Curso

Apresentar os fundamentos e aplicações da propriedade flexbox na criação de layouts responsivos, sem a necessidade a definição de valores fixos.

### Requisitos Básicos

✔ Ter feito o curso de “Introdução a criação de websites
com HTML5 e CSS3”

✔ Editor de texto

✔ Navegador de sua preferência

### Objetivos da Aula
1. Conhecer a estrutura básica
2. Entender a diferença entre Flex Container e Flex Item
3. Conhecer inicialmente alguma propriedades

### Suporte

Foi projetado como um modelo de layout unidimensional e como um método que pode oferecer distribuição de espaço entre itens em uma interface e recursos de alinhamento.

### Flex-Container

É a tag que envolve os itens, será nela que iremos aplicar a propriedade ``display: flex;``. Transforma todos os seus itens filhos em flex itens.

![Flex-Container](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3b272af-b37a-4ac4-b0fc-f252118bfa64/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T202637Z&X-Amz-Expires=86400&X-Amz-Signature=cc3c31cfc7379296ce8c8c22867db0767a8b802f232bac963547e7286257316d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### **Propriedades**
-  display
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### Flex-Item
São os elementos filhos diretos do Flex Container e também podem se tornar Flex Container.

![Flex-Item](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f5e3aade-cea8-4162-accf-9eec0c6b98a0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T203011Z&X-Amz-Expires=86400&X-Amz-Signature=5772069c9214f07186d19471b512add58a858a50542d9baa304de52ec8c80a2e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### **Propriedades**
- flex-grow
- flex-basis
- flex-shrink
- flex
- order
- align-self

---
#  🔸 Fundamentos do Flexbox - Parte 1

### Sugestões
 - VSCode
- Live Server Extension

### Display: flex;

Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.

![Display-Flex](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/644ae13f-eb5d-4a01-9681-9814218dd67e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T204229Z&X-Amz-Expires=86400&X-Amz-Signature=c5c3ae157da5e305c29fe915592a05abb2231b50d735862d6677bb0b7dcd49dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Prática com ``display:flex`` 

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/0-display-flex.html) para o código.
- Cada item passa a ocupar o máximo do seu contéudo e respeitando a orientação padrão que é `row`
- Dentro da tag ``<style>`` no ``<head>`` colocaremos nosso CSS de forma interna no HTML.

#### **Resultado**

![Flex](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee69207c-1b48-4791-89af-9228cdba5140/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T204907Z&X-Amz-Expires=86400&X-Amz-Signature=c10669781b519ff4f618fa0f5dd13a56c1bab6c75408fb109d979ad2eeb1a309&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Flex-direction
- Linha horizontal
- Coluna vertical
- Ordenações reversas

Entender o comportamento padrão de orientação horizontal de um flex container

2. Aprender a modificar a orientação horizontal
É a propriedade que estabelece o eixo principal do container,
definindo assim a direção que os flex items são colocados no flex
container.

#### ****Valores****

Row: à direção padrão do texto, esquerda para direita.

![row](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6baec5d-6eba-464e-82de-70091a9eb0c1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T205208Z&X-Amz-Expires=86400&X-Amz-Signature=3fab8e2cd93e12dd342f8220a00c854938055dc3ef9af5773ffa7fc3d932654b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Row-reverse: sentido oposto à direção do texto

![row-reverse](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/98a4b582-ce45-4c85-b859-36b5de3f844a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T205329Z&X-Amz-Expires=86400&X-Amz-Signature=c3f151de9326ddbe5fc8b5e7d3dceae401c82d3170121a77211534aa513d39a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Column: ordenação de cima para  baixo, em coluna unica

![column-reverse](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/483859df-7e41-4257-a276-c8649cf26e5d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T205513Z&X-Amz-Expires=86400&X-Amz-Signature=27ef21c59ef6f3059b5096c1901bc9f6fd1cd6bf1c7b8ab569a7770da17feccb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Column-reverse: ordenação inversa, de baixo para cima

![column-reverse](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/383e7042-2d19-4ea5-9749-7b8e67dcd00b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T205510Z&X-Amz-Expires=86400&X-Amz-Signature=bd75ffa7793750de1f28f625ad9bb46863889c56f45c0fdcca4f157acdc24691&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Prática com flex-direction
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/1-flex-direction.html) para o código


## Flex-wrap
É a propriedade que define se os itens devem ou não quebrar a
linha.

Por padrão eles não quebram linhas, isso faz com que os flex itens
sejam compactados além do limite do conteúdo.

### ****Valores****

Nowrap: é o padrão, não permite a quebra de linha.

![no-wrap](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a293dea5-0c5c-4745-82d4-a02718fb42c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T171501Z&X-Amz-Expires=86400&X-Amz-Signature=108208a94f4d864aeb5d3dbcdc464433a3e178fb4f0d0c2aafd7877b5648653b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado.

![wrap](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/96770895-486c-4d48-9543-590c35b44db9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T171541Z&X-Amz-Expires=86400&X-Amz-Signature=3afd65057a3edd809d6f9f8155fb10578d8603e5938bc6198b9ee2955425e039&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porém na direção contrária da linha, acima.

![wrap](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/634d23a4-992a-45a9-b2c3-d0620ebef4ef/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T171557Z&X-Amz-Expires=86400&X-Amz-Signature=54a367af7a9634616eddf1f57471fa331f5b08c451be8b8074065bc301ecd37f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Prática com Flex-wrap
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/2-flex-wrap.html) para o código.
- Vai comprimir até comportar o conteúdo dos itens
- Quando ultrapassar o limite o conteúdo vai vazar
- Se adicionarmos um min-width isso ficará mais claro
- Quando mudamos o `flex-direction` para `column` temos a quebra do conteúdo para outra coluna caso o flex seja wrap.

### **Resultado**

![Flex-wrap](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0cd60bf-e6bb-4299-9c48-bae4f60d39b2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220423T205944Z&X-Amz-Expires=86400&X-Amz-Signature=9f2f2136dacae371bfe2be4247ff9b6df212c22f3d613faa38f4930376ca2a54&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Flex-flow
É um atalho para as propriedades flex-direction e flex-wrap.

Porém seu uso não é tão comum, visto que, quando mudamos o
flex-direction para column, mantemos o padrão do flex-wrap que
é nowrap.

## Prática com Flex-flow
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/3-flex-flow.html) para o código.


### Resultado
![flex-flow](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8aafde2d-46b4-43cc-9520-fc400b47f25e/flex-flow.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T173248Z&X-Amz-Expires=86400&X-Amz-Signature=acbb97352878349034f58c3189ee387cbb27fffaf43f341d079c6fbbd138a16a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22flex-flow.gif%22&x-id=GetObject)

## Justify-content
Essa propriedade vai se encarregar de alinhar os itens dentro do
container de acordo com a direção pretendida e tratar da
distribuição de espaçamento entre eles.

**OBS:** caso seus itens esteja ocupando 100% de todo o container,
ela não se aplica

### **Valores**

flex-start: início do container.

flex-end: final do container.
center: ao centro do container.

space-between: cria um espaçamento igual entre os
elementos.

space-around: os espaçamentos do meio são duas vezes
maiores que o inicial e final.

space-evenly: os espaçamento são iguais entre os elementos.

## Prática justify-content
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/4-justify-content.html) para o código.

### Prática com flex-direction: row

![row](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fbc936e-1c49-442f-b71e-7c9a30a35406/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T174334Z&X-Amz-Expires=86400&X-Amz-Signature=73fc66fef9e3379e2dcad1faf076e7f4113a8206b956b715cdfa511fff764d07&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Prática com flex-direction: column

![column](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fbc936e-1c49-442f-b71e-7c9a30a35406/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T174334Z&X-Amz-Expires=86400&X-Amz-Signature=73fc66fef9e3379e2dcad1faf076e7f4113a8206b956b715cdfa511fff764d07&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Align-items
Trata do alinhamento dos flex itens de acordo com o eixo do
container.

O alinhamento é diferente para quando os itens estão em colunas
ou linhas.

Permite o alinhamento central no eixo vertical.

### **Valores**
center: alinhamento dos itens ao centro

stretch: padrão, e os flex itens cresçam igualmente

flex-start: alinhamento dos itens no início

flex-end: alinhamento dos itens no final

baseline: alinhamento de acordo com a linha base da tipografia
dos itens

## Prática com Align-items
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/4-justify-content.html) para o código.

### Resultado

#### Row

![row](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e2d1f5d-b7f8-4e6d-bde1-5d1a2a620cf4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T175656Z&X-Amz-Expires=86400&X-Amz-Signature=894cc60ee86bc9742a867df5489645aeff650d1ec2a2da456bf78406e906bb46&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

#### Column

![column](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6f10aa34-8d13-4d32-b0f3-b51c37076af3/flex.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T180016Z&X-Amz-Expires=86400&X-Amz-Signature=7fc49383a639194aaad65ceecf36154f51b399a8ddfba4126a196d1736563bbe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22flex.gif%22&x-id=GetObject)

## Align-Content
- É a propriedade responsável por tratar o alinhamento das linhas do container em relação ao eixo vertical do container.
Precisamos que:
    1. O container utilize quebra de linhas
    2. A altura do container seja maior que a soma das linhas dos
itens

### **Valores**

center: alinhamento dos itens ao centro

stretch: é o padrão e os flex itens crescem igualmente

flex-start: alinhamento dos itens no início

flex-end: alinhamento dos itens no final

space-between: cria um espaçamento igual entre os elementos

space-around: os espaçamentos do meio são duas vezes
maiores que o inicial e final

## Prática com Align-Content
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/6-align-content.html) para o código.

![align-content](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4dce8539-73c7-4adc-9ac4-b78a4a71c443/flex.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T180422Z&X-Amz-Expires=86400&X-Amz-Signature=a6e09fbc985594ff49eacc8cb041f1de277ccab39c877beed47e44bc1b35d31e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22flex.gif%22&x-id=GetObject)
---

#  🔸 Fundamentos Flexbox - Parte II
- Veremos as propriedades dos Flex-Items

## Flex-grow

- Propriedade do Flex-Item
- Valores de 0, 1 ou proporcionais de crescimento
- Lida com o espaço do conteúdo do Flex-Container restante e a proporção de crescimento do conteúdo restante.

Define a proporcionalidade de crescimentos dos itens, respeitando o tamanho de seus conteúdos internos.

**OBS:** não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

## Prática com Flex-Grow
- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/7-flex-grow.html) para o código.

### Resultados
![grow](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56cb3567-bb4e-426c-afb6-d360b37e3407/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T180912Z&X-Amz-Expires=86400&X-Amz-Signature=5464c37922cd60510e56f5553b63ef988d563c8460454a4b2c7b69399bf4f121&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
## Flex-basis

- É a propriedade que estabelece o tamanho inicial do item antes das distribuição de espaço restante dentro dele, usando como base o conteúdo interno disposto.

### Valores possíveis

**auto**

- Caso o item não tenha tamanho, este será proporcional ao conteúdo do item

**px, %, em, rem**

- São valires exatos previamente definidos

**0** 

- Terá relação com a definição do flex-grow.

## Prática com Flex-basis

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/8-flex-basis.html) para o código.

### Resultado

![basis](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/341d08ac-df2a-4b4e-b483-9ad4d9be9536/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T181135Z&X-Amz-Expires=86400&X-Amz-Signature=40dc19a4a4246ca08e06842bf813d9561a3081ca2b7ca46c3076687bdd347e0e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Flex-shrink

- É a propriedade que estabelecer a capacidade de redução ou compressão do tamanho de um item.

## Prática com Flex-shrink

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/9-flex-shrink.html) para o código.

### Resultado
![shrink](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a929779-4724-46cf-a8f4-79c018dc831b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T181243Z&X-Amz-Expires=86400&X-Amz-Signature=1a605588c44c55b01ca3d7f3d2a28b9309568ef02691fa9718ebdd7469266320&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Flex

Esta propriedade é um atalho ou abreviação **(shorthand)** de escrita para as propriedades: grow, shrink e basis.

## Prática com Flex

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/10-flex.html) para o código.
### Resultado
![flex](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fb366063-5c6c-4d4f-ade7-34f892508b0d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T181407Z&X-Amz-Expires=86400&X-Amz-Signature=8e26c6b78fa0f7f0bfdf8f293c853dad393a80aaac8a5af4d109f363b389ddb7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Order

- Define as ordens do Flex-Itens dentro do Flex-Container, onde quanto menor o order, mais no início o Flex-item se posiciona

## Prática com Order

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/11-order.html) para o código.

### Resultado

![order](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d78fe0dd-715e-46ff-bb5d-6c0fd328895d/order.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T181632Z&X-Amz-Expires=86400&X-Amz-Signature=550c2a77a86411945c697ce0b3a33bf836fc4dfb93a13522d3d71d05504e0bcd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22order.gif%22&x-id=GetObject)
## Align-self

- É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item.


### Valores

auto: valor padrão, irá respeitar a definição de align-items do
container

flex-start: ao início do container

flex-end: ao final do container

center: relativo ao centro de acordo com o eixo

stretch: ocupa todo os espaço relativo

baseline: utiliza a linha base da tipografia


## Prática com Align-self

- Consulte o [Link](https://gitlab.com/karensantos/project-flexbox-dio/-/blob/master/13-align-self.html) para o código.

### Resultado

![align](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a8913d0a-d888-4584-a6e5-885c7a5492a3/order.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T181657Z&X-Amz-Expires=86400&X-Amz-Signature=2d2a6c6c082a259f775db86ff87ee5c6c91f2dd6c930a7638f758fa2e2c61312&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22order.gif%22&x-id=GetObject)

---

<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>