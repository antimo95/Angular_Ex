import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BigliettoVisita = class BigliettoVisita {
    nome = 'Antimo Barbato';
    ruolo = 'Ingegnere';
    anniEsperienza = 0;
    //Qui ottengo un valore derivato, sarebbe piu corretto operare con computed
    annoInizioCarriera() {
        const annoCorrente = 2026;
        const annoInizio = annoCorrente - this.anniEsperienza;
        return annoInizio;
    }
};
BigliettoVisita = __decorate([
    Component({
        selector: 'app-biglietto-visita',
        imports: [],
        templateUrl: './biglietto-visita.html',
        styleUrl: './biglietto-visita.css',
    })
], BigliettoVisita);
export { BigliettoVisita };
