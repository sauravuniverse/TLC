import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEduComponent } from './work-edu.component';

describe('WorkEduComponent', () => {
  let component: WorkEduComponent;
  let fixture: ComponentFixture<WorkEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
