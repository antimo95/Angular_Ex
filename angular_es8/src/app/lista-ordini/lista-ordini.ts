import { Component } from '@angular/core';


type Ordine = {
  id: number;
  cliente: string;
  stato: 'inAttesa' | 'spedito' | 'consegnato';
}

@Component({
  selector: 'app-lista-ordini',
  imports: [],
  templateUrl: './lista-ordini.html',
  styleUrl: './lista-ordini.css',
})
export class ListaOrdini {

  ordini: Ordine[] = [
    { id: 1, cliente: 'Antimo', stato: 'inAttesa' },
    { id: 2, cliente: 'Giulia', stato: 'spedito' },
    { id: 3, cliente: 'Marco', stato: 'consegnato' },
  ];

  svuota(): void {
    this.ordini = [];
  }
}
