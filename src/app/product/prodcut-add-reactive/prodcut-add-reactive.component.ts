import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import Product from "../product";
import { CategoryService } from "src/app/services/category.service";
import Category from "src/app/category/category";
import { ProductService } from "src/app/services/product.service";
import { AlertifyService } from "src/app/services/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-prodcut-add-reactive",
  templateUrl: "./prodcut-add-reactive.component.html",
  styleUrls: ["./prodcut-add-reactive.component.css"],
  providers: [CategoryService, ProductService]
})
export class ProdcutAddReactiveComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}
  productForm: FormGroup;
  product: Product = new Product();
  categories: Category[];
  createForm() {
    this.productForm = this.formBuilder.group({
      id: [""],
      categoryId: ["", Validators.required],
      productName: ["", [Validators.required, Validators.minLength(3)]],
      quantityPerUnit: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      imageUrl: ""
    });
  }
  add() {
    if (this.productForm.valid) {
      this.product = Object.assign({}, this.productForm.value);
      this.productService.addProduct(this.product).subscribe(data => {
        this.alertifyService.showInfo(this.product.productName + " added!");
        this.router.navigateByUrl(
          "/products/category/" + this.product.categoryId
        );
      });
    } else {
      this.alertifyService.showError("Please fill all required fields");
      Object.keys(this.productForm.controls).forEach(key => {
        var control = this.productForm.controls[key];
        if (control.status === "INVALID") {
          this.productForm.controls[key].markAsTouched();
        }
      });
    }
  }
  listCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  ngOnInit() {
    this.listCategories();
    this.createForm();
  }
}
