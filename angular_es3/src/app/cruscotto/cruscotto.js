import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Cruscotto = class Cruscotto {
    citta = "Napoli";
    temperatura = 500;
    soleggiato = true;
    previsioni = ["Sereno", "Nuvoloso", "Pioggia"];
};
Cruscotto = __decorate([
    Component({
        selector: 'app-cruscotto',
        imports: [],
        templateUrl: './cruscotto.html',
        styleUrl: './cruscotto.css',
    })
], Cruscotto);
export { Cruscotto };
