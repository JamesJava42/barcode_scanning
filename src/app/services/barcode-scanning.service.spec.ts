import { TestBed } from '@angular/core/testing';

import { BarcodeScanningService } from './barcode-scanning.service';

describe('BarcodeScanningService', () => {
  let service: BarcodeScanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeScanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
