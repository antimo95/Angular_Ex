import { Component, computed, effect, signal } from '@angular/core';
import { CartaGiocatore } from './carta-giocatore/carta-giocatore';
import { FormsModule } from '@angular/forms';

interface Giocatore {
  id: number;
  nome: string;
  ruolo: string;
  disponibile: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CartaGiocatore, FormsModule],
  template: `
    <h2>Banco di prova — CartaGiocatore</h2>

    <label>
      Filtra per nome:
      <input
        type="text"
        [ngModel]="filtro()"
        (ngModelChange)="filtro.set($event)"
        placeholder="Cerca giocatore..."
      />
    </label>
    <p>Risultati: {{ giocatoriFiltrati().length }}</p>

    <label>
      Nuovo nome:
      <input type="text" [(ngModel)]="nuovoNome" placeholder="Nome giocatore" />
    </label>
    <label>
      Nuovo ruolo:
      <input type="text" [(ngModel)]="nuovoRuolo" placeholder="Ruolo giocatore" />
    </label>
    <button type="button" (click)="aggiungiGiocatore()">Aggiungi</button>

    <app-carta-giocatore
  

      [id]="1"
      [nome]="'Antimo'"
      [ruolo]="'Attaccante'"
      (rimuovi)="onRimuovi($event)"
      (cambiaStato)="onCambiaStato($event)"
    />

    <app-carta-giocatore
      [id]="2"
      [nome]="'Giulia'"
      [ruolo]="'Portiere'"
      [disponibile]="false"
      (rimuovi)="onRimuovi($event)"
      (cambiaStato)="onCambiaStato($event)"
    />

    <hr />
    <p><strong>Ultimo evento:</strong> {{ log }}</p>
  `,
})
export class App {
  
  giocatori = signal<Giocatore[]>([
    { id: 1, nome: 'Antimo', ruolo: 'Attaccante', disponibile: true },
    { id: 2, nome: 'Giulia', ruolo: 'Portiere', disponibile: false },
  ]);

  totale = computed(() => this.giocatori().length);
  disponibili = computed(() => this.giocatori().filter(g => g.disponibile).length);
  riepilogo = computed(() => `Totale giocatori: ${this.totale()}, Disponibili: ${this.disponibili()}`);

  filtro = signal('');
  giocatoriFiltrati = computed(() =>
    this.giocatori().filter(g => g.nome.toLowerCase().includes(this.filtro().toLowerCase()))
  );

  nuovoNome = '';
  nuovoRuolo = '';


  constructor() {
    effect(() => {
      document.title = `Squadra (${this.disponibili()}/${this.totale()})`;
    });
  }

    
  onRimuovi(id: number): void {
    this.log = 'rimuovi → id ' + id;
  }

  onCambiaStato(id: number): void {
    this.log = 'cambiaStato → id ' + id;
  }

  aggiungiGiocatore(): void {
    if (!this.nuovoNome.trim() || !this.nuovoRuolo.trim()) {
      return;
    }
    this.giocatori.update(lista => [
      ...lista,
      { id: lista.length + 1, nome: this.nuovoNome, ruolo: this.nuovoRuolo, disponibile: true },
    ]);
    this.nuovoNome = '';
    this.nuovoRuolo = '';
  }
}
