// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import { GbsuFtbLaiService } from './gbsu-ftb-lai.service';


describe('Gbsu service', () => {

  let httpMock: HttpTestingController;
  let service: GbsuFtbLaiService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ GbsuFtbLaiService ]
  }));

  beforeEach(inject([GbsuFtbLaiService, HttpTestingController], (s, h) => {
    service = s;
    httpMock = h;
  }));
  

  //specs
  it('return Gbsu when input is 1', () => {
	
    // Make an HTTP GET request
    service.convertNumber('1')
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual('Gbsu')
      );
      
    const req = httpMock.expectOne('http://localhost:8080/gbsu-ftb-lai/1');      
        
    expect(req.request.method).toEqual('GET');
    
    req.flush('Gbsu');	
    httpMock.verify();
	
  });

  
})