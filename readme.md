# Corso Angular 22 — Esercizi

Percorso pratico di apprendimento di **Angular 22**, un esercizio alla volta, con approcci esclusivamente moderni: standalone components, signals, `input()`/`output()`, control flow (`@if`/`@for`/`@switch`) e change detection moderna.

## Stack

- Angular 22
- TypeScript (tipizzazione esplicita)
- Standalone components

## Esercizi

| # | Esercizio | Argomento | Cosa si impara |
|---|-----------|-----------|----------------|
| 1 | Scheda profilo | Creazione di un componente | Decoratore `@Component`, selettore, template e stili, componenti standalone |
| 2 | Biglietto da visita | Template HTML | Interpolazione `{{ }}`, espressioni e chiamate a metodo nel template |
| 3 | Cruscotto meteo | Data Binding | Binding classe ↔ vista, flusso dei dati, operatore ternario |
| 4 | Lettore musica | Event Binding | Eventi `(click)`, metodi parametrici, pattern clamp |
| 5 | Barra di avanzamento | Property Binding | `[proprieta]`, style binding `[style.width.%]`, class binding `[class.x]` |
| 6 | Anteprima profilo | Two-Way Binding | `[(ngModel)]`, "banana in a box", `FormsModule` |
| 7 | Carta prodotto & catalogo | Input & Output | `input()` / `input.required()` (padre → figlio) e `output()` / `.emit()` / `$event` (figlio → padre) |
| 8 | Lista ordini | `@if` / `@for` / `@switch` | Blocchi di controllo del template, `track`, `@empty`, variabili implicite, `type` unione e `interface` |
| Recap | Gestore attività | Ripasso | Padre/figlio, Input/Output, binding e control flow tutti insieme |
| 10 | Catalogo libri | Pipes | Pipe integrate (`uppercase`, `currency`, `date`), pipe personalizzata con `@Pipe`, concatenazione |
| 11 | Contatore like | `signal()` | Stato locale reattivo, `.set()` / `.update()`, lettura con `()` |
| 12 | Riga carrello | `computed()` | Valori derivati, dipendenze automatiche, memoizzazione (cache) |
| 13 | Titolo dinamico | `effect()` | Effetti collaterali, contesto di iniezione, sincronizzazione con il DOM esterno |
| 14 | Centro notifiche | Gestione stato locale | `signal` + `computed` + `effect` insieme, aggiornamento immutabile di liste |

## Concetti chiave

- **Componente** = classe TypeScript + template + selettore (+ stili incapsulati).
- **Data binding** in due direzioni: classe → vista (interpolazione, `[ ]`) e vista → classe (`( )`).
- **Two-way binding** `[( )]` per i campi di form.
- **Input/Output** per la comunicazione tra componenti (padre ↔ figlio).
- **Signals**: `signal` per lo stato, `computed` per i valori derivati, `effect` per gli effetti collaterali.

## Come avviare

```bash
npm install
ng serve
```

Apri [http://localhost:4200](http://localhost:4200).
