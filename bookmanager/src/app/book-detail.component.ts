import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import {Book} from "./book";

@Component({
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: BookService) {
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params['id'];

    this.service.getBook(id).subscribe(
      response => this.book = response,
      error => console.log(error)
    );

  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }

  editBook(){
    this.router.navigate(['/books/edit/', this.book.id]);

  }
}
