import { TestBed } from '@angular/core/testing';

import { DevtoPostService } from './devto-post.service';

describe('DevtoPostService', () => {
  let service: DevtoPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
