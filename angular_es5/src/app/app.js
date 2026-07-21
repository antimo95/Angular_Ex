import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { BarraAvanzamento } from './barra-avanzamento/barra-avanzamento';
let App = class App {
    title = signal('angular_es5');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [BarraAvanzamento],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
export { App };
