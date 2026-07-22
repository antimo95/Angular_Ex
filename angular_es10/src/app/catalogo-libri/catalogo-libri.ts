import { Component } from '@angular/core';
import { TroncaPipe } from '../shared/pipes/tronca-pipe';
import { UpperCasePipe, DatePipe, CurrencyPipe} from '@angular/common';
import {CommonModule} from '@angular/common';

interface Libro {
  titolo: string;
  prezzo: number;
  pubblicazione : Date;
  descrizione : string;
}

@Component({
  selector: 'app-catalogo-libri',
  imports: [TroncaPipe, UpperCasePipe, DatePipe, CurrencyPipe, CommonModule],
  templateUrl: './catalogo-libri.html',
  styleUrl: './catalogo-libri.css',
})
export class CatalogoLibri {

  libri : Libro[] = [
    {
      titolo : 'Il Signore degli Anelli',
      prezzo : 29.99,
      pubblicazione : new Date('1954-07-29'),
      descrizione : 'Un romanzo epico di J.R.R. Tolkien che narra le avventure di Frodo Baggins e della Compagnia dell\'Anello nella Terra di Mezzo.'
    },
    {
      titolo : '1984',
      prezzo : 19.99,
      pubblicazione : new Date('1949-06-08'),
      descrizione : 'Un romanzo distopico di George Orwell che esplora temi di sorveglianza, totalitarismo e controllo sociale.'
    },
    {
      titolo : 'Il Grande Gatsby',
      prezzo : 14.99,
      pubblicazione : new Date('1925-04-10'),
      descrizione : 'Un romanzo di F. Scott Fitzgerald che racconta la vita dell\'alta società americana negli anni \'20, attraverso gli occhi di Nick Carraway e il misterioso Jay Gatsby.'
    }
  ];
}
