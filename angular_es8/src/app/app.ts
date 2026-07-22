import { Component, signal } from '@angular/core';
import { ListaOrdini } from './lista-ordini/lista-ordini';

@Component({
  selector: 'app-root',
  imports: [ListaOrdini],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es8');
}
