# SwipeNavigation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0.

## Code scaffolding

Run `ng generate component component-name --project SwipeNavigation` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project SwipeNavigation`.
> Note: Don't forget to add `--project SwipeNavigation` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build SwipeNavigation` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build SwipeNavigation`, go to the dist folder `cd dist/swipe-navigation` and run `npm publish`.

## Running unit tests

Run `ng test SwipeNavigation` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to use

SwipeNavigation is a component made to animate the navigation of typical three social media pages. 
this component uses ng-content to project content on those major three views,
The selectors for those pages respectively are mainPage(Center), chatPage(Right), cameraPage(left).
Emits two outputs when swipe starts and swipe ends with (swipeStart) and (swipeEnd) respectively.
Made with hammerJs.
