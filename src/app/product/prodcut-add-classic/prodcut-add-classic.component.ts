import { Component, OnInit } from "@angular/core";
import Product from "../product";
import { CategoryService } from "src/app/services/category.service";
import Category from "src/app/category/category";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-prodcut-add-classic",
  templateUrl: "./prodcut-add-classic.component.html",
  styleUrls: ["./prodcut-add-classic.component.css"],
  providers: [CategoryService]
})
export class ProdcutAddClassicComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  model: Product = new Product();
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  add(form:NgForm){

  }
}
