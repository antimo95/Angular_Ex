import { Component, inject } from '@angular/core';
import { CarrelloServiceTs } from '../service/carrello.service.ts';

@Component({
  selector: 'app-riepilogo-carrello',
  imports: [],
  templateUrl: './riepilogo-carrello.html',
  styleUrl: './riepilogo-carrello.css',
})
export class RiepilogoCarrello {
  carrello = inject(CarrelloServiceTs);
}
