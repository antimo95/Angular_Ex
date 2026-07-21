import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LettoreMusica } from './lettore-musica/lettore-musica';

@Component({
  selector: 'app-root',
  imports: [LettoreMusica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es4');
}
