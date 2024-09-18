### Projeto Livraria - Angular
Este projeto é uma aplicação web desenvolvida em Angular que permite aos usuários pesquisar, favoritar e gerenciar seus livros favoritos. A aplicação também possui uma melhoria de estilização dos livros favoritos, além de permitir navegação entre páginas.

### Funcionalidades
Pesquisa de Livros: Os usuários podem buscar livros pelo título ou autor.
Favoritar Livros: Possibilidade de marcar livros como favoritos.
Gerenciamento de Favoritos: Visualização e edição de livros favoritos.

### Tecnologias Utilizadas
Angular: Estrutura principal do front-end.
CSS: Estilização da interface.
Git: Controle de versão.
Node.js e npm: Utilizados para o gerenciamento de pacotes e execução local do projeto.



Aqui está um modelo de README.md detalhado para o seu projeto Angular, incluindo as instruções de execução, explicação sobre as funcionalidades, e o processo de contribuição.

Projeto Livraria - Angular
Este projeto é uma aplicação web desenvolvida em Angular que permite aos usuários pesquisar, favoritar e gerenciar seus livros favoritos. A aplicação também possui uma melhoria de estilização dos livros favoritos, além de permitir navegação entre páginas.

Funcionalidades
Pesquisa de Livros: Os usuários podem buscar livros pelo título ou autor.
Favoritar Livros: Possibilidade de marcar livros como favoritos.
Gerenciamento de Favoritos: Visualização e edição de livros favoritos.
Melhoria de Estilização: Centralização da exibição dos favoritos, incluindo campos como a imagem do livro, o nome do autor e as notas pessoais.
Paginação: Criação de páginas de navegação para explorar a lista de livros.
Tecnologias Utilizadas
Angular: Estrutura principal do front-end.
CSS: Estilização da interface.
Git: Controle de versão.
Node.js e npm: Utilizados para o gerenciamento de pacotes e execução local do projeto.
Instalação e Execução
Siga os passos abaixo para executar o projeto localmente.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Angular CLI (para rodar projetos Angular)




## Instalação e Execução
Siga os passos abaixo para executar o projeto localmente.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Angular CLI (para rodar projetos Angular)

# Para instalar o Angular CLI, utilize o comando:

npm install -g @angular/cli

# Instalando as Dependências
Com o terminal aberto no diretório do projeto, instale as dependências necessárias utilizando o npm:

npm install

# Executando o Projeto
Após a instalação das dependências, execute o servidor de desenvolvimento Angular com o comando:

ng serve

O servidor será iniciado e a aplicação estará disponível no navegador no endereço: http://localhost:4200.

## Operadores RxJS utilizados no código:
debounceTime(500):

O que é?: Este operador faz com que um evento só seja emitido se um certo intervalo de tempo (neste caso, 500 milissegundos) passar sem que outro evento seja disparado.

switchMap():

O que é?: Este operador cancela uma requisição anterior se uma nova for disparada antes da conclusão. Ele é útil quando você quer garantir que apenas a última operação seja executada (exemplo: quando o usuário continua digitando uma busca, queremos apenas o último termo digitado).

catchError():

O que é?: Este operador permite capturar e lidar com erros em um fluxo de dados assíncrono. No caso de uma falha na requisição HTTP, ele captura o erro e permite executar uma ação de fallback ou mostrar uma mensagem de erro ao usuário.

## Melhorias que pode ser feitas:
Criação de teste unitarios.
Criação de Paginas para fazer a navegação.
Melhorar a estilização na quando adicionado ao "Favorito"

# Estilização
A estilização foi feita usando a paleta de cores do site Coco Bambu com o plugin CSS Peeper.
Cores escolhidas:
000000
c6aa69
ffffff
29100b
441910
