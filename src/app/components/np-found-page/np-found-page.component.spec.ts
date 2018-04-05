import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpFoundPageComponent } from './np-found-page.component';

describe('NpFoundPageComponent', () => {
  let component: NpFoundPageComponent;
  let fixture: ComponentFixture<NpFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
