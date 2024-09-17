import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookService } from './book.service';

@NgModule({
    declarations: [
      AppComponent,
      BookSearchComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule // Adicione aqui
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  