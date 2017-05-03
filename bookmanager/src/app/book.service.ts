import { Injectable } from '@angular/core';
import { Book } from './book';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {connectableObservableDescriptor} from "rxjs/observable/ConnectableObservable";

@Injectable()
export class BookService {


  constructor(private http: Http ) {
  }

  private apiUrl = "/api";

  getBooks(): Observable<Book[]> {

    return this.http.get(this.apiUrl + "/books")
      .map(this.handleData)
      .catch(this.handleError);

  }

  getBook(id: number | string): Observable<Book> {

    return this.http.get(this.apiUrl + "/books/" + id)
      .map(this.handleData)
      .catch(this.handleError);
  }

  private addBook(book: Book): Observable<Book>{

    return this.http.post(this.apiUrl + "/books", book)
      .map(this.handleData)
      .catch(this.handleError);
  }

  private updateBook(book: Book) {

    return this.http.put(this.apiUrl + "/books/" + book.id, book)
      .map(this.handleData)
      .catch(this.handleError);

  }

  saveBook(book: Book) {
    if (book.id == undefined){
      return this.addBook(book);
    } else {
      return this.updateBook(book);
    }
  }

  removeBook(id: number) {

    return this.http.delete(this.apiUrl + "/books/" + id);
  }

  private handleData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError (error: Response | any) {
    console.log("error");

    return Observable.throw("Error")

  }

}
