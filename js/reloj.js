let fecha = document.getElementById("fecha");
let hora = document.querySelector("#hora");

const obtenerFecha = () => {
  let time = new Date();

  // console.log(time);
  // console.log(time.getMonth()); //0-11 corresponde a los meses del año, empezando por enero
  // console.log(time.getDay()); //0-6 corresponde a los días de la semana, empezando por domingo
  //console.log(time.getDate()); //1-31 corresponde a lla fecha de cada día
  // console.log(time.getFullYear()); //año
  // console.log(time.getHours()); //horas
  // console.log(time.getMinutes()); //minutos
  // console.log(time.getSeconds()); // segundos

  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //fecha objetivo
  fecha.innerHTML = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } del ${time.getFullYear()}`;

  let segundos = time.getSeconds();
  let minutos = time.getMinutes();
  let horas = time.getHours();

  //modificar o dar formato a la hora

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (horas < 10) {
    horas = "0" + horas;
  }

  //hora objetivo
  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
};

setInterval(obtenerFecha, 1000);

//cambiar colores

const cambiarColor = (color) => {
  switch (color) {
    case "azul":
      fecha.className = "azul";
      hora.className = "azul";
      return;
    case "verde":
      fecha.className = "verde";
      hora.className = "verde";
      return;
    case "rosa":
      fecha.className = "rosa";
      hora.className = "rosa";
      return;
    default:
      fecha.className = "azul";
      hora.className = "azul";
      return;
  }
};
