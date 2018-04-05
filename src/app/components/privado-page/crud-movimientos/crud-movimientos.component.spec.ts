import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMovimientosComponent } from './crud-movimientos.component';

describe('CrudMovimientosComponent', () => {
  let component: CrudMovimientosComponent;
  let fixture: ComponentFixture<CrudMovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
