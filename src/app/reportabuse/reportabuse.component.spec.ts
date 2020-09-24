import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportabuseComponent } from './reportabuse.component';

describe('ReportabuseComponent', () => {
  let component: ReportabuseComponent;
  let fixture: ComponentFixture<ReportabuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportabuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportabuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
