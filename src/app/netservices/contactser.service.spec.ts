import { TestBed, inject } from '@angular/core/testing';

import { ContactserService } from './contactser.service';

describe('ContactserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactserService]
    });
  });

  it('should be created', inject([ContactserService], (service: ContactserService) => {
    expect(service).toBeTruthy();
  }));
});
