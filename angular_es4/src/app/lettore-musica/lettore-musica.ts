import { Component } from '@angular/core';

@Component({
  selector: 'app-lettore-musica',
  imports: [],
  templateUrl: './lettore-musica.html',
  styleUrl: './lettore-musica.css',
})
export class LettoreMusica {

  inRiproduzione : boolean = false;
  volume : number = 0; 

  togglePlay() : void {
    this.inRiproduzione = !this.inRiproduzione;
  }

  cambiaVolume(delta: number){
    const nuovoVolume = this.volume + delta;
    this.volume = Math.min(100, Math.max(0, nuovoVolume));
  }
}
