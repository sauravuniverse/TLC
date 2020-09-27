import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnInfoComponent } from './addn-info.component';

describe('AddnInfoComponent', () => {
  let component: AddnInfoComponent;
  let fixture: ComponentFixture<AddnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
