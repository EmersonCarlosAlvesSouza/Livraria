# BookExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Operadores RxJS utilizados no código:
Neste código, você está usando três operadores RxJS principais: debounceTime, switchMap, e catchError. Vamos detalhar cada um deles:

debounceTime(500):

O que é?: Este operador faz com que um evento só seja emitido se um certo intervalo de tempo (neste caso, 500 milissegundos) passar sem que outro evento seja disparado.

switchMap():

O que é?: Este operador cancela uma requisição anterior se uma nova for disparada antes da conclusão. Ele é útil quando você quer garantir que apenas a última operação seja executada (exemplo: quando o usuário continua digitando uma busca, queremos apenas o último termo digitado).

catchError():

O que é?: Este operador permite capturar e lidar com erros em um fluxo de dados assíncrono. No caso de uma falha na requisição HTTP, ele captura o erro e permite executar uma ação de fallback ou mostrar uma mensagem de erro ao usuário.
