import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorSelect } from './author-select';

describe('AuthorSelect', () => {
  let component: AuthorSelect;
  let fixture: ComponentFixture<AuthorSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
