import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormGroup,FormControl,Validator, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  newExpenseForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newExpenseForm = this.fb.group({
      addedFunds: [''],
      date:[],

    })
  }

  calculate(){
   console.log(this.newExpenseForm)
  }
}
