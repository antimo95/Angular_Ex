import { Component, computed, signal, effect } from '@angular/core';

interface Notifica{
  id : number;
  testo : string; 
  letta : boolean; 
}

@Component({
  selector: 'app-centro-notifiche',
  imports: [],
  templateUrl: './centro-notifiche.html',
  styleUrl: './centro-notifiche.css',
})

export class CentroNotifiche {

  notifiche = signal<Notifica[]>([
    { id: 1, testo: 'Notifica 1', letta: false },
    { id: 2, testo: 'Notifica 2', letta: false },
    { id: 3, testo: 'Notifica 3', letta: true },
    { id: 4, testo: 'Notifica 4', letta: false },
    { id: 5, testo: 'Notifica 5', letta: true },
  ]);

 
  nonLette = computed(() => this.notifiche().filter(n => !n.letta).length);
  riepilogo = computed(() => {
    const n = this.nonLette();
    if (n === 0) return 'Sei in pari! 🎉';
    if (n === 1) return 'Hai 1 notifica non letta';
    return `Hai ${n} notifiche non lette`;
  });

   constructor() {
    effect(() => {
      document.title = this.nonLette() === 0
        ? 'Nessuna notifica'
        : `(${this.nonLette()}) nuove notifiche`;
    });

}
  segnaLetta(id: number) {
    const notificheAggiornate = this.notifiche().map(n => {
      if (n.id === id) {
        return { ...n, letta: true };
      }
      return n;
    });
    this.notifiche.set(notificheAggiornate);
  }


  segnaTutteLette() {
    const notificheAggiornate = this.notifiche().map(n => ({ ...n, letta: true }));
    this.notifiche.set(notificheAggiornate);
  }

  
}
