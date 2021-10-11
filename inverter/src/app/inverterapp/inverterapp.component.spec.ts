import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterappComponent } from './inverterapp.component';

describe('InverterappComponent', () => {
  let component: InverterappComponent;
  let fixture: ComponentFixture<InverterappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverterappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
