import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitPlusComponent } from './forfait-plus.component';

describe('ForfaitPlusComponent', () => {
  let component: ForfaitPlusComponent;
  let fixture: ComponentFixture<ForfaitPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
