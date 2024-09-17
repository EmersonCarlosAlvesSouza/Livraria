import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  searchTerm: string = ''; // Armazena o termo de busca
  books: any[] = []; // Armazena os livros retornados pela API
  favorites: any[] = []; // Armazena os livros favoritos
  error: string = ''; // Armazena erros, se houver
  filterTag: string = ''; // Armazena o valor da tag para filtrar os favoritos

  constructor(private bookService: BookService) {}

  // Função chamada quando o usuário submete o termo de busca
  searchBooks(): void {
    if (this.searchTerm) {
      this.bookService.searchBooks(this.searchTerm).subscribe(
        (response) => {
          this.books = response.items || []; // Lista de livros
        },
        (error) => {
          this.error = 'Erro ao buscar livros. Tente novamente.';
        }
      );
    }
  }

  // Função para favoritar um livro
  addToFavorites(book: any): void {
    const favorite = {
      ...book,
      notes: '',
      rating: 0,
      tags: ''
    };
    this.favorites.push(favorite);
  }

  // Função para atualizar as notas, avaliação e tags
  updateFavorite(favorite: any, notes: string, rating: number, tags: string): void {
    favorite.notes = notes;
    favorite.rating = rating;
    favorite.tags = tags;
  }

  // Função para filtrar os favoritos com base nas tags
  filterFavoritesByTag(): any[] {
    if (!this.filterTag) {
      return this.favorites; // Se não houver tag digitada, mostrar todos os favoritos
    }
    return this.favorites.filter(fav => fav.tags.toLowerCase().includes(this.filterTag.toLowerCase()));
  }
}
