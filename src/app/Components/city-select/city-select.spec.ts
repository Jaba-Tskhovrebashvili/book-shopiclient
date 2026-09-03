import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitySelect } from './city-select';

describe('CitySelect', () => {
  let component: CitySelect;
  let fixture: ComponentFixture<CitySelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitySelect],
    }).compileComponents();

    fixture = TestBed.createComponent(CitySelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
