import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTecnicoComponent } from './crud-tecnico.component';

describe('CrudTecnicoComponent', () => {
  let component: CrudTecnicoComponent;
  let fixture: ComponentFixture<CrudTecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
