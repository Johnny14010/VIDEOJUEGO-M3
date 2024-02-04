let Abrahamlincoln = {
    name: "Presidente",
    preguntas: {
      Presidente: {
        pregunta: "¿Cuál fue el nombre del 16º presidente de los Estados Unidos?",
        opciones: [
          "Abraham Lincoln", "Marito Lincoln", "John F. Kennedy", "Barack Obama"
        ],
        respuestaCorrecta: 1
      },
      Nacimiento: {
        pregunta: "¿En qué año nació Abraham Lincoln?",
        opciones: ["1809", "1820", "1830", "1840"],
        respuestaCorrecta: 1
      },
      Muerte: {
        pregunta: "¿En qué año murió Abraham Lincoln?",
        opciones: ["1860", "1861", "1862", "1865"],
        respuestaCorrecta: 4
      },
      Muertemarito: {
        pregunta: "¿Dónde nació Marito Lincoln?",
        opciones: ["Buenos Aires", "Washington D.C.", "Nueva York", "Chicago"],
        respuestaCorrecta: 1
      }
    }
  };
  
  let puntuacion = 0;
  let respuestasCorrectas = 0;
  let preguntaActual = 0;
  let respuestasIncorrectas = [];
  
  // Objeto para mapear las preguntas con sus nombres de subobjetos
  let subObjetos = {
    "¿Cuál fue el nombre del 16º presidente de los Estados Unidos?": "Presidente",
    "¿En qué año nació Abraham Lincoln?": "Nacimiento",
    "¿En qué año murió Abraham Lincoln?": "Muerte",
    "¿Dónde nació Marito Lincoln?": "Muertemarito"
  };
  
  // Función para mostrar la pregunta actual
  function mostrarPregunta(pregunta) {
    const preguntaElement = document.getElementById("pregunta");
    preguntaElement.textContent = pregunta.pregunta;
  
    const opcionesElement = document.getElementById("opciones");
    opcionesElement.innerHTML = "";
  
    pregunta.opciones.forEach((opcion, index) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.addEventListener("click", () => {
        const respuesta = index + 1;
  
        if (respuesta === pregunta.respuestaCorrecta) {
          console.log("¡Respuesta correcta!");
          puntuacion++;
          respuestasCorrectas++;
        } else {
          console.log("Respuesta incorrecta.");
          respuestasIncorrectas.push(subObjetos[pregunta.pregunta]);
        }
  
        const puntuacionNumeroElement = document.getElementById("puntuacion-numero");
        puntuacionNumeroElement.textContent = puntuacion;
  
        preguntaActual++;
        if (preguntaActual < Object.keys(Abrahamlincoln.preguntas).length) {
          mostrarPregunta(Abrahamlincoln.preguntas[Object.keys(Abrahamlincoln.preguntas)[preguntaActual]]);
        } else {
          mostrarResultados();
        }
      });
      opcionesElement.appendChild(boton);
    });
  }
  
  // Función para mostrar los resultados al final del juego
  function mostrarResultados() {
    console.log("¡Fin del Juego!");
    if (respuestasCorrectas === Object.keys(Abrahamlincoln.preguntas).length) {
      alert("¡Vacan! Has ganado el videojuego. Tu puntuación final es: " + puntuacion);
    } else {
      let mensaje = "¡Has perdido! El Garbage Collector ha eliminado los siguientes subobjetos: ";
      respuestasIncorrectas.forEach((subobjeto, index) => {
        mensaje += subobjeto;
        if (index !== respuestasIncorrectas.length - 1) {
          mensaje += ", ";
        }
        delete Abrahamlincoln.preguntas[subobjeto];
      });
      mensaje += ". Tu puntuación final es: " + puntuacion;
      alert(mensaje);
    }
  }
  
  // Iniciar el juego mostrando la primera pregunta
  mostrarPregunta(Abrahamlincoln.preguntas[Object.keys(Abrahamlincoln.preguntas)[preguntaActual]]);
  
mostrarPregunta(Abrahamlincoln.preguntas[Object.keys(Abrahamlincoln.preguntas)[preguntaActual]]);

