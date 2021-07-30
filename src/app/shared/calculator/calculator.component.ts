import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from "rxjs";
import { CalculatorService } from "src/app/services/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

export class CalculatorComponent implements OnInit {
  subscription!: Subscription;
  public numbToShow!: string;
  public errorMsg!: string;
  public result: any = {};
  public numb!: number;
  constructor(private calculatorService: CalculatorService, private http: HttpClient) { }


  ngOnInit(): void {

  }

  calculate() {
    let number = this.numb;
    if (number != null && number >= 0) {
      this.errorMsg = '';
      this.subscription = this.calculatorService.getFibonacci(number).subscribe(data => {
        this.numbToShow = number.toString();
        this.result = data;
        console.log(this.result);
      },
        error => {
          console.log(<any>error);
        });
    } else {
      this.errorMsg = "No puede ingresar numeros negativos ni letras."
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
