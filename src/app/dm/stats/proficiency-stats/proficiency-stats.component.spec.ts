import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyStatsComponent } from './proficiency-stats.component';

describe('ProficiencyStatsComponent', () => {
  let component: ProficiencyStatsComponent;
  let fixture: ComponentFixture<ProficiencyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
