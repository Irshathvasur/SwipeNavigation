import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeNavigationComponent } from './swipe-navigation.component';

describe('SwipeNavigationComponent', () => {
  let component: SwipeNavigationComponent;
  let fixture: ComponentFixture<SwipeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
