import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledDeliverModelComponent } from './sheduled-deliver-model.component';

describe('SheduledDeliverModelComponent', () => {
  let component: SheduledDeliverModelComponent;
  let fixture: ComponentFixture<SheduledDeliverModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduledDeliverModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduledDeliverModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
