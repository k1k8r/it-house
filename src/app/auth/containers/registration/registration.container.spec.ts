import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationContainer } from './registration.container';

describe('RegistrationContainer', () => {
  let component: RegistrationContainer;
  let fixture: ComponentFixture<RegistrationContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
