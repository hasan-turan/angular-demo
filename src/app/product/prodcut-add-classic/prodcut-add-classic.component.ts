import { Component, OnInit } from "@angular/core";
import Product from "../product";
import { CategoryService } from "src/app/services/category.service";
import Category from "src/app/category/category";
import { NgForm } from "@angular/forms";
import { ProductService } from "src/app/services/product.service";
import { AlertifyService } from "src/app/services/alertify.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-prodcut-add-classic",
  templateUrl: "./prodcut-add-classic.component.html",
  styleUrls: ["./prodcut-add-classic.component.css"],
  providers: [CategoryService, ProductService]
})
export class ProdcutAddClassicComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}
  model: Product = new Product();
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.showInfo(this.model.productName + " added!");
      this.router.navigateByUrl("/products/category/" + this.model.categoryId);
    });
  }
}
