import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule,ProductComponent,ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;  // Use @Input to bind data from parent component

  constructor(private router: Router) { }

  // This method could navigate to a product details page, for example
  openProductDetail() {
    // Example: Navigate to a product details page using the router
    this.router.navigate(['/product', this.product.id]);
  }
  getBorderColor(): string {
    return this.product.inStock ? 'green' : 'red';
  }
}