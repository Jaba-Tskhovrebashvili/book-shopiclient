import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishSelect } from './publish-select';

describe('PublishSelect', () => {
  let component: PublishSelect;
  let fixture: ComponentFixture<PublishSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
