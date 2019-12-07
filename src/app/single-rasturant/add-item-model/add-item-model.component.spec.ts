import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemModelComponent } from './add-item-model.component';

describe('AddItemModelComponent', () => {
  let component: AddItemModelComponent;
  let fixture: ComponentFixture<AddItemModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
