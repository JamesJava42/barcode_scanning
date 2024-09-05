import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductManagementService } from '../../services/product-management.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,CommonModule,ProductComponent,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  searchQuery: string = '';

  constructor(private productService: ProductManagementService) {
    this.products = this.productService.getProducts();
  }

  filterProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
