import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,ProductListComponent,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToProducts() {
    this.router.navigate(['/products']);  // Navigate to the products page
  }

  navigateToScan() {
    this.router.navigate(['/scan']);  // Navigate to the scan page
  }

  // Example of handling route parameters
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
    });
  }

}
