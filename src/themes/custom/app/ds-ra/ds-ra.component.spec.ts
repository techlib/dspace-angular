import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsRaComponent } from './ds-ra.component';

describe('DsRaComponent', () => {
  let component: DsRaComponent;
  let fixture: ComponentFixture<DsRaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsRaComponent]
    });
    fixture = TestBed.createComponent(DsRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
