import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaginaryKidsComponent } from './imaginary-kids.component';

describe('ImaginaryKidsComponent', () => {
  let component: ImaginaryKidsComponent;
  let fixture: ComponentFixture<ImaginaryKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaginaryKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaginaryKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
