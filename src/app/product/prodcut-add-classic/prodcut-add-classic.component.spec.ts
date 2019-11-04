import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutAddClassicComponent } from './prodcut-add-classic.component';

describe('ProdcutAddClassicComponent', () => {
  let component: ProdcutAddClassicComponent;
  let fixture: ComponentFixture<ProdcutAddClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutAddClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutAddClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
