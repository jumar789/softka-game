export class Pregunta {
    constructor(pregunta, categoria, nivel, puntos, opciones, respuestaCorrecta) {
        this.pregunta = pregunta;
        this.categoria = categoria;
        this.nivel = nivel;
        this.puntos = puntos;
        this.opciones = opciones;
        this.respuesta = respuestaCorrecta;
    }
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta;
    }
}
const pregunta = new  Pregunta('quien fue', 'facil', 1, 100, ['a', 'b', 'c', 'd'], 'a');

// console.log(pregunta.respuestaCorrecta('b'));