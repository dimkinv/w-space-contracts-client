import { TestBed, inject } from '@angular/core/testing';

import { ReactiveContractService } from './reactive-contract.service';

describe('ReactiveContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveContractService]
    });
  });

  it('should be created', inject([ReactiveContractService], (service: ReactiveContractService) => {
    expect(service).toBeTruthy();
  }));
});
