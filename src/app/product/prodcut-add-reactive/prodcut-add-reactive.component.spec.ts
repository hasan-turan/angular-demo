import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutAddReactiveComponent } from './prodcut-add-reactive.component';

describe('ProdcutAddReactiveComponent', () => {
  let component: ProdcutAddReactiveComponent;
  let fixture: ComponentFixture<ProdcutAddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutAddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
