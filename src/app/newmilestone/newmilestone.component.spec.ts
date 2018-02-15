import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmilestoneComponent } from './newmilestone.component';

describe('NewmilestoneComponent', () => {
  let component: NewmilestoneComponent;
  let fixture: ComponentFixture<NewmilestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmilestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
