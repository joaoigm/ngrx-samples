import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleStatesComponent } from './multiple-states.component';

describe('MultipleStatesComponent', () => {
  let component: MultipleStatesComponent;
  let fixture: ComponentFixture<MultipleStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
