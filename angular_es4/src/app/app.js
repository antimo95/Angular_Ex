import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { LettoreMusica } from './lettore-musica/lettore-musica';
let App = class App {
    title = signal('angular_es4');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [LettoreMusica],
        templateUrl: './app.html',
        styleUrl: './app.css'
    })
], App);
export { App };
