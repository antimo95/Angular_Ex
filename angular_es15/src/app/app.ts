import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pannello } from './pannello/pannello';

@Component({
  selector: 'app-root',
  imports: [Pannello, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es15');
}
