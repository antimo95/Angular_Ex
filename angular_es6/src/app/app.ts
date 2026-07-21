import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnteprimaProfilo } from './anteprima-profilo/anteprima-profilo';

@Component({
  selector: 'app-root',
  imports: [AnteprimaProfilo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es6');
}
