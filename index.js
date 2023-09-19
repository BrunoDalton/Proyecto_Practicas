import { cuestionario } from "./Cuestionario.js";

window.onload = function () {
  var form = document.getElementById("cuestionario-form");
  // Carga el archivo cuestionario.js
  var preguntas = cuestionario; // Cambia "Cuestionario" a "cuestionario"

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
      });
    }

    form.appendChild(fieldset);
  });
};
