import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anteprima-profilo',
  imports: [FormsModule],
  templateUrl: './anteprima-profilo.html',
  styleUrl: './anteprima-profilo.css',
})
export class AnteprimaProfilo {

  nome : string = ""
  eta : number = 0 
  newsletter : boolean = false
  
}
