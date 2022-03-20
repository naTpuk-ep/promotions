import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideContainerComponent } from './left-side-container.component';

describe('LeftSideContainerComponent', () => {
  let component: LeftSideContainerComponent;
  let fixture: ComponentFixture<LeftSideContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideContainerComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
