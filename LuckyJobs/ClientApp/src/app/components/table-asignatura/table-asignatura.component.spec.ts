import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAsignaturaComponent } from './table-asignatura.component';

describe('TableAsignaturaComponent', () => {
  let component: TableAsignaturaComponent;
  let fixture: ComponentFixture<TableAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
