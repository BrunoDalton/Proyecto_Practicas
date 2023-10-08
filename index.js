import { cuestionario } from "./Cuestionario.js";

window.onload = function () {
  var input = document.createElement("input");
input.type = "submit";
input.value = "Enviar respuestas";
  var form = document.getElementById("cuestionario-form");
  // Carga el archivo cuestionario.js
  var preguntas = cuestionario; // Cambia "Cuestionario" a "cuestionario"
// Declarar una variable para rastrear si "Otras" está seleccionada
var otrasSeleccionada = false;

  preguntas.forEach(function (pregunta) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = pregunta.pregunta;
    fieldset.appendChild(legend);
    

    if (pregunta.tipo === "number") {
      var input = document.createElement("input");
      input.type = pregunta.tipo;
      input.id = pregunta.id;
      input.name = pregunta.id;
      input.placeholder = pregunta.placeholder;
      input.required = true;
      input.min = pregunta.min;
      input.max = pregunta.max;
      input.maxLength = pregunta.maxlength;
      fieldset.appendChild(input);
    } else if (pregunta.tipo === "radio") {
      pregunta.opciones.forEach(function (opcion) {
        var input = document.createElement("input");
        input.type = pregunta.tipo;
        input.id = pregunta.id + opcion.valor;
        input.name = pregunta.name;
        input.value = opcion.valor;
        

        var label = document.createElement("label");
        label.setAttribute("for", pregunta.id + opcion.valor);
        label.textContent = opcion.texto;

        fieldset.appendChild(input);
        fieldset.appendChild(label);
         // Agrega un evento para mostrar/ocultar el campo de entrada de texto cuando se selecciona "Otras"

         
     // Agrega un evento para mostrar/ocultar el campo de entrada de texto cuando se selecciona "Otras"
     input.addEventListener("change", function () {
      var otroInput = document.getElementById(pregunta.id + "Otro");
      if (opcion.valor === "otras" && input.checked) {
        otroInput.style.display = "block";
        // Marcar "Otras" como seleccionada
        otrasSeleccionada = true;
      } else {
        // Si se selecciona otra opción, ocultar el campo de entrada de texto "Otros"
        otroInput.style.display = "none";
        // Marcar "Otras" como no seleccionada
        otrasSeleccionada = false;
      }
    });
  });
  
      // Agrega una validación para limitar la cantidad de selecciones
      var checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
      var maxSeleccion = pregunta.maxSeleccion || 1; // Si no se define, se permite una selección
      fieldset.addEventListener("change", function () {
        var seleccionados = Array.from(checkboxes).filter(function (checkbox) {
          return checkbox.checked;
        });
        if (seleccionados.length > maxSeleccion) {
          // Si se supera la cantidad máxima de selecciones, desmarca la última casilla marcada
          seleccionados[seleccionados.length - 1].checked = false;
        }
      });
      
    }
    else if (pregunta.tipo === "checkbox") {
      // Genera preguntas de tipo checkbox
      pregunta.opciones.forEach(function (opcion) {
        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = pregunta.id + opcion.valor;
        input.name = pregunta.name;
        input.value = opcion.valor;
  
        var label = document.createElement("label");
        label.setAttribute("for", pregunta.id + opcion.valor);
        label.textContent = opcion.texto;
  
        fieldset.appendChild(input);
        fieldset.appendChild(label);

        
        
     // Agrega un evento para mostrar/ocultar el campo de entrada de texto cuando se selecciona "Otras"
     input.addEventListener("change", function () {
      var otroInput = document.getElementById(pregunta.id + "Otro");
 if (opcion.valor === "otras" )  if (input.checked) {
  otroInput.style.display = "block";
  // Marcar "Otras" como seleccionada
  otrasSeleccionada = true;
} else {
  // Si se desmarca, mantener el campo de entrada visible si "Otras" está seleccionada
  if (otrasSeleccionada) {
    otroInput.style.display = "none";
  }
    
  otrosSeleccionada = false;
}
    });       
      }); 
  
      // Agrega una validación para limitar la cantidad de selecciones
      var checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
      var maxSeleccion = pregunta.maxSeleccion || 1; // Si no se define, se permite una selección
      fieldset.addEventListener("change", function () {
        var seleccionados = Array.from(checkboxes).filter(function (checkbox) {
          return checkbox.checked;
        });
        if (seleccionados.length > maxSeleccion) {
          // Si se supera la cantidad máxima de selecciones, desmarca la última casilla marcada
          seleccionados[seleccionados.length - 1].checked = false;
        }
      });
    }
      // Agrega un campo de entrada de texto para "Otros" (inicialmente oculto)
      var otroInput = document.createElement("input");
      otroInput.type = "text";
      otroInput.id = pregunta.id + "Otro";
      otroInput.name = pregunta.name + "Otro";
      otroInput.style.display = "none"; // Inicialmente oculto
      otroInput.classList.add("estilo-personalizado"); // Agrega la clase CSS
      fieldset.appendChild(otroInput);
      
    
    
    form.appendChild(fieldset);
  });
   // Mueve el botón de envío aquí, después de agregar todas las preguntas
   var submitButton = document.createElement("input");
   submitButton.type = "submit";
   submitButton.value = "Enviar respuestas";
   form.appendChild(submitButton);
   // Agrega un evento para manejar el envío del formulario
   form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Aquí puedes recopilar las respuestas del formulario y realizar acciones adicionales, como enviarlas a un servidor o mostrar un mensaje de agradecimiento
    // Ejemplo: 
    var respuestas = {};
    preguntas.forEach(function (pregunta) {
      if (pregunta.tipo === "number" || pregunta.tipo === "radio") {
        respuestas[pregunta.id] = document.querySelector('input[name="' + pregunta.id + '"]:checked').value;
      } else if (pregunta.tipo === "checkbox") {
        var checkboxes = document.querySelectorAll('input[name="' + pregunta.id + '"]:checked');
        respuestas[pregunta.id] = Array.from(checkboxes).map(function (checkbox) {
          return checkbox.value;
        });
      }
    });

    // Imprime las respuestas en la consola (puedes hacer lo que quieras con ellas)
    console.log(respuestas);
  });
};



