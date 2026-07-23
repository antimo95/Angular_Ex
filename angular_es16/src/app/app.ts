import { Component } from '@angular/core';
import { GestioneSquadra } from './gestione-squadra/gestione-squadra';

@Component({
  selector: 'app-root',
  imports: [GestioneSquadra],
  template: `<app-gestione-squadra />`,
})
export class App {}
