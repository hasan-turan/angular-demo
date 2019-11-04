import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import Product from "../product/product";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/products";
  getProducts(categoryId: number = 0): Observable<Product[]> {
    let path = this.path;
    if (categoryId > 0) path += "?categoryId=" + categoryId;

    return this.http.get<Product[]>(path).pipe(
      tap(data => {
        console.log("Product data: ", JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }
  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.path, product, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Token"
        })
      })
      .pipe(
        tap(data => {
          console.log("Product data: ", JSON.stringify(data));
        }),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = "Product error: " + error.error;
    } else {
      errorMessage = "Product error: Unknown error";
    }
    return throwError(errorMessage);
  }
}
