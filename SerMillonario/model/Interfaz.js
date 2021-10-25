export class Interfaz {
    constructor() {
    }

    mostrarPregunta(texto) {
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerText = texto;
    }

    mostrarOpciones(opciones, callback){
        const opcionesDiv = document.getElementById('opciones');
        opcionesDiv.innerHTML = '';
        
        for (let index = 0; index < opciones.length; index++) {
            const boton = document.createElement('button');
            boton.innerText = opciones[index]; 
            boton.className = 'botones';
            boton.addEventListener('click', () => callback(opciones[index]));
             
            opcionesDiv.append(boton);
        }
    }
    mostrarPuntaje(puntaje){
        const finPartidaHTML = `
        <h1>Resultado</h1>
        <h2>Puntaje: ${puntaje}</h2>       
        `
    const elemento =  document.getElementById('partida');
    elemento.innerHTML =  finPartidaHTML;
    }


}