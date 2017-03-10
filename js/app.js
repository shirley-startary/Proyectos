var estudiantes = [];
console.log(estudiantes);

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    //aqui solo se esta llamando a la lista de estudiantes.
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    //aqui pide los datos del estudiante
    var nameStudent=prompt("Nombre del Estudiante:");
    var punTec=parseInt(prompt("Puntos Tecnicos del Estudiante:"));
    var puntHSE=parseInt(prompt("Puntos HSE del Estudiante:"));

    //obtiene los los datos de los estudiantes y crea un objeto
    var nuevoEstudiante={
      nombreEstudiante : nameStudent,
      puntosHSE:puntHSE,
      puntosTec : punTec
    };
    //aqui agrega el nuevo estudiante al arreglo de estudiantes
    estudiantes.push(nuevoEstudiante);

    //y retornamos el  objeto estudiante
    return nuevoEstudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";//aqui accedemos a la propiedad nombreEstudiante del objeto
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";//aqui accedemos a la propiedad puntosTec del objeto
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";//aqui accedemos a la propiedad puntosHSE del objeto
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    var ListaCompleta = ""; //Tenemos ListaCompleta inicializada con un string vacio
    estudiantes.forEach(function(alumna){ //con la funcion forEach se recorre todo el arreglo de objetos
      ListaCompleta+=mostrar(alumna); // y se concatena para poder mostrar toda la ListaCompleta iterando en la funcion mostrar()
    });
    return ListaCompleta; //retornamos la ListaCompleta
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    nombre=nombre.toLowerCase();//nombre lo convertimos a minuscula, para que sea sencible a mayusculas y minuscula

    var estudianteBuscado=estudiantes.filter(function(alumna){ //recorremos con filter toda la lista de estudiantes
      /*comparamos nombre con el parametro de nombreEstudiante, para que la condicion
      filter devuelva el arreglo filtrado simpre y cuando cumpla con la condicion*/
      return alumna.nombreEstudiante.toLowerCase()===nombre;
    });
      return estudianteBuscado; //y devuelve el estudianteBuscado con todos sus paramatros ya filtrado
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

  //con la funcion sort recorre el arreglo y  ordenamos de mayor a menor el arreglo,
    var ordenadoPorTec=estudiantes.sort(function(alumnaA,alumnaB){
      return alumnaA.puntosTec < alumnaB.puntosTec; //se ordenara tomando los puntos tecnicos de los estudiantes
    });
    return ordenadoPorTec;//y retornamos el arreglo ya ordenado por los puntos Tecnico
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

    //con la funcion sort recorre el arreglo y  ordenamos de mayor a menor el arreglo,
    var ordenadoPorHSE=estudiantes.sort(function(alumnaA,alumnaB){
      return alumnaA.puntosHSE < alumnaB.puntosHSE;//se ordenara tomando los puntosHSE de los estudiantes
    });
    return ordenadoPorHSE; //retornamos la lista de estudiantes  de acuerdo a los puntosHSE
}
