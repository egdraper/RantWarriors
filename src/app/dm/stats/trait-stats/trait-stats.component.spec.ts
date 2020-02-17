import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitStatsComponent } from './trait-stats.component';

describe('TraitStatsComponent', () => {
  let component: TraitStatsComponent;
  let fixture: ComponentFixture<TraitStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
