import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedpageComponent } from './matchedpage.component';

describe('MatchedpageComponent', () => {
  let component: MatchedpageComponent;
  let fixture: ComponentFixture<MatchedpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
