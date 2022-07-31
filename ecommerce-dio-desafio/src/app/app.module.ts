import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookStoreApComponent } from './components/book-store-ap/book-store-ap.component';
import { FiltersComponent } from './components/book-store-ap/filters/filters.component';
import { ProductListComponent } from './components/book-store-ap/product-list/product-list.component';
import { ProductItemComponent } from './components/book-store-ap/product-list/product-item/product-item.component';
import { BookService } from './components/book-store-ap/product-list/product-item.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookStoreApComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
