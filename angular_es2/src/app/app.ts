import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigliettoVisita } from './biglietto-visita/biglietto-visita';

@Component({
  selector: 'app-root',
  imports: [BigliettoVisita],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es2');
}
