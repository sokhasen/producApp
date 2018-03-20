webpackJsonp(["main"],{

/***/ "../../../../../resources/assets/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../resources/assets/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../resources/assets/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../resources/assets/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-navbar></app-navbar>\n<div class=\"container\">\n\t<app-product-list></app-product-list>\n</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../resources/assets/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../resources/assets/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../resources/assets/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../resources/assets/src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__ = __webpack_require__("../../../../../resources/assets/src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("../../../../../resources/assets/src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../resources/assets/src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Just an image -->\n<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"http://abi-technologies.com/wp-content/uploads/2013/02/logo-retina.jpg\" height=\"30\" alt=\"\">\n  </a>\n</nav>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../resources/assets/src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../resources/assets/src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../resources/assets/src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-5\">\n    <div class=\"card-header\">\n        <h4 class=\"sub-header float-left\">Product List</h4>\n        <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"open(content)\">Create</button>\n    </div>\n    <div class=\"card-body\">\n    \n    <form   #fsearch=\"ngForm\" method=\"get\" accept-charset=\"utf-8\" (ngSubmit)=\"onSearch(fsearch)\"> \n        <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" name=\"search\" #search=\"ngModel\" [ngModel]=\"inputSearchText\"   placeholder=\"Search Product...\" required>\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"onClear(fsearch)\">clear</button>\n                <button class=\"btn btn-outline-primary\" type=\"submit\" [disabled]=\"fsearch.invalid\">Search</button>\n            </div>\n        </div> \n    </form> \n    <div class=\"table-responsive\">\n        <table class=\"table table-sm table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"text-center\" width=\"80px\">#</th>\n                    <th class=\"text-right\" width=\"100px\">Code</th>\n                    <th class=\"text-left\" width=\"250px\">Name</th>\n                    <th class=\"text-right\" width=\"150px\">Amount</th>\n                    <th class=\"text-right\" width=\"150px\">Price</th>\n                    <th class=\"text-center\" width=\"150px\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let product  of products; let i = index;\">\n                    <td>{{ fromPaege + i }}</td>\n                    <td class=\"text-right\">{{ product.code }}</td>\n                    <td>{{ product.name }}</td>\n                    <td class=\"text-right\">{{ product.amount }}</td>\n                    <td class=\"text-right\">{{ product.price | currency }}</td>\n                    <td class=\"text-center\">\n                        <a class=\"btn btn-link\" (click)=\"onEdit(product, content)\">\n                            <span class=\"glyphicon glyphicon-pencil\"> </span> Edit\n                        </a>\n                        <a class=\"btn btn-link\" (click)=\"onDelete(product.id)\">\n                            <span class=\"glyphicon glyphicon-trash\"> </span> Delete\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div class=\"float-left\">\n            <span>Total : {{ totalProduct }} Product</span>\n        </div>\n        <div class=\"float-right\">\n            <nav *ngIf=\"totalProduct\">\n                <ul class=\"pagination pagination-sm\">\n                    <li class=\"page-item\" [ngClass]=\"{ 'disabled': currentPage === 0}\"><a href=\"#\" (click)=\"prev($event)\" class=\"page-link\">Prev</a></li>\n                    <li class=\"page-item\" *ngFor=\"let p of pageNumbers; let i = index;\" id=\"\" [ngClass]=\"{ 'active' : i === currentPage }\">\n                        <a href=\"#\" class=\"page-link\" *ngIf=\"(i === currentPage) else canClick\">{{ i+1 }}</a>\n                        <ng-template #canClick>\n                            <a href=\"#\"  class=\"page-link\" (click)=\"goto(i, $event)\">{{ i+1 }}</a>\n                        </ng-template>\n                    </li>\n                    <li class=\"page-item\" [ngClass]=\"{ 'disabled': lastPage === currentPage + 1 }\"><a href=\"#\" (click)=\"next($event)\" class=\"page-link\">Next</a></li>\n                </ul>\n            </nav>\n        </div>\n</div>\n    </div>  \n</div>\n\n\n<!-- block modal create and edit  -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n <div class=\"modal-header\">\n   <h4 class=\"modal-title\">{{ modal_title }}</h4>\n   <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n     <span aria-hidden=\"true\">&times;</span>\n   </button>\n </div>\n <div class=\"modal-body\">\n     <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit(f, c)\">\n    <div class=\"form-row\">\n        <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"product.selectedProduct.id\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"validationServer01\">Code</label>\n        <input type=\"number\" name=\"code\" #code=\"ngModel\" [(ngModel)]=\"product.selectedProduct.code\" [ngClass]=\"{ 'is-valid': code.valid && (code.dirty || code.touched), 'is-invalid': !code.valid && (code.dirty || code.touched) }\" class=\"form-control\" id=\"validationServer01\" placeholder=\"Product code\" value=\"\" required>\n         \n        <div class=\"invalid-feedback\">\n          Please input product number.\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"validationServer02\">Name</label>\n        <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"product.selectedProduct.name\" [ngClass]=\"{ 'is-valid': name.valid && (name.dirty || name.touched), 'is-invalid': !name.valid && (name.dirty || name.touched) }\" class=\"form-control\" id=\"validationServer02\" placeholder=\"Product name\" value=\"\" required>\n         \n        <div class=\"invalid-feedback\">\n          Please input product name.\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-row\">\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"validationServer03\">Price</label>\n        <input type=\"number\" name=\"price\" #price=\"ngModel\" [(ngModel)]=\"product.selectedProduct.price\" [ngClass]=\"{ 'is-valid': price.valid && (price.dirty || price.touched), 'is-invalid': !price.valid && (price.dirty || price.touched) }\" class=\"form-control\" id=\"validationServer03\" placeholder=\"Product price\" required>\n         \n        <div class=\"invalid-feedback\">\n          Please input product price.\n        </div>\n      </div>\n      <div class=\"col-md-6 mb-3\">\n        <label for=\"validationServer04\">Amount</label>\n        <input type=\"number\" name=\"amount\" #amount=\"ngModel\" [(ngModel)]=\"product.selectedProduct.amount\" [ngClass]=\"{ 'is-valid': amount.valid && (amount.dirty || amount.touched), 'is-invalid': !amount.valid && (amount.dirty || amount.touched) }\" class=\"form-control\" id=\"validationServer04\" placeholder=\"Product amount\" required>\n        \n        <div class=\"invalid-feedback\">\n          Please input product amount.\n        </div>\n      </div>\n\n    </div>\n    <div class=\"form-group text-right\">\n        <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-outline-primary\">Save</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Cancel</button>\n    </div>\n\n  </form>\n </div>\n <div class=\"modal-footer\">\n </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../resources/assets/src/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product__ = __webpack_require__("../../../../../resources/assets/src/app/products/shared/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../resources/assets/src/app/products/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(product, toastr, modalService) {
        this.product = product;
        this.toastr = toastr;
        this.modalService = modalService;
        /**
        * initail properties
        */
        this.modal_title = "Create";
        this.products = [];
        this.currentPage = 0;
        this.inputSearchText = null;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        //  load data into component
        this.getProducts(0, this.inputSearchText, 0);
    };
    /**
    *  @method getgetProducts() : get product list
    *  @param {pageNumber, search_string, filter} : required parameter
    *  @return void : no return type
    */
    ProductListComponent.prototype.getProducts = function (page, search, filter) {
        var _this = this;
        this.product.getList(page, search, filter)
            .subscribe(function (data) {
            _this.products = data["products"];
            _this.totalProduct = data['total'];
            _this.fromPaege = data['from'];
            _this.lastPage = data['last_page'];
            _this.pageNumbers = new Array(_this.lastPage);
        }, function (error) {
            console.log(error);
        });
    };
    // pagination
    /**
  *  @method goto() : go to the specific page number after user click on pagination item
  *  @param {page_number, event} : required parameter
  *  @return void : no return type
  */
    ProductListComponent.prototype.goto = function (index, event) {
        event.preventDefault();
        this.currentPage = index;
        this.getProducts(index, this.inputSearchText, 0);
    };
    /**
  *  @method prev() : go to the previous page after user click on pagination prev
  *  @param {page_number, event} : required parameter
  *  @return void : no return type
  */
    ProductListComponent.prototype.prev = function (event) {
        event.preventDefault();
        this.getProducts(--this.currentPage, this.inputSearchText, 0);
    };
    /**
  *  @method goto() : go to the next page after user click on pagination next
  *  @param {page_number, event} : required parameter
  *  @return void : no return type
  */
    ProductListComponent.prototype.next = function (event) {
        event.preventDefault();
        this.getProducts(++this.currentPage, this.inputSearchText, 0);
    };
    // model
    /**
*  @method open() : launch modal of product form
*  @param {content_modal} : required parameter
*  @return void : no return type
*/
    ProductListComponent.prototype.open = function (content) {
        var _this = this;
        this.product.selectedProduct = new __WEBPACK_IMPORTED_MODULE_1__shared_product__["a" /* Product */]();
        this.modalService.open(content).result.then(function (result) {
            _this.modal_title = 'Create';
        }, function (reason) {
            // do something with reson
        });
    };
    /**
  *  @method onSubmit() : submit form product form data
  *  @param {form, event} : required parameter
  *  @return void : no return type
  */
    ProductListComponent.prototype.onSubmit = function (form, close) {
        var _this = this;
        if (form.valid) {
            if (form.value.id) {
                this.product.update(form.value).subscribe(function (res) {
                    if (res['code'] === 200) {
                        _this.getProducts(0, _this.inputSearchText, 0);
                        _this.toastr.success('One has been updated!', 'Update');
                        close();
                    }
                }, function (err) {
                    _this.toastr.error('Internet Connection has been problem!', 'Error');
                });
            }
            else {
                this.product.create(form.value).subscribe(function (res) {
                    if (res['code'] === 200) {
                        _this.getProducts(0, _this.inputSearchText, 0);
                        _this.toastr.success('One has been created!', 'Create');
                        close();
                    }
                }, function (err) {
                    _this.toastr.error('Internet Connection has been problem!', 'Error');
                });
            }
        }
    };
    /**
  *  @method onEdit() : launch modal of  product form
  *  @param { product, modal} : required parameter
  *  @return void : no return type
  */
    ProductListComponent.prototype.onEdit = function (product, modal) {
        var _this = this;
        this.product.selectedProduct = product;
        console.log(product);
        this.modalService.open(modal).result.then(function (result) {
            _this.modal_title = 'Create';
        }, function (reason) {
            // do with reson
        });
    };
    /**
    *  @method onDelete() : delete  product form data
    *  @param {product_id} : required parameter
    *  @return void : no return type
    */
    ProductListComponent.prototype.onDelete = function (id) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.product.delete(id).subscribe(function (res) {
                if (res['code'] === 200) {
                    _this.getProducts(0, _this.inputSearchText, 0);
                    _this.toastr.warning('One has been deleted!', 'Delete');
                }
            }, function (err) {
                _this.toastr.error('Internet Connection has been problem!', 'Error');
            });
        }
    };
    /**
     *  @method onSearch() : search  product  list
     *  @param {form_search} : optional parameter
     *  @return void : no return type
     */
    ProductListComponent.prototype.onSearch = function (formSearch) {
        var keyword = formSearch.value.search || "";
        this.currentPage = 0;
        this.getProducts(this.currentPage, keyword, 0);
        this.inputSearchText = keyword;
    };
    /**
*  @method onClear() : clear search text from  search box
*  @param {form} : required parameter
*  @return void : no return type
*/
    ProductListComponent.prototype.onClear = function (formSearch) {
        formSearch.reset();
        this.inputSearchText = null;
        if (this.inputSearchText === "") {
            this.currentPage = 0;
        }
        this.getProducts(this.currentPage, this.inputSearchText, 0);
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../resources/assets/src/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../resources/assets/src/app/products/product-list/product-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../resources/assets/src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\"> \n    <div class=\"panel-body\">\n        <app-product-list></app-product-list>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../resources/assets/src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../resources/assets/src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../resources/assets/src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/products/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__("../../../../../resources/assets/src/app/products/shared/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* config header*/
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productURL = 'http://localhost:8000/api/products';
        this.selectedProduct = new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */]();
    }
    /**
      *  @method getList() : get product list
      *  @param { page_number, search_string, filter } : required parameter
      *  @return Observable : return Observable of products
      */
    ProductService.prototype.getList = function (pageNumber, searchStr, filterGroup) {
        var page = pageNumber + 1;
        var search = searchStr ? searchStr : '%20';
        var filter = filterGroup ? filterGroup : null;
        return this.http.get(this.productURL + "/?page=" + page + "&search=" + search + "&filter=" + filter);
    };
    /**
    *  @method delete() : delete any product
    *  @param { product_id } : required parameter
    *  @return Observable : return Observable of product
    */
    ProductService.prototype.delete = function (id) {
        var url = this.productURL + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    /**
    *  @method update() : update any product
    *  @param { new_product_data } : required parameter
    *  @return Observable : return Observable of products
    */
    ProductService.prototype.update = function (product) {
        return this.http.put(this.productURL + "/" + product.id, product, httpOptions);
    };
    /**
     *  @method create() : create new product
     *  @param { product_data } : required parameter
     *  @return Observable : return Observable of product
     */
    ProductService.prototype.create = function (product) {
        return this.http.post(this.productURL, product, httpOptions);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/app/products/shared/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "id", {
        /**
        *  @method id() : get value from id property
        *  @param { void } : no parameter
        *  @return number : return id
        */
        get: function () {
            return this._id;
        },
        /**
      *  @method id() : set value to id property
      *  @param { value } : required parameter
      *  @return void : no return type
      */
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        /**
        *  @method name() : get value from name property
        *  @param { void } : no parameter
        *  @return string : return name
        */
        get: function () {
            return this._name;
        },
        /**
        *  @method name() : set value to name property
        *  @param { value } : required parameter
        *  @return void : no return type
        */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        /**
        *  @method price() : get value from price property
        *  @param { void } : no parameter
        *  @return number : return price
        */
        get: function () {
            return this._price;
        },
        /**
      *  @method price() : set value to price property
      *  @param { value } : required parameter
      *  @return void : no return type
      */
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "amount", {
        /**
        *  @method amount() : get value from amount property
        *  @param { void } : no parameter
        *  @return number : return amount
        */
        get: function () {
            return this._amount;
        },
        /**
        *  @method amount() : set value to amount property
        *  @param { value } : required parameter
        *  @return void : no return type
        */
        set: function (amount) {
            this._amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "code", {
        /**
        *  @method code() : get value from code property
        *  @param { void } : no parameter
        *  @return number : return code
        */
        get: function () {
            return this._code;
        },
        /**
        *  @method code() : set value to code property
        *  @param { value } : required parameter
        *  @return void : no return type
        */
        set: function (code) {
            this._code = code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "image", {
        /**
        *  @method image() : get value from image property
        *  @param { void } : no parameter
        *  @return string : return image
        */
        get: function () {
            return this._image;
        },
        /**
      *  @method image() : set value to image property
      *  @param { value } : required parameter
      *  @return void : no return type
      */
        set: function (image) {
            this._image = image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "created_at", {
        /**
         *  @method created_at() : get value from created_at property
         *  @param { void } : no parameter
         *  @return string : return created_at
         */
        get: function () {
            return this._created_at;
        },
        /**
        *  @method created_at() : set value to created_at property
        *  @param { value } : required parameter
        *  @return void : no return type
        */
        set: function (date) {
            this._created_at = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "updated_at", {
        /**
         *  @method updated_at() : get value from updated_at property
         *  @param { void } : no parameter
         *  @return string : return updated_at
         */
        get: function () {
            return this._updated_at;
        },
        /**
        *  @method updated_at() : set value to updated_at property
        *  @param { value } : required parameter
        *  @return void : no return type
        */
        set: function (date) {
            this._updated_at = date;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());



/***/ }),

/***/ "../../../../../resources/assets/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../resources/assets/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../resources/assets/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../resources/assets/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../resources/assets/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map