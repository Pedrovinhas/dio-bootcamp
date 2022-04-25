# O que é Internet?

## Introdução ao tema

### O que iremos ver?

- [X]  Primórdios da Internet
- [X]  Rede
- [X]  TCP/IP
- [X]  Switch
- [X]  Modem
- [X]  Tipos de Software
    - Ecommerce
    - Webservice
- [X]  Stacks tecnológias
    - Back-End
    - Front-End
    - Fullstack
- [X]  Linguagens de programação

### História da Internet

- Começou como Arpanet
- Contexto da Guerra Fria
- Surgiu para interligar laboratórios
- Primeiro E-mail
- Holanda, Dinamarca e Suécia
- Em 1987 liberado o uso comercial
- Em 1992 CERN cria a World Wide Web, dados acessíveis a qualquer pessoa com acesso à interent

### No Brasil

**1988**

- FAPESP, UFRJ e LNCC trouxe para as universidade

**1994**

- Uso comercial pela Embratel com a conexão discada

**2000**

- Banda larga implementada
### Perguntas

1. Qual foi o primeiro domínio criado?
2. O primeiro blog?
3. Qual foi a primeira compra feita pela internet?
4. Qual o site mais antigo em atividade

### Atualmente em números

- Esses dados mostram pouca distribuição e acesso à Internet pelos brasileiros e principalmente entre aqueles menos favorecidos e em computadores.
- Já pelos celulares o acesso a internet é maior.
- Na pandemia serviços de streaming, youtube sofreram um aumento de acesso gigante, as empresas precisaram diminuir a qualidade dos vídeos para suportar o acesso primariamente.

# Como funciona a Internet?

## O que é?

- [ ]  Redes
- [ ]  Backbone
- [ ]  Provedores de acesso
- [ ]  Provedores de serviço
- [ ]  Usuário final

## Requisitos básicos
1. Familiariadade com:
    1. Computadores
    2. Internet
    3. Smartphone

## O que são Redes?

### Backbone

- Espinha dorsal
- Estruturas gigantesca que gerenciam as conexões e redes.

### Provedor de acesso

- Empresa telefônicas
- Contratam o sinal do backbone e o repassam ao usuário final (nós)

### Provedores de Serviço

- Dial-up
- ADSL (banda larga)
- Fibra ótica
- Rádio
- Satélite
- Móvel

P2P

- Comunicação entre dispositivos sem usar internet

### Caminho inverso

**www**

- Caminho para ficar fácil de nós memorizarmos domínios

**DNS**

- Transforma o nome em um número IP

**IP**

- Internet Protocol.

**127.0.0.1**

- Endereço do nosso computador
- Localhost.

### Exercício Final

- Joga pacotes pro Google e ver se tem retorno
- Latência o tempo que o dado leva pra sair da origem e chegar no destino.

# TCP/IP, portas, roteadores, switches e modems


## TCP/IP

Protocolos de comunicação entre computadores em rede em rede

- Transmission Control Protocolo - Protocolo de Controle de Transmissão
- Internet Protocol - Protocolo de Internet
    - Modelo de camadas
    - Conteúdo
    - Cabeçalho
    - O que está mandando

### Camadas

- Antes de passar para transmissão temos as camadas antes.

**4 camadas**

- Física (placa de rede)
- Rede (IP)
- Transporte (TCP, UDP)
- Aplicação ( FTP, SMTP, HTTP)

### TCP x UDP

- Duas formas de conexão
- Não confiável pois não tem confirmação de recebimento.

**UDP**

- Rápido
- Não confiável
- Ex.: livestream

**TCP**

- Voltado a conexão
- Handshake
- Integridade, ordem dos dados
- Ex.: aplicativo de mensagens de texto
## Portas ou Ports

### Por onde chegam e saem os dados?

- Pelas portas

### FTP 20

- Porta 20
- Apenas para envio de arquivos.

### SSH 22

- Conexão segura entre dois computadores

### SMTP 25

- Envio de e-mail

### DNS 53

- Tradução de IP para nome vice-versa

### HTTP 80

- Requisição para Internet

### HTTPS 443

- Requisição para Internet segura

## Roteadores, switches e modens

### Modem

- Modem transforma sinal de internet para ser transmitido para outros dispositivos e demodula para que nós humanos entedemos
- **Mo**dulator-**dem**odulator
- Hardware que converte dados em um formato que possa ser transmitido para outro e lido por outro

### Roteador

- Burro, pois o roteador manda para todo mundo, não só para o destinatário almejado
- Evoluiu do HUB.
- Hoje ele encaminha só para pessoa
- Distribui internet para um ou mais dispositivos de uma rede
- Pode fazer a comunicação entre redes

### Switch

- Distribui internet para um ou mais dispositivos de uma rede
- Criado para ser inteligente

### Exercício

1. O Gmail costuma usar portas próprias, que não as padrões de **SMTP** e **POP3**. Tente descobrir quais são.
2. O programador que trabalha com a Internet costuma usar bancos de dados, como o MySQL e claro servidor web, como Apache. Qual você se adiantar e já descobrir quais são as portas usadas por estes sistemas?

# Celular, Internet e outros dispositivos

## Dados móveis

### SMS

- SMS vai naturalmente nas mensagens que são trocadas entre celular e operadora
- O celular troca, naturalmente, alguns bits com as torres de comunicação. Por isso, o custo de uma operadora de telefonia móvel para enviar um SMS é zero.

### MMS

- Transmissão de mensagens multimídia (áudio, vídeo) por meio de uma espécie de conexão de dados primitivas.

### Conexões móveis

- 1byte = 8 bits.

1G (analógico): 10Kbps

2G (digital): Global System for Mobile Communication 97Kbps

2.5G (General Packet Radio Service): 23-80Kbps - dados e + voz

2.75G( Enhanced Data Rates for GSM Evolution): 128-236Kbps

3G (7Mbps), 4G (22,1Mbps), 5G (10Gbps)

## Wi-Fi

### IEEE

- Empresa que define padrões para tecnologia

### Padrões Wi-Fi

- Os roteadores podem fornecer sinal em todos esses padrões

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8c8c431e-c14e-4cf3-8a3b-547048b9243a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T192907Z&X-Amz-Expires=86400&X-Amz-Signature=f45b3962b68975d014af5e2c5276dc2481c691c3b18dd44c40366c7fb1e5f401&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Segurança

- Processamento compensou com a evolução de processamento também dos roteadores

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dea7a25a-231f-46b0-9a1d-3a57075aaa6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T192927Z&X-Amz-Expires=86400&X-Amz-Signature=aa20141512566baf335505cac0bbaecb525afe683427104785dc82aa3d8ed451&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Dispositivos na rede

- Impressora
- Scanner
- Chromecast

## Bluetooth

- Conexão ponto a ponto
- Sem depender da internet
- Conecta diferentes dispositivos, celular-celular, celular-radio etc.
- EDR é uma camada de segurança.

![imagem](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f828700c-5983-4bca-96fb-1b724c81630b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T192719Z&X-Amz-Expires=86400&X-Amz-Signature=5e12986767cb688bf27b3b4308c94f0a850549ecdb6d850d1b0ca67f5c8b832e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Exercício
1. Na sua vida pessoa houve alguma mudança em relação ao acesso à Internet e ao consumo de dados online? Por exemplo: vídeos, jogos, músicas, troca de mensagens, compras, alimentação, notícias, cursos...

# Browser, sites, aplicativos e web-server

### Browser ou Navegador

- É possível utilizando os protocolos, mas o website apenas pelo navegador
- Existem muitas formas para acessar a Internet sem um browser, mas para ver um site é preciso um programa que interprete as linguagens de programação (LP) e as transforme em algo compreensível por um humano

### Características

- HTML é linguagem de **marcação**
- Sabe identificar várias LP, linguagens de marcação e conteúdo multimídia
- Hoje os browsers fazem muito mais que isso: existem plugins, add-ons, que ajudam na navegação Cache e Cookis

### Cache

- Rastros do navegador que ficam pre-carregados caso voltemos na página
- Imagens, links, ícones não precisam ser pegos no do servidor de novo, ficam carregadas no lado do cliente dentro da cache

### Cookies

- Rastro que sites deixam no computador para anúncio e buscar seus interesses

### Páginas Estáticas x Dinâmicas

- Antes tinhamos páginas linkando para outros setores da página
- Hoje temos movimento e componentes interativos dentro de uma página só, que dirá o resto da aplicação.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b4832e4-84dc-4ba2-8d7c-0a0848ff1f3f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T193854Z&X-Amz-Expires=86400&X-Amz-Signature=42b91f32dc37ae90d6f37f01dd17cf4368512f43db4ca60e2399e0465fbcc08b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Exercício final

1. Entre no site: http://archie.org/web/
2. Pesquise como eram antigamente os sites mais famosos de hoje em dia

## Site, aplicativo e e-commerce

### Site
- Página da Internet
- Diversos propósitos
- Podem ser feitas em diversas LP
- D/XHTML caindo em desuso
- Site estático era puramente em HTML
- Criamos hoje, sites dinâmicos.

### Aplicativo
- Um software que é executado no navegador
- Um aplicativo de celular, muitas vezes, nada mais é do que uma espécie de navegador.
- Hoje em dia, já quase não existe diferença entre site e aplicativo, e o primeiro está em declínio.
- Outra diferença terminológica que está sumindo é entre programa/software e aplicativo

### E-commerce
- "e, assim como um "e-mail", significa electronic
- Comércio eletrônico
- Site de compra e venda com sistema de pagamento.

**OBS**
- O sistema de pagamento pode ser exterior ao site, como por exemplo: PicPay, Boleto, PagSeguro, PayPal, Mercado Pago.

### Exercício final
1. Boleto só existe no Brasil. Verdade? Será que algum outro país usa?
2. Débito é uma invenção brasileira?
3. Os sites hoje em dia usam mais sistemas próprios de pagamento ou terceirizados?
4. Faça uma busca quantitativa no Google, veja qual mais aparece: site, aplicativo ou programa (de computador).

## Web-server
Onde ficam guardadas nossas informações e nossos dados.

### Estático
- É um servidor físico onde são armazenados arquivos, software e/ou banco de dados
- Servidores físicos em grandes empresas e com redundância, para não perder arquivos.

### Dinâmico
- Se refere ao softwares que estão presentes no servidor físico.
- Arquivos (file server)
- Aplicações (application server)
- Banco de dados (database)
- Tudo junto e misturado 😂

**Características**
- Um site, ou aplicativo precisa estar hospedado em um servidor para poder ser acessado
- Os dados de um site precisam estar em um servidor.
- O banco de dados de um site ou aplicativo precisa estar em um servidor.

### Web-Service
Interface disponível para fazer requisições e consultas em bancos de dados inacessíveis (Correios, Governos)

### Exercício Final
1. Tente encontrar, na Internet, como se dá o acesso aos web-services dos Correios e do Governo para, por exemplo, buscar os dados de um CEP e os dados sobre os estudantes do Brasil, respectivamente.

# O que são Stacks?

✔ Familiaridade com computadores

✔ Familiaridade com Internet

✔ Familiaridade com LPs

## Stacks

### O que é?
São pilhas de tecnologias, conjuntos de softwares necessários e suficientes para executar um aplicativo/programa
- Linguagens de programação
- Ambientes e ferramentas de interação com App/Software
- Capacidade e limitação de perfomance
- Toda Stack tem pontos fortes e fracos para App/Software

### Importância
- Os líderes de projetos precisam das informações das equipes de desenvolvimento
- Os desenvolvedores precisam saber as limitações e capacidades das ferramentas e ambientes que tem disponíveis
- Sistemas, bancos de dados, linguagens de programação, protocolos e comunicação
- Estratégias de negócios
- Maturidade da empresa e desenvolvedores.
- Contratações, planos de mitigação de riscos, aumento da capacidade/escalabilidade e uso de dados.

## Front-end, Back-end e FullStack

### Front-end
- "Parte da frente"
- Site, software, aplicativo e web-service
- Interface de UI, UX.
- Lógica de programação, HTML5, CSS3, jQuery/JS/AJAX, PHP, Bootstrap e outros frameworks.

### Back-end
- "Parte de trás"
- Servidores, banco de dados.
- Meio de campo entre interface e bancos de dados, regras de negócio e validações
- MySQL, Oracle, protocolos de comunicação, PHP, Java, NodeJS.

### FullStack
- Profissional que sabe trabalhar em todas as camadas das tecnologias de desenvolvimento/execução de um aplicativo ou software.

### Exemplo

![Exemplo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b287ba7c-def0-4856-8914-4cd91d12a4cd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T210327Z&X-Amz-Expires=86400&X-Amz-Signature=b5f5e74507a95af9ca26b2e5c550e8a43c09cdb2216ae9be389ec07829e49ed3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Frameworks populares para desenvolvimento Front-end

![Exemplo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/63da14de-6a90-4ac8-8dcb-613bef647046/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T210421Z&X-Amz-Expires=86400&X-Amz-Signature=12d0419ba71f9dcd82cc7fd5f069467b630f2c99afc349a1e91f5f567ca59d44&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Exercício Final
1. Tente encontrar na Internet quais são as tecnologias utilizadas em cada Stack de grandes empresas (Google, Facebook, IBM, Apple etc.)

# Linguagens de Programação e termos

✔ Familiaridade com mídias digitais

✔ Familiaridade com Internet

✔ Familiaridade com Lógica de programação

## Principais linguagens e linguagens de programação

![linguagens](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d804ee41-250a-4480-ac85-594a4139c31a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220424T210939Z&X-Amz-Expires=86400&X-Amz-Signature=d2dd8c1b49c45b1ea30b4a5050caac14a3e75b5464c324b8e0cfbeeb11b7dba0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## Diversos termos comuns - Parte I

| Título      |   |
| :----------: | :-----: |
| 404  |  Algoritmo   |
| ALT |  API   |
| Aplicação |  Back-end   |
| Biblioteca/dll |  Bootstrap   |
| Breakpoints |  Browser/navegador   |
| Bug |  Cache  |
| Código |  Controle de versão   |
| Cookies |  Browser/navegador   |
| Debug |  Deploy   |
| Design responsivo |  DNS   |
| Documentação |  Domínio   |
| DPI |  Editor de texto   |
| Estrutura de dados |  Favicon   |
| Fontes |  Framework   |
| Front-end |  FTP   |
| Fullstack |  Github/SVN/CVS   |



## Diversos termos comuns - Parte II

| Título      |   |
| :----------: | :-----: |
| HTTPS  |  IP   |
| Linguagem |  Meta tags   |
| Método ágil |  Mobile   |
| MVC (Model, View e Controller) |  MVP (Minime Viable Product)   |
| MySQL |  Pixel  |
| Resolução |  Servidor  |
| Sistema operacional/SO |  Solução   |
| SSL |  UI (User Interface)   |
| UX (User Experience) |  Versão   |
| WYSIWYG (What You See is What You Get) |    |

### Exercício Final
1. Pesquise um pouco sobre Apache, MySQL e PHP, pois vamos usar na próxima aula para construir nossa primeira aplicação-teste
# Construindo primeira aplicação

## Aula prática

✔ Familiaridade com mídias digitais

✔ Familiaridade com Internet

✔ Familiaridade com Lógica de programação

### Baixar XAMP

X - Sistem operacional (Linux, Windows, MacOS)

A - Apache

M - MySQL/MariaDB (Banco de dados)

P - PHP

P - Pearl

![interface](https://xamppguide.com/wp-content/uploads/2022/01/xampp-control-panel12.png)
### Guia
1. Crie uma pasta projetos.
2. Configurar o Apache para executar nossa pasta
    - Config -> HTTPD.conf
    - Procurar documentroot
    - Definir o diretório dos projetos.
3. Inicializar o módulo escolhido em **Start**
4. Criar o arquivo e escolher o editor de texto de preferência
5. Abrir o index.php para editar o conteúdo
6. Acessar o endreço **localhost** (vai no servidor Apache, pega o caminho, vê o que tem lá dentro e executa).

#### Tags PHP

``<?php ?>``: permite usar códigos dentro dessa tag

``<? ?>``: também funciona, mas alguns navegadores dão problema de compatiblidade.

#### Index.php e Javascript
- Como funciona agora com Javascript
- Nosso código vai dentro da tag ``<script> </script>`` 

---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>