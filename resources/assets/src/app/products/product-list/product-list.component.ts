import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

   /**
   * initail properties
   */ 
  modal_title = "Create";
  products: Product[] = [];
  currentPage: number = 0;
  totalProduct: number;
  fromPaege: number;
  lastPage: number;
  pageNumbers: Array<number>;
  closeResult: string;
  inputSearchText: string = null;

  constructor( private product: ProductService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    //  load data into component
     this.getProducts(0, this.inputSearchText, 0);
  }

  /**
  *  @method getgetProducts() : get product list
  *  @param {pageNumber, search_string, filter} : required parameter
  *  @return void : no return type 
  */
  getProducts(page: number, search: string, filter: number): void {
    this.product.getList(page, search, filter)
      .subscribe(
      data => {
        this.products = data["products"];
        this.totalProduct = data['total'];
        this.fromPaege = data['from'];
        this.lastPage = data['last_page'];
        this.pageNumbers = new Array(this.lastPage);
      },
      (error) => {
        console.log(error);
      });
  }


  // pagination
    /**
  *  @method goto() : go to the specific page number after user click on pagination item
  *  @param {page_number, event} : required parameter
  *  @return void : no return type 
  */
  goto(index: number, event: any): void {
    event.preventDefault();
    this.currentPage = index;
    this.getProducts(index, this.inputSearchText, 0);
  }

    /**
  *  @method prev() : go to the previous page after user click on pagination prev
  *  @param {page_number, event} : required parameter
  *  @return void : no return type 
  */
  prev(event: any): void {
    event.preventDefault();
    this.getProducts(--this.currentPage, this.inputSearchText, 0);
  }

    /**
  *  @method goto() : go to the next page after user click on pagination next
  *  @param {page_number, event} : required parameter
  *  @return void : no return type 
  */
  next(event: any): void {
    event.preventDefault();
    this.getProducts(++this.currentPage, this.inputSearchText, 0);
  }


  // model
      /**
  *  @method open() : launch modal of product form
  *  @param {content_modal} : required parameter
  *  @return void : no return type 
  */
  open(content) {
    this.product.selectedProduct = new Product();
    this.modalService.open(content).result.then((result) => {
      this.modal_title = 'Create';
    }, (reason) => {
        // do something with reson
    });
  }

    /**
  *  @method onSubmit() : submit form product form data
  *  @param {form, event} : required parameter
  *  @return void : no return type 
  */
  onSubmit(form: NgForm, close) {

    if (form.valid) {
        if (form.value.id) {
            this.product.update(form.value).subscribe( res => {
                if (res['code'] === 200) {
                    this.getProducts(this.currentPage, this.inputSearchText, 0);
                    this.toastr.success('One has been updated!', 'Update');
                    close();
                }
            },
            err => {
                this.toastr.error('Internet Connection has been problem!', 'Error');
            });
        }
        else {
            this.product.create(form.value).subscribe( res => {
                if (res['code'] === 200) {
                    this.getProducts(0, this.inputSearchText, 0);
                    this.toastr.success('One has been created!', 'Create');
                    close();
                }
            },
            err => {
                this.toastr.error('Internet Connection has been problem!', 'Error');
            });
        }
    }
  }

    /**
  *  @method onEdit() : launch modal of  product form
  *  @param { product, modal} : required parameter
  *  @return void : no return type 
  */
    onEdit(product: Product, modal) {
        this.product.selectedProduct = product;
        console.log(product);
        this.modalService.open(modal).result.then((result) => {
          this.modal_title = 'Create';

        }, (reason) => {
           // do with reson
        });
    }

  /**
  *  @method onDelete() : delete  product form data
  *  @param {product_id} : required parameter
  *  @return void : no return type 
  */
    onDelete(id: number) {
        if (window.confirm('Are you sure?')) {
            this.product.delete(id).subscribe( res => {
                if (res['code'] === 200) {
                    this.getProducts(this.currentPage, this.inputSearchText, 0);
                    this.toastr.warning('One has been deleted!', 'Delete');
                }
            },
            err => {
                this.toastr.error('Internet Connection has been problem!', 'Error');
            });
        }

    }

 /**
  *  @method onSearch() : search  product  list
  *  @param {form_search} : optional parameter
  *  @return void : no return type 
  */
    onSearch( formSearch: NgForm) {
        let keyword = formSearch.value.search || "";
        this.currentPage = 0;
        this.getProducts(this.currentPage, keyword, 0);
        this.inputSearchText = keyword;
    }

        /**
  *  @method onClear() : clear search text from  search box
  *  @param {form} : required parameter
  *  @return void : no return type 
  */
    onClear(formSearch: NgForm) {
      formSearch.reset();
      this.inputSearchText = null;
      if(this.inputSearchText === "") {
        this.currentPage = 0;
      }
      this.getProducts(this.currentPage, this.inputSearchText, 0);
    }

   

}
