import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { BigliettoVisita } from './biglietto-visita/biglietto-visita';
let App = class App {
    title = signal('angular_es2');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [BigliettoVisita],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
export { App };
