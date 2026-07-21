import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { AppSchedaProfilo } from './app-scheda-profilo/app-scheda-profilo';
let App = class App {
    title = signal('angular_es1');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [AppSchedaProfilo],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
export { App };
