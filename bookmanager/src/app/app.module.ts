import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { routing } from './app.routing';
import { NewBookComponent } from './new-book.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [AppComponent, BookDetailComponent, BookListComponent, NewBookComponent],
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing, BsDropdownModule.forRoot(),
    TabsModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [BookService]
})
export class AppModule { }

