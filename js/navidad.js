/**navidad.js
 *  Página principal.
 * Proyecto tarjeta de navidad.
 * @autor : Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>.
 * @license : GPL v3 o superior.
 * Año 2021
**/
'use strict'
//Al carcar la página ejecurá la funcioón de iniciar
window.onload = iniciar;

let slides=null;
/**
 * Función de inicio ejecutada al cargar la página
 */
function iniciar(){

    /*-------Slide-------*/

    let slide=0;

    //Total de sliders
    slides = document.querySelectorAll("#slider ul li");

    //Muestra el total de elementos que hay.
    let total = slides.length-1;

    showSlider(slide);

    //Pasa al siguiente slider continuamente con una pausa de entre 5 y 10 segundos.
    setInterval(() => {
        slide++;

        //Comprobaciones.
        if (slide > total) slide = 0;

        showSlider(slide);
    }, Math.floor(Math.random()*10000)+5400);

    //Botones siguiente y atrás
    let siguiente = document.getElementById("siguiente");
    let anterior = document.getElementById("anterior");

    /**
     * Botón siguiente.
     */
      siguiente.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        //Comprobación para volver al primero
        if (slide > total) slide = 0;
        showSlider(slide);
    })

    /**
     * Botón atrás.
     */
     anterior.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 0) slide = total; //Ponemos el slider en la última posición.
        showSlider(slide);
    })

    /*---------TARJETA-------*/

    document.getElementById('plantilla').onchange=plantilla;
    document.getElementById('texto').onchange=texto;

}
/**
 * Función para añadir la plantilla de la tarjeta seleccionada por el usuario
 */
function plantilla(){

    vaciarplantilla();
    document.getElementById('tarjeta').style.display = "block"; //Por defecto none, si quiere crear la tarjeta se pondrá block al elegir la plantilla
    let divplantilla = document.getElementById('plantillatar');
    let plantilla=document.getElementById('plantilla').value;
    let img=document.createElement('img');
    divplantilla.appendChild(img);
    img.setAttribute('src',`img/${plantilla}.png`);
    img.setAttribute('id','imagen');

}
/**
 * Función para añadir el texto de felicitación de la tarjeta seleccionado por el usuario
 */
function texto(){

    if(document.getElementById('ptexto')){
        document.getElementById('ptexto').remove();
        document.getElementById('enviar').remove();
    }

    if(document.getElementById('imagen')){

        let tarjeta = document.getElementById('tarjeta');
        let texto=document.createElement('p');
        tarjeta.appendChild(texto);
        texto.setAttribute('id','ptexto');

        let arraytexto = {
            'texto1':"Querido <span id='nombre'></span>,<br />En Navidad  se celebra el Nacimiento de Cristo y el Año Nuevo es el nacimiento de una nueva esperanza.<br />Que Dios en su infinita bondad, bendiga y llene nuestros corazones con paz y amor la noche de Navidad.<br />¡Felices fiestas!",
            'texto2':"<span id='nombre'></span>,<br />Que esta Navidad sea motivo de felicidad y el Año Nuevo una esperanza de éxito y prosperidad.",
            'texto3':"<span id='nombre'></span>,<br />Te deseo una Feliz Navidad y un próspero año nuevo.<br />¡Felices fiestas!",
            'texto4': "¡Feliz Navidad <span id='nombre'></span>!,<br />Que todo lo bueno que el niño Jesús nos trajo, te busque, te encuentre y se quede contigo.",
            'texto5':"<span id='nombre'></span>,<br />Que la estrella de la Navidad ilumine nuestras vidas, traiga a nuestros corazones amor y esperanza.<br />¡Feliz Navidad!"
        };

        texto.innerHTML=arraytexto[document.getElementById('texto').value];
        let span = document.getElementById('nombre');
        span.innerHTML = document.getElementById('inombre').value;

        boton();
    }

}
/**
 * Función para borrar tarjeta
 */
function vaciarplantilla(){
    let div = document.getElementById("plantillatar");
    while(div.firstElementChild){
      div.removeChild(div.firstElementChild);
    }
}
/**
 * Función para crear el botón de enviar la tarjeta
 */
function boton(){
    let div= document.getElementById("divtarjeta");
    let divBoton=document.createElement('div');
    div.appendChild(divBoton);
    divBoton.setAttribute('id','enviar');
    let boton=document.createElement('a');
    divBoton.appendChild(boton);
    boton.setAttribute('id','boton');
    boton.appendChild(document.createTextNode('Enviar'));

    /*-------Sonido de botón de enviar-------*/

    boton.addEventListener("click", () => {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "recursos/Cascabeles.mp3") /*sonido de prueba*/
        etiquetaAudio.play()
    })

    urlboton();


}
/**
 * Función para definnir url de boton
 */
function urlboton(){
    let boton= document.getElementById("boton");
    let plantilla= document.getElementById('plantilla').value;
    let texto= document.getElementById('texto').value;
    let nombre= document.getElementById('inombre').value;

    boton.setAttribute('href',`html/tarjeta.html?plantilla=${plantilla}&nombre=${nombre}&texto=${texto}&editor=si`);

}
/**
 * Muestra los sliders pasados por parametro.
 * @param {Number} n - Numero del slide del que quieres mostrar.
 */
    function showSlider(n) {
        for (let i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block"
                    : slides[i].style.display = "none";
        }

    }

/*---SLIDER BY SERGIO ---*/
