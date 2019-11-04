import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { ProdcutAddClassicComponent } from "./product/prodcut-add-classic/prodcut-add-classic.component";
import { ProdcutAddReactiveComponent } from "./product/prodcut-add-reactive/prodcut-add-reactive.component";

const routes: Routes = [
  { path: "", component: ProductComponent, pathMatch: "full" },
  { path: "products", component: ProductComponent },
  { path: "products/category/:categoryId", component: ProductComponent },
  { path: "categories", component: CategoryComponent },
  { path: "product-add-classic-form", component: ProdcutAddClassicComponent },
  { path: "product-add-reactive-form", component: ProdcutAddReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
