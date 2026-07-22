import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CentroNotifiche } from "./centro-notifiche/centro-notifiche";

@Component({
  selector: 'app-root',
  imports: [CentroNotifiche],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_es14');
}
