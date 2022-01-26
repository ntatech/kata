import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gbsu-ftb-lai-form',
  templateUrl: './gbsu-ftb-lai-form.component.html'
})
export class GbsuFtbLaiFormComponent implements OnInit {
	    
  @Output() submitNumberOutput = new EventEmitter<string>();

  constructor() {};

  ngOnInit(): void {};

  onSubmit(form: NgForm) {
    this.submitNumberOutput.emit(form.value.inputNum);
    form.reset();
  }  

}
