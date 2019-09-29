import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    frase:any;
    mostrar: boolean;
    personajes: string[];

    constructor(){
        this.frase = {
            mensaje: "Eres dueño de tu silencio y esclavo de tus palabras.",
            autor: "Un Sabio"
        }

        this.mostrar = false;

        this.personajes = ['Spiderman', 'Venon', 'Dr. Octopus'];
    };
}