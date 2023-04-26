import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultRequestComponent } from './admin-consult-request.component';

describe('AdminConsultRequestComponent', () => {
  let component: AdminConsultRequestComponent;
  let fixture: ComponentFixture<AdminConsultRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsultRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsultRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
