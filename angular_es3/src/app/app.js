import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { Cruscotto } from './cruscotto/cruscotto';
let App = class App {
    title = signal('angular_es3');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [Cruscotto],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
export { App };
