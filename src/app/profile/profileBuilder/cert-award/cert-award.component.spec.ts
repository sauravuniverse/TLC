import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertAwardComponent } from './cert-award.component';

describe('CertAwardComponent', () => {
  let component: CertAwardComponent;
  let fixture: ComponentFixture<CertAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
