import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSexSelect } from './admin-sex-select';

describe('AdminSexSelect', () => {
  let component: AdminSexSelect;
  let fixture: ComponentFixture<AdminSexSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSexSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSexSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
