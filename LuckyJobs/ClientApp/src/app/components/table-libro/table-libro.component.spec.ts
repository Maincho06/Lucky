import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLibroComponent } from './table-libro.component';

describe('TableLibroComponent', () => {
  let component: TableLibroComponent;
  let fixture: ComponentFixture<TableLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
