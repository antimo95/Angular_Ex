import { Component, signal } from '@angular/core';
import { ContatoreLike } from './contatore-like/contatore-like';

@Component({
  selector: 'app-root',
  imports: [ContatoreLike],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es11');
}
