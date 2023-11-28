import { TestBed } from '@angular/core/testing';

import { CartQuantityService } from './cart-quantity.service';

describe('CartQuantityService', () => {
  let service: CartQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
