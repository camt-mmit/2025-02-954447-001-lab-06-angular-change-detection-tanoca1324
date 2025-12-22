import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialLab } from './trial-lab';

describe('TrialLab', () => {
  let component: TrialLab;
  let fixture: ComponentFixture<TrialLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialLab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialLab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
