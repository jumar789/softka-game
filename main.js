import { preguntas } from "./data/preguntas.js";
import { Partida } from "./model/Partida.js";
import { Interfaz } from "./model/Interfaz.js";

const pintarPagina = (partida, interfaz) => {

    if (partida.finalizar()) {
        interfaz.mostrarPuntaje(partida.puntaje);
    } else {
        interfaz.mostrarPregunta(partida.obtenerIndicePregunta().pregunta);
        interfaz.mostrarOpciones(partida.obtenerIndicePregunta().opciones, (opcionActual) => {
            partida.acertar(opcionActual);
            pintarPagina(partida, interfaz);
        });
    }
};

function main() {
    const partida = new Partida(preguntas);
    const interfaz = new Interfaz();
    pintarPagina(partida, interfaz);

}
main();