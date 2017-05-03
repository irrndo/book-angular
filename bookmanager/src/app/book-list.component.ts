import { Component } from '@angular/core';
import { BookService } from './book.service';
import {Book} from "./book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './book-list.component.html'
})
export class BookListComponent {

  books: Book[];

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {

    this.loadBooks();
  }

  loadBooks() {

    this.service.getBooks().subscribe(
      response => this.books = response,
      error => console.log(error)
    );

  }

  removeBook(id){
    this.service.removeBook(id).subscribe((res) => {
      console.log('DELETE RESPONSE: ' + res);
      this.loadBooks();
    });

  }
}
