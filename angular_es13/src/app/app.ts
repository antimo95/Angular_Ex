import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitoloDinamico } from './titolo-dinamico/titolo-dinamico';

@Component({
  selector: 'app-root',
  imports: [TitoloDinamico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es13');
}
