import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartaProdotto } from './carta-prodotto/carta-prodotto';

@Component({
  selector: 'app-root',
  imports: [CartaProdotto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  carrello: string[] = [];

  onAggiungi(nome: string): void {
    this.carrello.push(nome);
  }
}
