export const cuestionario = [
  {
    pregunta: '¿Cuál es su edad?',
    tipo: 'number',
    id: 'edad',
    placeholder: 'Ingresa tu edad',
    min: 14,
    max: 90,
    maxlength: 2,
  },
  {
    pregunta: '¿Cuál es su sexo?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Masculino' },
      { valor: 'b', texto: 'Femenino' },
    ],
    name: 'sexo',
  },
  {
    pregunta: '¿Tenía ud. Conocimiento sobre lo que es la Ciber Seguridad o toma recién conocimiento de lo que es la Ciber Seguridad?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Tenia Conocimiento' },
      { valor: 'b', texto: 'Recién tomo conocimiento' },
    ],
    name: 'pregunta1',
  },
  {
    pregunta: 'Al momento de Conectarse con su dispositivo electrónico ya sea en internet o a Wi Fi Ud. Diría que....',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Nunca Tiene en cuenta si el sitio es seguro o no' },
      { valor: 'b', texto: 'A veces tiene en cuenta si el sitio es seguro o no' },
      { valor: 'c', texto: 'Siempre Tengo en cuenta si el Sitio es Seguro No' },
    ],
    name: 'pregunta2',
  },
  // Agrega más preguntas aquí si es necesario
];
