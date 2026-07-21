import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cruscotto } from './cruscotto/cruscotto';

@Component({
  selector: 'app-root',
  imports: [Cruscotto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es3');
}
