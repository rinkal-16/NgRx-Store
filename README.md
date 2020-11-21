# NgrxState

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## NgRx Store 

0. Mainly for managing global state across entire app. 
1. store : controlled state container designed to help write performant and consistent app. 
2. Key concepts 
   Actions : unique event that are dispatched from comp & services.
   Reducers : for state changes, take current state & latest action to compute a new state. 
   Selectors : pure function used to select, derive & compose piece of state. 
3. 3 dots in typescript : returns all elements of array. 
4. state : maintained in the store. immutable. 
5. selector : comp can subscribe to the store and get automatic update of state through selectors. enable comp to get a slice of state.
6. action : modify state of store by using reducers that enable changes. 
7. effects : occur as a result from actions. create async service call to API. 




