import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorService } from 'src/app/services/calculator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [CalculatorComponent],
      providers: [CalculatorService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should be able to calculate a Fibonacci number", function () {
    component.numb = 8;
    const restService = TestBed.inject(CalculatorService);
    const data = { result: 21 };
    spyOn(restService, 'getFibonacci').and.returnValue(of(data));
    component.calculate();
    fixture.detectChanges();
    expect(component.result.result).toEqual(21);
  });

});
