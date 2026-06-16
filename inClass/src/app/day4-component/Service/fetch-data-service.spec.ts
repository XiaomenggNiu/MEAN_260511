import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('FetchDataService', () => {
  let service: FetchDataService;
  // A tool to mock Http request without the actual network call
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()]
    });
    service = TestBed.inject(FetchDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos with GET', ()=>{
    const mockData = [{ title: 'hello', body: 'world', id: 0, userId: 1 }];
    service.getTodos().subscribe((data)=>{
      expect(data).toEqual(mockData);
    });
    // Make sure the service targets at the exact API
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    // resolve the mock requests with the mock data
    req.flush(mockData);
    // Ensure no unexpected Http Request is left
    httpMock.verify();
  })
});
