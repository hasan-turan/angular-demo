import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";
import { ProductFilterPipe } from "./product/product-filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProdcutAddClassicComponent } from "./product/prodcut-add-classic/prodcut-add-classic.component";
import { ProdcutAddReactiveComponent } from "./product/prodcut-add-reactive/prodcut-add-reactive.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./services/authentication.service";
import LoginGuard from "./login/login.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProdcutAddClassicComponent,
    ProdcutAddReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
