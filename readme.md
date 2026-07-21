# Corso Angular 22 — Esercizi

Percorso pratico di apprendimento di **Angular 22**, un esercizio alla volta, con approcci esclusivamente moderni: standalone components, signals, `input()`/`output()`, control flow (`@if`/`@for`/`@switch`) e change detection moderna.

## Stack

- Angular 22
- TypeScript (tipizzazione esplicita)
- Standalone components

## Fase 1 — Fondamenti

| # | Esercizio | Argomento | Cosa si impara |
|---|-----------|-----------|----------------|
| 1 | Scheda profilo | Creazione di un componente | Decoratore `@Component`, selettore, template e stili, componenti standalone |
| 2 | Biglietto da visita | Template HTML | Interpolazione `{{ }}`, espressioni e chiamate a metodo nel template |
| 3 | Cruscotto meteo | Data Binding | Concetto di binding classe ↔ vista, flusso dei dati, operatore ternario |
| 4 | Lettore musica | Event Binding | Eventi `(click)`, metodi parametrici, pattern clamp |
| 5 | Barra di avanzamento | Property Binding | `[proprieta]`, style binding `[style.width.%]`, class binding `[class.x]` |
| 6 | Anteprima profilo | Two-Way Binding | `[(ngModel)]`, "banana in a box", `FormsModule` |
| 7 | Carta prodotto | Input | `input()` / `input.required()`, dati padre → figlio, componenti riutilizzabili |
| 8 | Catalogo carrello | Output | `output()`, `.emit()`, eventi figlio → padre, `$event` |

## Concetti chiave della Fase 1

- **Componente** = classe TypeScript + template + selettore (+ stili incapsulati).
- **Data binding** in due direzioni: classe → vista (interpolazione, `[ ]`) e vista → classe (`( )`).
- **Two-way binding** `[( )]` per i campi di form.
- **Input/Output** per la comunicazione tra componenti (padre ↔ figlio).

## Struttura del progetto

```
src/
  app/
    scheda-profilo/
    biglietto-visita/
    cruscotto-meteo/
    lettore-musica/
    barra-avanzamento/
    anteprima-profilo/
    carta-prodotto/
    ...
```

## Come avviare

```bash
npm install
ng serve
```

Apri [http://localhost:4200](http://localhost:4200).
