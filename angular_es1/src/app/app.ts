import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSchedaProfilo } from './app-scheda-profilo/app-scheda-profilo';

@Component({
  selector: 'app-root',
  imports: [AppSchedaProfilo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es1');
}
