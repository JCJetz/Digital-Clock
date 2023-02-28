const clock = () => {
  let date = new Date(); // Date  obtiene la hora actual
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM"; // variable para almacenar el periodo (AM o PM) de acuerdo a la hora obtenida.
  // si la hora es igual a 0 asignarle un valor de 12, si es mayor o igual a 12 asignarle el mismo valor.
  // Si es mayor a 12, se le resta 12 para obtener la hora correcta en formato 12 horas.
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
  }
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  // condicionales para agregar un 0 a la izquierda de las variables si su valor es menor a 10.
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  //almaceno la hora en formato hh:mm:ss
  const time = `${hrs}:${mins}:${secs}:${period}`;
  //muestra en el elemento con id "clock"
  document.getElementById("clock").innerText = time;
  //se ejecuta la función de manera recurrente cada segundo
  setTimeout(clock, 1000);
};

clock();
