import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { NewBookComponent } from './new-book.component'

const appRoutes = [

  { path: '', redirectTo: 'books', pathMatch: 'full' },

    {path: 'books', component: BookListComponent},
    {path: 'books/new', component: NewBookComponent},
    {path: 'books/:id', component: BookDetailComponent},
    {path: 'books/edit/:id', component: NewBookComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
