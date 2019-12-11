/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExampleGaurdService } from './example-gaurd.service';

describe('Service: ExampleGaurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleGaurdService]
    });
  });

  it('should ...', inject([ExampleGaurdService], (service: ExampleGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
