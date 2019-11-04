import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import Category from "../category/category";
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = "http://localhost:3000/categories";
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data => {
        console.log("Category data: ", JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = "Category error: " + error.error;
    } else {
      errorMessage = "Category error: Unknown error";
    }
    return throwError(errorMessage);
  }
}
