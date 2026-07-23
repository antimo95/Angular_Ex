import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartaGiocatore } from '../carta-giocatore/carta-giocatore';

interface Giocatore {
  id: number;
  nome: string;
  ruolo: string;
  disponibile: boolean;
}

@Component({
  selector: 'app-gestione-squadra',
  imports: [FormsModule, CartaGiocatore],
  templateUrl: './gestione-squadra.html',
  styleUrl: './gestione-squadra.css',
})
export class GestioneSquadra {
  giocatori = signal<Giocatore[]>([
    { id: 1, nome: 'Antimo', ruolo: 'Attaccante', disponibile: true },
    { id: 2, nome: 'Giulia', ruolo: 'Portiere', disponibile: false },
    { id: 3, nome: 'Marco', ruolo: 'Centrocampista', disponibile: true },
  ]);

  totale = computed(() => this.giocatori().length);
  disponibili = computed(() => this.giocatori().filter((g) => g.disponibile).length);
  riepilogo = computed(() => `${this.disponibili()} disponibili su ${this.totale()}`);

  nuovoNome = '';
  nuovoRuolo = '';
  private prossimoId = 4;

  constructor() {
    effect(() => {
      document.title = `Squadra (${this.disponibili()}/${this.totale()})`;
    });
  }

  aggiungi(): void {
    const nome = this.nuovoNome.trim();
    if (!nome) {
      return;
    }
    const nuovo: Giocatore = {
      id: this.prossimoId++,
      nome,
      ruolo: this.nuovoRuolo.trim(),
      disponibile: true,
    };
    this.giocatori.update((lista) => [...lista, nuovo]);
    this.nuovoNome = '';
    this.nuovoRuolo = '';
  }

  rimuovi(id: number): void {
    this.giocatori.update((lista) => lista.filter((g) => g.id !== id));
  }

  cambiaStato(id: number): void {
    this.giocatori.update((lista) =>
      lista.map((g) => (g.id === id ? { ...g, disponibile: !g.disponibile } : g)),
    );
  }
}
