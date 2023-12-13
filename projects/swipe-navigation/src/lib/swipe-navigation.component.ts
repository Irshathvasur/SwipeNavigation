import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Manager, Pan, DIRECTION_HORIZONTAL } from 'hammerjs';


@Component({
  selector: 'SwipeNavigation',
  templateUrl: './swipe-navigation.component.html',
  styleUrls: ['./swipe-navigation.component.scss'],
})
export class SwipeNavigationComponent {
  @Output() swipeStart = new EventEmitter<any>();
  @Output() swipeEnd = new EventEmitter<any>();

  @ViewChild('chat', { static: false }) chat!: ElementRef;
  @ViewChild('main', { static: false }) main!: ElementRef;
  @ViewChild('camera', { static: false }) camera!: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    this.createSwipeAction(this.main, this.chat, this.camera);
    this.createReturnSwipeLeft(this.chat);
    this.createReturnSwiperight(this.camera);
  }

  createSwipeAction(gestureComponent: ElementRef, leftComponent: ElementRef, rightComponent: ElementRef) {
    let hammer = new Manager(gestureComponent.nativeElement, { recognizers: [[Pan, { direction: DIRECTION_HORIZONTAL }]] });
    let panDirection: string;
    let leftConstant = 'translateY(-100vh)'
    let rightConstant = 'translateY(-200vh)'
    hammer.on('panstart', (event: any) => {
      this.swipeStart.emit(event);
      panDirection = event.additionalEvent;
      leftComponent.nativeElement.style.transition = 'transform 0s ease';
      rightComponent.nativeElement.style.transition = 'transform 0s ease';
    });

    hammer.on('pan', (event: any) => {
      switch (panDirection) {
        case 'panleft':
          let degreeleft = (315 + (Math.abs(event.deltaX) / 8)) < 360 ? (315 + (Math.abs(event.deltaX) / 8)) : 361;
          leftComponent.nativeElement.style.transform = leftConstant + `rotate(${degreeleft}deg)`
          break;
        case 'panright':
          let degreeright = (45 - (Math.abs(event.deltaX) / 8)) > 0 ? (45 - (Math.abs(event.deltaX) / 8)) : -1;
          rightComponent.nativeElement.style.transform = rightConstant + `rotate(${degreeright}deg)`
          break;
      }
    });

    hammer.on('panend', (event: any) => {
      this.swipeEnd.emit(event);
      switch (panDirection) {
        case 'panleft':
          leftComponent.nativeElement.style.transition = 'transform 0.3s ease';
          if (Math.abs(event.deltaX) > (visualViewport?.width ? (visualViewport?.width / 3) : 200)) {
            leftComponent.nativeElement.style.transform = leftConstant + `rotate(360deg)`
          } else {
            leftComponent.nativeElement.style.transform = leftConstant + `rotate(300deg)`
          }
          break;
        case 'panright':
          rightComponent.nativeElement.style.transition = 'transform 0.3s ease';
          if (Math.abs(event.deltaX) > (visualViewport?.width ? (visualViewport?.width / 3) : 200)) {
            rightComponent.nativeElement.style.transform = rightConstant + `rotate(0deg)`
          } else {
            rightComponent.nativeElement.style.transform = rightConstant + `rotate(60deg)`
          }
          break;
      }

    });
  }

  createReturnSwipeLeft(component: ElementRef) {
    let hammer = new Manager(component.nativeElement, { recognizers: [[Pan, { direction: DIRECTION_HORIZONTAL }]] });
    let panDirection: string;
    let leftConstant = 'translateY(-100vh)'
    hammer.on('panstart', (event: any) => {
      this.swipeStart.emit(event);
      panDirection = event.additionalEvent;
      component.nativeElement.style.transition = 'transform 0s ease';
    });

    hammer.on('pan', (event: any) => {
      switch (panDirection) {
        case 'panright':
          let degreeleft = (360 + (Math.abs(event.deltaX) / 8)) > 300 ? (360 - (Math.abs(event.deltaX) / 8)) : 300;
          component.nativeElement.style.transform = leftConstant + `rotate(${degreeleft}deg)`
          break;
      }
    });

    hammer.on('panend', (event: any) => {
      this.swipeEnd.emit(event);
      component.nativeElement.style.transition = 'transform 0.3s ease';
      switch (panDirection) {
        case 'panright':
          if (Math.abs(event.deltaX) > (visualViewport?.width ? (visualViewport?.width / 3) : 200)) {
            component.nativeElement.style.transform = leftConstant + `rotate(300deg)`;
          } else {
            component.nativeElement.style.transform = leftConstant + `rotate(360deg)`;
          }
          break;
      }
    });
  }

  createReturnSwiperight(component: ElementRef) {
    let hammer = new Manager(component.nativeElement, { recognizers: [[Pan, { direction: DIRECTION_HORIZONTAL }]] });
    let panDirection: string;
    let rightConstant = 'translateY(-200vh)'
    hammer.on('panstart', (event: any) => {
      this.swipeStart.emit(event);
      component.nativeElement.style.transition = 'transform 0s ease';
      panDirection = event.additionalEvent;
    });

    hammer.on('pan', (event: any) => {
      switch (panDirection) {
        case 'panleft':
          let degreeleft = (0 + (Math.abs(event.deltaX) / 8)) < 60 ? (0 + (Math.abs(event.deltaX) / 8)) : 60;
          component.nativeElement.style.transform = rightConstant + `rotate(${degreeleft}deg)`
          break;
      }
    });

    hammer.on('panend', (event: any) => {
      this.swipeEnd.emit(event);
      component.nativeElement.style.transition = 'transform 0.3s ease';
      switch (panDirection) {
        case 'panleft':
          if (Math.abs(event.deltaX) > (visualViewport?.width ? (visualViewport?.width / 3) : 200)) {
            component.nativeElement.style.transform = rightConstant + `rotate(60deg)`;
          } else {
            component.nativeElement.style.transform = rightConstant + `rotate(0deg)`
          }
          break;
      }
    });
  }
}
