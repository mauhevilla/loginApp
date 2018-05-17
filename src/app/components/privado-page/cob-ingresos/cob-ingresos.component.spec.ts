import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobIngresosComponent } from './cob-ingresos.component';

describe('CobIngresosComponent', () => {
  let component: CobIngresosComponent;
  let fixture: ComponentFixture<CobIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
