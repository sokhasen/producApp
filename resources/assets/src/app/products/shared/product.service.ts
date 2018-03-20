import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';

/* config header*/
const httpOptions = {
    headers:  new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  @Injectable()
  export class ProductService {
      private productURL: string = 'http://localhost:8000/api/products';
      public selectedProduct: Product = new Product();
      constructor(private http: HttpClient) {  }

  /**
    *  @method getList() : get product list 
    *  @param { page_number, search_string, filter } : required parameter
    *  @return Observable : return Observable of products 
    */
      getList( pageNumber: number, searchStr: string, filterGroup: number): Observable<Array<Product>> {
            let page = pageNumber + 1;
            let search = searchStr?searchStr:'%20';
            let filter =  filterGroup?filterGroup:null;
            return this.http.get<Array<Product>>(this.productURL+"/?page="+page+"&search="+search+"&filter="+filter);
        }

    /**
    *  @method delete() : delete any product 
    *  @param { product_id } : required parameter
    *  @return Observable : return Observable of product
    */
        delete(id: number): Observable<Product> {
            const url = `${this.productURL}/${id}`;
            return this.http.delete<Product>(url, httpOptions);
        }

    /**
    *  @method update() : update any product 
    *  @param { new_product_data } : required parameter
    *  @return Observable : return Observable of products 
    */
        update (product: Product): Observable<Product> {

            return this.http.put<Product>(this.productURL + "/"+ product.id, product, httpOptions);
        }

      
   /**
    *  @method create() : create new product 
    *  @param { product_data } : required parameter
    *  @return Observable : return Observable of product 
    */
      create (product: Product): Observable<Product> {
        return this.http.post<Product>(this.productURL, product, httpOptions);
      }
}
