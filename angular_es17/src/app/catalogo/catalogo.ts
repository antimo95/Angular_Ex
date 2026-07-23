import { Component, inject} from '@angular/core';
import { CarrelloServiceTs } from '../service/carrello.service.ts';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  carrello = inject(CarrelloServiceTs);
  listaArticoli = [
    { nome: 'Articolo 1', prezzo: 10 },
    { nome: 'Articolo 2', prezzo: 20 },
    { nome: 'Articolo 3', prezzo: 30 },
    { nome: 'Articolo 4', prezzo: 40 },
    { nome: 'Articolo 5', prezzo: 50 }
  ];
}
