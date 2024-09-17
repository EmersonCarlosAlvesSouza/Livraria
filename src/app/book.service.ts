import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  // Função para buscar livros com base no termo de pesquisa (título ou autor)
  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.API_URL}?q=${query}`);
  }
}
