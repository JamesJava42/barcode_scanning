import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcodeScanningService {
  private scannedCodeSubject = new BehaviorSubject<string | null>(null);

  getScannedCode() {
    return this.scannedCodeSubject.asObservable();
  }

  updateScannedCode(code: string) {
    this.scannedCodeSubject.next(code);
  }

  clearScannedCode() {
    this.scannedCodeSubject.next(null);
  }
}
