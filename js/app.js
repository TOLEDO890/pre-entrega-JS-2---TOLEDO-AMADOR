console.log ("conectado");

class pelicula {
    constructor(titulo, genero, anioPublicacion) {
        this.titulo = titulo;
        this.genero = genero;
        this.anioPublicacion = anioPublicacion;
    }
}

class serie {
    constructor(titulo,genero, anioPublicacion) {
        this.titulo = titulo;
        this.genero = genero;
        this.anioPublicacion = anioPublicacion;
    }
}

pelicula1 = new pelicula ("Ese Es Mi Hijo","comedia",2012);

pelicula2 = new pelicula ("Ted","comedia",2012);

pelicula3 = new pelicula ("La Isla De Las Rosas","Drama",2020);

pelicula4 = new pelicula ("SuperCool","comedia",2007);

pelicula5 = new pelicula ("Jules","Ciencia Ficcion",2023);

pelicula6 = new pelicula ("Pixeles","comedia",2015);

serie1 = new serie ("Sex Education","Comedia",2019);

serie2 = new serie ("La Casa De Papel","Accion",2017);

serie3 = new serie ("Los Peaky Blinders","Accion",2013);

serie4 = new serie ("Breaking Bad","Accion",2008);

serie5 = new serie ("The Walking Dead","Zombies",2010);

serie6 = new serie ("La Ley De Los Audaces","Comedia",2011);

let series = [serie1, serie2, serie3, serie4, serie5, serie6];

let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6];
console.log(peliculas);

console.log(series);

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
              "Año de Estreno: " + serieSeleccionada.anioPublicacion);
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