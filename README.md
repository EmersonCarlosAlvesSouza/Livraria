### Projeto Livraria - Angular
Este projeto é uma aplicação web desenvolvida em Angular que permite aos usuários pesquisar, favoritar e gerenciar seus livros favoritos.

### Funcionalidades
Pesquisa de Livros: Os usuários podem buscar livros pelo título ou autor. <br>
Favoritar Livros: Possibilidade de marcar livros como favoritos.<br>
Gerenciamento de Favoritos: Visualização e edição de livros favoritos.<br>

### Tecnologias Utilizadas
Angular: Estrutura principal do front-end.<br>
API: Google Books API<br>
CSS: Estilização da interface.<br>
Git: Controle de versão.<br>
Node.js e npm: Utilizados para o gerenciamento de pacotes e execução local do projeto.<br>


# Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:<br>

Node.js (versão 12 ou superior)<br>
npm (gerenciador de pacotes do Node.js)<br>
Angular CLI (para rodar projetos Angular)<br>

# Para instalar o Angular CLI, utilize o comando:

npm install -g @angular/cli

# Instalando as Dependências
Com o terminal aberto no diretório do projeto, instale as dependências necessárias utilizando o npm:<br>

npm install
<br>
# Executando o Projeto
Após a instalação das dependências, execute o servidor de desenvolvimento Angular com o comando:<br>

ng serve
<br>
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
