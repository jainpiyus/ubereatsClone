import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRasturantComponent } from './single-rasturant.component';

describe('SingleRasturantComponent', () => {
  let component: SingleRasturantComponent;
  let fixture: ComponentFixture<SingleRasturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRasturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRasturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
