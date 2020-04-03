import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAttackComponent } from './multi-attack.component';

describe('MultiAttackComponent', () => {
  let component: MultiAttackComponent;
  let fixture: ComponentFixture<MultiAttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
