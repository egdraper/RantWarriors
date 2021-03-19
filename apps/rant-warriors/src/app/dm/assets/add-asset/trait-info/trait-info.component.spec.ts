import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitInfoComponent } from './trait-info.component';

describe('TraitInfoComponent', () => {
  let component: TraitInfoComponent;
  let fixture: ComponentFixture<TraitInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
