import { Component } from '@angular/core';

@Component({
  selector: 'app-cruscotto',
  imports: [],
  templateUrl: './cruscotto.html',
  styleUrl: './cruscotto.css',
})
export class Cruscotto {

  citta : string = "Napoli";
  temperatura : number = 500;
  soleggiato : boolean = true;
  previsioni : string[] = ["Sereno", "Nuvoloso", "Pioggia"];


  
}
