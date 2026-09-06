import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUthor } from './add-uthor';

describe('AddUthor', () => {
  let component: AddUthor;
  let fixture: ComponentFixture<AddUthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUthor],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUthor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
