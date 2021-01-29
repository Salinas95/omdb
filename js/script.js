
/*
   Titlo - director - Fecha - poster

*/


            
/* fetch("http://www.omdbapi.com/?t=back+to+the+future&apikey=837fdf85")
//fetch("http://www.omdbapi.com?t=rocky&apikey=837fdf85")
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))  */



/* //El id que se utiliza en el index
const container=document.getElementById("container");

fetch("http://www.omdbapi.com/?t=back+to+the+future&apikey=837fdf85")
    .then(pelicula => pelicula.json())
    .then(pelicula => mostrar(pelicula))


const mostrar=(pelicula)=>{
    //Título
    const titulo=document.createElement("p");
    titulo.textContent="Titulo: "+pelicula.Title;
    container.append(titulo);

    //Director
    const director=document.createElement("p");
    director.textContent="Director: "+pelicula.Director;
    container.append(director);

    //Fecha estreno
    const fecha=document.createElement("p");
    fecha.textContent="Fecha de Estreno: "+pelicula.Released;
    container.append(fecha);

    //Poster
    const img=document.createElement("img");
    img.src=pelicula.Poster;
    container.append(img);
} */


const container=document.getElementById("container");
const search=document.getElementById("search");
const busqueda=document.getElementById("busqueda");

/* fetch("http://www.omdbapi.com/?t=back+to+the+future&apikey=837fdf85")
    .then(film => film.json())
    .then(pelicula => mostrar(pelicula)) */




const mostrar=(pelicula)=>{
    //console.log(pelicula);

    //Título
    const title=document.getElementById("titulo");
    title.textContent=pelicula.Title;

    //Director
    const dir=document.getElementById("director");
    dir.textContent=pelicula.Director;

    //Fecha
    const date=document.getElementById("fecha");
    date.textContent=pelicula.Released;

    //Poster
    const img=document.getElementById("img");
    img.src=pelicula.Poster;

    busqueda.value="";
}

const buscar=()=>{
    fetch("http://www.omdbapi.com/?t=" + busqueda.value + "&apikey=837fdf85")
        .then(pelicula => pelicula.json())
        .then(pelicula => mostrar(pelicula))
}

search.addEventListener("click",buscar);


