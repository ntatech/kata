import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GbsuFtbLaiService } from '../gbsu-ftb-lai.service';

@Component({
  selector: 'app-gbsu-ftb-lai',
  templateUrl: './gbsu-ftb-lai.component.html'
})
export class GbsuFtbLaiComponent implements OnInit, OnDestroy {

  constructor(private gbsuFtbLaiService: GbsuFtbLaiService) { }
  
  responses: string[] = [];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: string): void {
     this.gbsuFtbLaiService.convertNumber(inputNumber).subscribe(data => {
		this.responses.push(inputNumber + " and the result is " + data.result);
    });
  }
}
