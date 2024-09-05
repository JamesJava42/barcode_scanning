import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {
  private products: Product[] = [];

  constructor(private snackBar: MatSnackBar) {
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = savedProducts;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.saveProductsToLocalStorage();
    this.snackBar.open(`${product.name} added successfully!`, 'Close', { duration: 3000 });
  }

  updateProduct(barcode: string, quantity: number): void {
    const product = this.getProductByBarcode(barcode);
    if (product) {
      product.quantity += quantity;
      product.inStock = product.quantity > 0;
      product.lastUpdated = new Date();
      this.saveProductsToLocalStorage();
      this.snackBar.open(`${product.name} updated successfully!`, 'Close', { duration: 3000 });

      if (product.quantity < 5) {
        this.snackBar.open(`${product.name} is running low on stock!`, 'Close', { duration: 3000 });
      }
    }
  }

  getProductByBarcode(barcode: string): Product | undefined {
    return this.products.find(p => p.barcode === barcode);
  }

  getProducts(): Product[] {
    return this.products;
  }

  private saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}