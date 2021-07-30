import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  })
};

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  constructor(private http: HttpClient) {

  }
  getFibonacci(numb: number) {
    return this.http.get(environment.url +
      "/calcular/" + numb, httpOptions);
  }
}
