/**navidad.js
Proyecto tarjeta de navidad.
@autor : Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>.
@license : GPL v3 o superior.
Año 2021
**/
'use strict'

window.onload = iniciar;

let slides=null;

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

    /*-------Sonido de botón de enviar-------*/

    let boton = document.getElementById('boton');

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "recursos/Cascabeles.mp3") /*sonido de prueba*/
      etiquetaAudio.play()
    })

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