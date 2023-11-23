alert ("conectado");

class pelicula {
    constructor(titulo, genero, anioPublicacion ,duracion) {
        this.titulo = titulo;
        this.genero = genero;
        this.anioPublicacion = anioPublicacion;
        this.duracion= duracion;
    }
}

class serie {
    constructor(titulo,genero, anioPublicacion , duracion) {
        this.titulo = titulo;
        this.genero = genero;
        this.anioPublicacion = anioPublicacion;
        this.duracion= duracion;
    }
}

pelicula1 = new pelicula ("ese es mi hijo","comedia",2012);

pelicula2 = new pelicula ("ted","comedia",2012);

pelicula3 = new pelicula ("la isla de las rosas","comedia",2020);

pelicula4 = new pelicula ("supercool","comedia",2007);

pelicula5 = new pelicula ("jules","accion",2023);

pelicula6 = new pelicula ("pixeles","comedia",2015);

serie1 = new serie ("sex education","comedia",2019);

serie2 = new serie ("la casa de papel","accion",2017 );

serie3 = new serie ("los peaky blinders","accion",2013);

serie4 = new serie ("breaking bad","accion",2008);

serie5 = new serie ("the walking dead","accion",2010 );

serie6 = new serie ("la ley de los audaces","comedia",2011,);

let series = [serie1, serie2, serie3, serie4, serie5, serie6];

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6];
console.log (peliculas);
console.log (series);

let opcion = prompt("¿Quieres ver 'series' o 'peliculas'?");

opcion = opcion.toLowerCase();

if (opcion === "series") {

    alert("Aquí están las series:\n" + series.map(serie => serie.titulo).join("\n"));

    let opcionSerie = prompt("Elige una serie por su título:\n" + series.map(serie => serie.titulo).join("\n"));

    let serieSeleccionada = series.find(serie => serie.titulo === opcionSerie);

    if (serieSeleccionada) {
        alert("Aquí está la serie seleccionada:\n" + 
              "Título: " + serieSeleccionada.titulo + "\n" +
              "Género: " + serieSeleccionada.genero + "\n" +
              "Año de Estreno: " + serieSeleccionada.anioPublicacion
             
              );
    } else {
        alert("Serie no encontrada. Por favor, elige una serie válida.");
    }

} else if (opcion === "peliculas") {

    alert("Aquí están las películas:\n" + peliculas.map(pelicula => pelicula.titulo).join("\n"));

    let opcionPelicula = prompt("Elige una película por su título:\n" + peliculas.map(pelicula => pelicula.titulo).join("\n"));

    let peliculaSeleccionada = peliculas.find(pelicula => pelicula.titulo === opcionPelicula);

    if (peliculaSeleccionada) {
        alert("Aquí está la película seleccionada:\n" + 
              "Título: " + peliculaSeleccionada.titulo + "\n" +
              "Género: " + peliculaSeleccionada.genero + "\n" +
              "Año de Estreno: " + peliculaSeleccionada.anioPublicacion);
    } else {
        alert("Pelicula no encontrada. Por favor, elige una película válida.");
    }
} else {
    alert("Opción no válida. Por favor, ingresa 'series' o 'peliculas'.");
}
let comedia = series.concat(peliculas).filter(item => item.genero === "comedia");

let accion = series.concat(peliculas).filter(item => item.genero ==="accion")

function sumarContenido(numSeries, numPeliculas) {
    let contenidoTotal = numSeries + numPeliculas;
    return contenidoTotal;
}
let contenidoTotal = sumarContenido(series.length, peliculas.length);

alert("El contenido total de la página es de " + contenidoTotal + " entre películas y series");
alert("Existen en esta pagina "+series.length +" series y " + peliculas.length + " peliculas")
alert("Existen en esta pagina "+comedia.length+ " peliculas y series del genero comedia");
alert("Existen en esta pagina "+ accion.length +" peliculas y series del genero accion");
