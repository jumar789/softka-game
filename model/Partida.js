import { Pregunta } from "./Pregunta.js";
export class Partida {
    indicePregunta = 0;
    puntaje = 0;
    constructor(preguntas) {
        this.preguntas = preguntas;
    }

    obtenerIndicePregunta() {
        return this.preguntas[this.indicePregunta];
    }

    finalizar() {
        return this.preguntas.length === this.indicePregunta;
    }

    acertar(respuesta) {
        console.log(respuesta);
        if (this.obtenerIndicePregunta().respuestaCorrecta(respuesta)) {
            this.puntaje++;
        }
        this.indicePregunta++;
    }
}