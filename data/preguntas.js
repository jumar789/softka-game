import { Pregunta } from "../model/Pregunta.js";
import { data } from "./data.js";

export  const preguntas = data.map( pregunta => new Pregunta(
    pregunta.pregunta, 
    pregunta.categoria, 
    pregunta.nivel, 
    pregunta.puntos, 
    pregunta.opciones, 
    pregunta.respuesta
    ))