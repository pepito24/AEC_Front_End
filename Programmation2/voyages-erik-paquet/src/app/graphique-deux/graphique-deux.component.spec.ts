import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueDeuxComponent } from './graphique-deux.component';

describe('GraphiqueDeuxComponent', () => {
  let component: GraphiqueDeuxComponent;
  let fixture: ComponentFixture<GraphiqueDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueDeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
