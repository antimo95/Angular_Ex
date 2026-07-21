import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LettoreMusica = class LettoreMusica {
    inRiproduzione = false;
    volume = 0;
    togglePlay() {
        this.inRiproduzione = !this.inRiproduzione;
    }
    cambiaVolume(delta) {
        const nuovoVolume = this.volume + delta;
        this.volume = Math.min(100, Math.max(0, nuovoVolume));
    }
};
LettoreMusica = __decorate([
    Component({
        selector: 'app-lettore-musica',
        imports: [],
        templateUrl: './lettore-musica.html',
        styleUrl: './lettore-musica.css',
    })
], LettoreMusica);
export { LettoreMusica };
