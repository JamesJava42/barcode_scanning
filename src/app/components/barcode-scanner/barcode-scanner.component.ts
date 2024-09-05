import { Component, OnInit } from '@angular/core';
import { ProductManagementService } from '../../services/product-management.service';
import { BarcodeScanningService } from '../../services/barcode-scanning.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';  // Import the ZXingScannerModule
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  imports: [RouterModule,CommonModule, ZXingScannerModule,MatProgressSpinnerModule ],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.css'
})
export class BarcodeScannerComponent  implements OnInit{
  isLoading = true;  // Initialize isLoading property

  constructor(private productService: ProductManagementService) {}
  ngOnInit(): void {
    console.log("Barcode ");
  }

  // Adjusted method to handle the event object and extract the scanned text
  onCodeResult(event: any) {  // Accepting 'any' type to handle the event object
    const result: string = event.text || ''; // Safely access the text property
    console.log('Scanned code:', result);
    this.processScannedCode(result);  // Pass the extracted text to the processing method
  }

  // Method to handle further processing of the scanned code
  processScannedCode(scannedCode: string) {
    // Check if the product already exists in the product list
    const product = this.productService.getProductByBarcode(scannedCode);
    if (product) {
      this.updateProductQuantity(product);
    } else {
      this.addNewProduct(scannedCode);
    }
  }

  // Method to update the quantity of an existing product
  updateProductQuantity(product: Product) {
    product.quantity += 1;  // Increment the quantity
    product.lastUpdated = new Date();  // Update the lastUpdated timestamp
    this.productService.updateProduct(product.barcode, product.quantity);
    console.log(`Updated product: ${product.name}, New quantity: ${product.quantity}`);
  }

  // Method to add a new product based on the scanned code
  addNewProduct(scannedCode: string) {
    const newProduct: Product = {
      id: this.generateUniqueId(),
      name: 'New Product',
      category: 'Unknown',
      price: 0,
      quantity: 1,
      inStock: true,
      barcode: scannedCode,
      lastUpdated: new Date(),
      imageUrl: ''  // Ensure the imageUrl is provided
,
      checkAvailability: function (): boolean {
        throw new Error('Function not implemented.');
      }
    };
    this.productService.addProduct(newProduct);
    console.log('Added new product:', newProduct);
  }

  // Utility method to generate a unique ID for new products
  generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9); // Example of generating a simple unique ID
  }
}
