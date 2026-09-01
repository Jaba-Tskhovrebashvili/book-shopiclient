import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Authorisation } from './authorisation';

describe('Authorisation', () => {
  let component: Authorisation;
  let fixture: ComponentFixture<Authorisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Authorisation],
    }).compileComponents();

    fixture = TestBed.createComponent(Authorisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
