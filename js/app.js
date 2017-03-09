var estudiantes = [];
console.log(estudiantes);

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

// function pedirDatos(){
//   //aqui pide los datos del estudiante
//   var nameStudent=prompt("Nombre del Estudiante:");
//   var punTec=prompt("Puntos Tecnicos del Estudiante:");
//   var puntHSE=prompt("Puntos HSE del Estudiante:");
//   var nuevoEstudiante={
//     nombreEstudiante : nameStudent,
//     puntosTec : punTec,
//     puntosHSE:puntHSE
//   };
//   return nuevoEstudiante
// }

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado


    //aqui pide los datos del estudiante
    var nameStudent=prompt("Nombre del Estudiante:");
    var punTec=prompt("Puntos Tecnicos del Estudiante:");
    var puntHSE=prompt("Puntos HSE del Estudiante:");

    //obtiene los los datos de los estudiantes y crea un objeto
    var nuevoEstudiante={
      nombreEstudiante : nameStudent,
      puntosHSE:puntHSE,
      puntosTec : punTec
    };
    //aqui agrega el nuevo estudiante al arreglo de estudianes
    estudiantes.push(nuevoEstudiante);

    //y retornamos el  objeto estudiante
    return nuevoEstudiante;
}

function guardarEstudiante(){
  var listaEstudiantes=[];
  listaEstudiantes.push(agregarEstudiante());
  console.log(listaEstudiantes);
  return listaEstudiantes;
}



function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    return obtenerListaEstudiantes();


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
