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
    id: 'p1',
    pregunta: '¿Tenía ud. Conocimiento sobre lo que es la Ciber Seguridad o toma recién conocimiento de lo que es la Ciber Seguridad?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Tenia Conocimiento' },
      { valor: 'b', texto: 'Recién tomo conocimiento' },
    ],
    name: 'p1',
  },
  {
    pregunta: 'Al momento de Conectarse con su dispositivo electrónico ya sea en internet o a Wi Fi Ud. Diría que....',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Nunca Tiene en cuenta si el sitio es seguro o no' },
      { valor: 'b', texto: 'A veces tiene en cuenta si el sitio es seguro o no' },
      { valor: 'c', texto: 'Siempre Tengo en cuenta si el Sitio es Seguro No' },
    ],
    id: 'p2',
    name: 'p2',
  },
  {
    pregunta: 'Ahora le voy a pedir que evalue que tan importante es para ud. La ciber seguridad y le voy a pedir que lo haga como en el colegio donde 1 nada importante y 10 totalmente importante. Que puntaje le asigna ud?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Totalmente importante 10' },
      { valor: 'b', texto: '9 Ptos' },
      { valor: 'c', texto: '8 Ptos' },
      { valor: 'd', texto: '7 Ptos' },
      { valor: 'e', texto: '6 Ptos' },
      { valor: 'f', texto: '5 Ptos' },
      { valor: 'g', texto: '4 Ptos' },
      { valor: 'h', texto: '3 Ptos' },
      { valor: 'i', texto: '2 Ptos' },
      { valor: 'j', texto: 'Nada importante 1 Ptos' },
    ],
    id: 'p3',
    name: 'p3',
  },
  {
    pregunta: 'Respecto al uso del contraseñas ud. Diría que…',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Utiliza siempre la misma contraseña para todas las aplicaciones y/o accesos' },
      { valor: 'b', texto: 'Utiliza siempre distintas contraseñas para los accesos y aplicaciones' },
      { valor: 'otras', texto: 'Otra forma que no mencione: (consignar Respuesta)' },
    ],
    id: 'p4',
    name: 'p4',
  },
 

  {
    pregunta: 'Respecto a como acostumbra ud. A generar contraseñas. Ud. Diría que… ',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Que sea Facil de recordar sin tener en cuenta la seguridad' },
      { valor: 'b', texto: 'Que sea compleja teniendo en cuenta la Seguridad ' },
      { valor: 'c', texto: 'Que la genere una aplicación ' },
      { valor: 'otras', texto: 'Otra(Especificar)' },
    ],
    id: 'p5',
    name: 'p5',
  },
  
  {
    pregunta: 'Como acostumbra ud. a guardar sus contraseñas para recordarlas?(Respuestas multiples)',
    tipo: 'checkbox',
    opciones: [
      { valor: 'a', texto: 'En forma Digital (incluye gestores, archivos, mensajes en redes sociales)' },
      { valor: 'b', texto: 'Fisica (en papel)' },
      { valor: 'c', texto: 'Las recuerdo todas de memoria' },
      { valor: 'd', texto: 'Uso Siempre la misma para todo' },
      { valor: 'otras', texto: 'Otras: (Especificar)' },
    ],
    id: 'p6',
    name: 'p6',
    maxSeleccion: 4,
  },
  
  {
    pregunta: 'Además del uso de contraseñas, Que otros métodos utiliza para acceder a distintas aplicaciones en el uso cotidiano de dispositivos electrónicos? (Respuestas Multiples)',
    tipo: 'checkbox',
    opciones: [
      { valor: 'a', texto: 'Teléfonos (recepción de código por sms, código por wpp, códigos por email)' },
      { valor: 'b', texto: 'Huella digital - Biometrico' },
      { valor: 'c', texto: 'Reconocimiento Facial' },
      { valor: 'otras', texto: 'Otros (Especificar)' },
    ],
    id: 'p7',
    name: 'p7',
    maxSeleccion: 3,
  },
  
  {
    pregunta: 'Hablemos ahora del uso de redes sociales: de las siguientes situaciones que le voy a mencionar digame cual es la que ud. acostumbra…',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Siempre utilizo Dispositivos que sean de mi propiedad' },
      { valor: 'b', texto: 'A veces utilizo Dispositivos Ajenos' },
      { valor: 'c', texto: 'Siempre utilizo dispositivos que no son de mi propiedad' },
    ],
    id: 'p8',
    name: 'p8',
  },
  {
    pregunta: 'Respecto a Tu dispositivo Celular me podrías decir según el tipo de abono si es….',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'PREPAGO' },
      { valor: 'b', texto: 'PAGO CON ABONO' },
      { valor: 'c', texto: 'SOLO LO USO CON WIFI' },
    ],
    id: 'p9',
    name: 'p9',
  },
  {
    pregunta: 'En cuanto al uso del celular me gustaría que me dijera con que frecuencia ud. está pendiente del Celular o cada cuanto lo mira para ver si tiene notificaciones o para usar redes sociales y/o aplicaciones?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Estoy pendiente todo el tiempo' },
      { valor: 'b', texto: 'Cada 5 minutos' },
      { valor: 'c', texto: 'Entre 10 y 15 minutos' },
      { valor: 'd', texto: 'Entre 15 y 20 minutos' },
      { valor: 'e', texto: 'Entre 20 y 30 minutos' },
      { valor: 'f', texto: 'Entre 30 y 45 minutos' },
      { valor: 'g', texto: 'Entre 45 y 60 minutos' },
      { valor: 'h', texto: 'Menor Frecuencia' },
    ],
    id: 'p10',
    name: 'p10',
  },
  {
    pregunta: 'Cuales son las redes sociales que mas utiliza? Y la segunda que mas utiliza?',
    tipo: 'checkbox',
    opciones: [
      { valor: 'a', texto: 'Facebook' },
      { valor: 'b', texto: 'Instagram' },
      { valor: 'c', texto: 'Twitter' },
      { valor: 'd', texto: 'LinkedIn' },
      { valor: 'e', texto: 'Snapchat' },
      { valor: 'f', texto: 'TikTok' },
      { valor: 'otras', texto: 'Otras' },
    ],
    id: 'p12',
    name: 'p12',
    maxSeleccion: 2,
  },
  
  {
    pregunta: 'De la siguiente lista de Dispositivos electrónicos me podría decir ud. cual o cuales tiene',
    tipo: 'checkbox',
    opciones: [
      { valor: 'a', texto: 'Celular' },
      { valor: 'b', texto: 'PC' },
      { valor: 'c', texto: 'Laptop' },
      { valor: 'e', texto: 'Tablet/Ipad' },
      { valor: 'f', texto: 'Laptop del estado' },
      { valor: 'otras', texto: 'otro' },
    ],
    id: 'p13',
name: 'p13',
maxSeleccion: 4,
  },
  
  {
    pregunta: 'Cuando ud. instala Programas o aplicaciones lee los términos y condiciones, No los lee o no sabia que existen los términos y condiciones?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Lee los términos y condiciones' },
      { valor: 'b', texto: 'NO lee los términos y condiciones' },
      { valor: 'c', texto: 'No sabe de la existencia de Terminos y Condiciones' },
    ],
    id: 'p14',
    name: 'p14',
  },
  {
    pregunta: 'Cuando ud. instala programas nuevos a su dispositivo electrónico. Que busca?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Busca usar programas con licencia abierta' },
      { valor: 'b', texto: 'Busca programas con licencia paga' },
      { valor: 'c', texto: 'Busca utilizar con licencia paga pero crackeadas o Piratas' },
      { valor: 'otras', texto: 'Otros' },
    ],
    id: 'p15',
    name: 'p15',
  },
  
  {
    pregunta: 'al momento de proteger sus dispositivos de ataques e infecciones de virus o software malicioso',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'Utiliza Software de Antivirus Pagos' },
      { valor: 'b', texto: 'Utiliza Software de Antivirus Gratuitos' },
      { valor: 'c', texto: 'No utiliza software antivirus' },
    ],
    id: 'p16',
    name: 'p16',
  },
  {
    pregunta: 'Utiliza servicios donde ingrese datos bancarios como billeteras virtuales o sitios de Compra?',
    tipo: 'radio',
    opciones: [
      { valor: 'a', texto: 'SI Utiliza' },
      { valor: 'b', texto: 'No utiliza' },
    ],
    id: 'p17',
    name: 'p17',
  },
  

  // Agrega más preguntas aquí si es necesario
];
