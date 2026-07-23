# Corso Angular 22 — Esercizi

Percorso pratico di apprendimento di **Angular 22**, un esercizio alla volta, con approcci esclusivamente moderni: standalone components, signals, `input()`/`output()`, control flow (`@if`/`@for`/`@switch`) e change detection moderna.

## Stack

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
</p>

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
| 15 | Pannello riutilizzabile | Component Composition | Content projection con `<ng-content>`, slot multipli (`select`), componenti "contenitore" |
| 16 | Gestione squadra | Smart & Presentational Components | Container con stato (signal/computed/effect) + figlio presentational puro (Input/Output) |
| 17 | Carrello condiviso | Services + Dependency Injection | `@Service()`, `inject()`, stato incapsulato con `asReadonly()`, singleton condiviso tra componenti |

## Esercizi TypeScript

Mini-percorso parallelo sulle basi di TypeScript che ricorrono in Angular.

| # | Argomento | Cosa si impara |
|---|-----------|----------------|
| TS-1 | Arrow function | Sintassi `(parametri) => risultato`, return implicito, tipi espliciti, callback in `map`/`filter` |

## Concetti chiave

- **Componente** = classe TypeScript + template + selettore (+ stili incapsulati).
- **Data binding** in due direzioni: classe → vista (interpolazione, `[ ]`) e vista → classe (`( )`).
- **Two-way binding** `[( )]` per i campi di form.
- **Input/Output** per la comunicazione tra componenti (padre ↔ figlio).
- **Signals**: `signal` per lo stato, `computed` per i valori derivati, `effect` per gli effetti collaterali.
- **Componenti**: Smart (stato e logica) vs Presentational (solo Input/Output); composizione con `<ng-content>`.
- **Services + DI**: `@Service()` per lo stato condiviso, iniettato con `inject()`.

## Come avviare

```bash
npm install
ng serve
```

Apri [http://localhost:4200](http://localhost:4200).

