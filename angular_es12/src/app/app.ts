import { Component, signal } from '@angular/core';
import { RigaCarrello } from './riga-carrello/riga-carrello';

@Component({
  selector: 'app-root',
  imports: [RigaCarrello],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es12');
}
