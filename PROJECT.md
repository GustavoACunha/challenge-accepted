## **HTML**:

Início comum, já estou acostumado a mexer com html,já utilizo html e css a mais ou menos 4 anos, 
então setei meu css no ***head***, junto com o link para o bootstrap4.

- Dentro do ***body*** usei o sistema de grid do bootstrap para ordenar o ***input*** da barra de pesquisa e o icone de lupa enviado no arquivo zip.

- No ***input*** coloquei a função onclick que executa função do java script para dropar um menu onde mais abaixo passo as variáveis referentes as cidades analizadas
e coloquei a função onkeyup, executando uma função que filtra as alternativas do menu dependendo do que está escrito na barra de pesquisa.

- Na ***div*** "myDropdown", coloquei as duas cidades analizadas, ambas com a função onclick para mostrar os sete dias analizados ao clicar.

- Utilizei a ***div*** "card" para inserir a principal função do javascript no aplicativo, criar os cards referentes a cada dia analizado.

- Ao final do código, inseri todos os scripts referentes a javascript, e aos arquivos JSON's.

## **Javascript**:

No início do arquivo, eu puxei o conteúdo do arquivo weather.json e adicionei à uma constante.

Para facilitar o entendimento, comentei todo o código, inserindo brevemente a utilização de cada função.

- ***input.addEventListener*** reconhece se a tecla 'Enter' foi precionada, enviando o conteúdo da barra de pesquisa
para a próxima função.

- ***submit()*** identifica se o que foi escrito bate com a definição de uma das duas cidades diferenciadas pela variável 'x' onde 0 é a cidade de Osasco e 1, São Paulo.

- ***climaIndex()*** lê o JSON e guarda os valores necessários para criar os cards da página default, além do título da página com a tag ***h4***;

- ***corpo()*** infelizmente foi uma saída que encontrei para um problema que estava tendo onde quando uma função chamava uma outra, a função ***write()*** imprimia
o resultado em "outra página". Como não consegui respostas de como esse problema estava sendo gerado, resolvi padronizar a página onde as informações estavam sendo colocadas.

- ***write()*** é responsável por gerar os cards, utilizando html, javascript e css para formatar os cards.

- ***index()*** função que seta a página principal como na imagem de referência.

- ***osasco()*** e ***saoPaulo()*** levam o usuário às páginas de cada cidade apenas clicando em seu respectivo nome no menu (caso o usuário não queria escrever)

- ***drop()*** faz o menu na barra de pesquisa aparecer e sumir.

- ***window.onclick*** faz com que o menu suma se o usuário clicar fora do campo de escolha.

- ***filtro()*** é responsável por recolher o que está sendo escrito na barra de pesquisa e filtrar as opções do menu com a finalidade de achar mais rapidamente a cidade desejada.

## **CSS**:

- Separei em dois blocos, os utilizados no html e os do javascript.

- Graças ao bootstrap e aos códicos no arquivo style.css, o aplicativo é completamente reajustável a qualquer resolução aplicada.


## **Considerações Finais**:

Olá, meu nome é Gustavo de Azevedo Cunha e agradeço pela oportunidade.

Neste desafio do processo de recrutamento, utilizei as seguintes linguagens:

- html
- css
- javascript
- bootstrap

Realmente foram ótimos 3 dias quebrando a cabeça para chegar a esse produto final e,
como não tenho costume de utilizar javascript, fiquei feliz com o resultado.


