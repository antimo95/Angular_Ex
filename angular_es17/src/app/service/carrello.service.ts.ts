import { Service, signal, computed } from '@angular/core';
import { ArticoloModelTs } from '../model/articolo.model.ts';

@Service()
export class CarrelloServiceTs {

    _articoli = signal<ArticoloModelTs[]>([]);
    readonly articoli = this._articoli.asReadonly();

    numeroArticoli = computed(() => this._articoli().length);
    totale = computed(()=> this._articoli().reduce((acc, articolo) => acc + articolo.prezzo, 0));
    riepilogo = computed(() => this._articoli().map(articolo => articolo.nome).join(', ')); 

    private prossimoId : number = 0;

    aggiungi(nome: string, prezzo: number) {
        const articolo: ArticoloModelTs = {
            id: this.prossimoId++,
            nome,
            prezzo
        };
        this._articoli.update(articoli => [...articoli, articolo]);
    }
        
    rimuovi(id: number) {
        this._articoli.update(articoli => articoli.filter(articolo => articolo.id !== id));
    }

    svuota(){
        this._articoli.update(() => []);
    }
}
