import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarArticuloComponent } from './visualizar-articulo.component';

describe('VisualizarArticuloComponent', () => {
  let component: VisualizarArticuloComponent;
  let fixture: ComponentFixture<VisualizarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
