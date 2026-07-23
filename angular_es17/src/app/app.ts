import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RiepilogoCarrello } from './riepilogo-carrello/riepilogo-carrello';
import { Catalogo } from './catalogo/catalogo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RiepilogoCarrello, Catalogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es17');
}
