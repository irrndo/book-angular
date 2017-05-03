import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "./book";


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book: Book;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: BookService) {

  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id != undefined) {

      this.service.getBook(id).subscribe(
        response => this.book = response,
        error => console.log(error)
      );

    }
    else {
      this.book = new Book();
    }
  }

  saveBook() {
    console.log("Book en new-book:" + this.book);
    this.service.saveBook(this.book).subscribe((res) => {
      this.goBack();
    });

  }

  goBack(){
    console.log('Navigation to /books')
    this.router.navigate(['/books']);
  }

}
