webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'body',
        template: __webpack_require__(186)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_list_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_detail_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_book_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tabs__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__book_detail_component__["a" /* BookDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__book_list_component__["a" /* BookListComponent */], __WEBPACK_IMPORTED_MODULE_9__new_book_component__["a" /* NewBookComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */], __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot()],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__book_service__["a" /* BookService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_detail_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_book_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var appRoutes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_1__book_list_component__["a" /* BookListComponent */] },
    { path: 'books/new', component: __WEBPACK_IMPORTED_MODULE_3__new_book_component__["a" /* NewBookComponent */] },
    { path: 'books/:id', component: __WEBPACK_IMPORTED_MODULE_2__book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'books/edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__new_book_component__["a" /* NewBookComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <a class=\"navbar-brand\" href=\"#\"></a>\n\n</header>\n\n<div class=\"app-body\">\n\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/books']\"><i class=\"icon-book-open\"></i> My library <span class=\"badge badge-info\">NEW</span></a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <br>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.conainer-fluid -->\n  </main>\n</div>\n\n<footer class=\"app-footer\">\n  Book Manager 1.0 &copy; 2017.\n  <span class=\"float-right\">Powered by TheBook Inc.\n    </span>\n</footer>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> ID {{book?.id}}\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6>Title</h6>\n          <p>{{book?.title}}</p>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6>Author</h6>\n          <p>{{book?.author}}</p>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6>Rating</h6>\n          <p>{{book?.rating}}/5</p>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6>Description</h6>\n          <p>{{book?.description}}</p>\n        </div>\n      </div><!--/.row-->\n    </div>\n    <div class=\"card-footer\">\n      <button (click)=\"editBook()\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>\n        Edit\n      </button>\n      <button (click)=\"gotoBooks()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Return</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> My books\n    </div>\n    <div class=\"card-block\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th>ID</th>\n          <th>Title</th>\n          <th>Author</th>\n          <th>Rating</th>\n          <th></th>\n          <th></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let book of books\">\n          <td>{{book.id}}</td>\n          <td>{{book.title}}</td>\n          <td>{{book.author}}</td>\n          <td>{{book.rating}}/5</td>\n          <td class=\"table-col-button-icon\">\n            <button [routerLink]=\"['/books', book.id]\" type=\"button\" class=\"btn btn-info btn-sm\"><i\n              class=\"icon-info\"></i>\n            </button>\n          </td>\n          <td class=\"table-col-button-icon\">\n            <button (click)=\"removeBook(book.id)\" type=\"button\" class=\"btn btn-danger btn-sm\"><i\n              class=\"icon-trash\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"card-footer\">\n      <button [routerLink]=\"['/books/new']\" type=\"button\" class=\"btn btn-primary\"><i class=\"icon-plus\"></i>&nbsp; Add book\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> {{book?.title}}\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input [ngModel]=\"book?.title\" (ngModelChange)=\"book.title=$event\" type=\"text\" class=\"form-control\"\n                   id=\"title\" placeholder=\"Enter the title\">\n          </div>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"author\">Author</label>\n            <input [ngModel]=\"book?.author\" (ngModelChange)=\"book.author=$event\" type=\"text\" class=\"form-control\"\n                   id=\"author\" placeholder=\"Author\">\n          </div>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"author\">Rating</label>\n            <select [ngModel]=\"book?.rating\" (ngModelChange)=\"book.rating=$event\" type=\"text\" class=\"form-control\"\n                   id=\"rating\" placeholder=\"Author\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n            </select>\n          </div>\n        </div>\n      </div><!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea [ngModel]=\"book?.description\" (ngModelChange)=\"book.description=$event\" id=\"description\" rows=\"9\"\n                      class=\"form-control\" placeholder=\"Description...\"></textarea>\n          </div>\n        </div>\n      </div><!--/.row-->\n    </div>\n    <div class=\"card-footer\">\n      <button (click)=\"saveBook()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i>\n        Submit\n      </button>\n      <button (click)=\"goBack()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Cancel</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.apiUrl = "/api";
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.apiUrl + "/books")
            .map(this.handleData)
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.http.get(this.apiUrl + "/books/" + id)
            .map(this.handleData)
            .catch(this.handleError);
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.apiUrl + "/books", book)
            .map(this.handleData)
            .catch(this.handleError);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.apiUrl + "/books/" + book.id, book)
            .map(this.handleData)
            .catch(this.handleError);
    };
    BookService.prototype.saveBook = function (book) {
        if (book.id == undefined) {
            return this.addBook(book);
        }
        else {
            return this.updateBook(book);
        }
    };
    BookService.prototype.removeBook = function (id) {
        return this.http.delete(this.apiUrl + "/books/" + id);
    };
    BookService.prototype.handleData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    BookService.prototype.handleError = function (error) {
        console.log("error");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Error");
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
    function BookDetailComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        this.service.getBook(id).subscribe(function (response) { return _this.book = response; }, function (error) { return console.log(error); });
    };
    BookDetailComponent.prototype.gotoBooks = function () {
        this.router.navigate(['/books']);
    };
    BookDetailComponent.prototype.editBook = function () {
        this.router.navigate(['/books/edit/', this.book.id]);
    };
    return BookDetailComponent;
}());
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        template: __webpack_require__(187)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _c || Object])
], BookDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = (function () {
    function BookListComponent(router, activatedRoute, service) {
        this.router = router;
        this.service = service;
        this.loadBooks();
    }
    BookListComponent.prototype.loadBooks = function () {
        var _this = this;
        this.service.getBooks().subscribe(function (response) { return _this.books = response; }, function (error) { return console.log(error); });
    };
    BookListComponent.prototype.removeBook = function (id) {
        var _this = this;
        this.service.removeBook(id).subscribe(function (res) {
            console.log('DELETE RESPONSE: ' + res);
            _this.loadBooks();
        });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        template: __webpack_require__(188)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _c || Object])
], BookListComponent);

var _a, _b, _c;
//# sourceMappingURL=book-list.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewBookComponent = (function () {
    function NewBookComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    NewBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        if (id != undefined) {
            this.service.getBook(id).subscribe(function (response) { return _this.book = response; }, function (error) { return console.log(error); });
        }
        else {
            this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */]();
        }
    };
    NewBookComponent.prototype.saveBook = function () {
        var _this = this;
        console.log("Book en new-book:" + this.book);
        this.service.saveBook(this.book).subscribe(function (res) {
            _this.goBack();
        });
    };
    NewBookComponent.prototype.goBack = function () {
        console.log('Navigation to /books');
        this.router.navigate(['/books']);
    };
    return NewBookComponent;
}());
NewBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-new-book',
        template: __webpack_require__(189),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _c || Object])
], NewBookComponent);

var _a, _b, _c;
//# sourceMappingURL=new-book.component.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.bundle.js.map