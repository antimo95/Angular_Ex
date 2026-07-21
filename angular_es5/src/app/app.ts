import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraAvanzamento } from './barra-avanzamento/barra-avanzamento';

@Component({
  selector: 'app-root',
  imports: [BarraAvanzamento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es5');
}
