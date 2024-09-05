import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BarcodeScannerComponent } from './components/barcode-scanner/barcode-scanner.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'scan', component: BarcodeScannerComponent },
  { path: '**', redirectTo: '/home' }
];
