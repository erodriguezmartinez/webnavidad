/**tarjeta.js
 *  Tarjeta a visualizar ya creada por el editor.
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
    
    plantilla(obtener('plantilla'));
    texto(obtener('texto'),obtener('nombre'));
    //Comprobamos si es el editor de la tarjeta para crear la caja y la url a compartir,
    //si no es el editor que no le aparezca la caja con la url a compartir.
    if(obtener('editor')=='si'){
        cajaenlace();  
    }    
    document.getElementById('url').setAttribute('href','javascript:enlace();');
}
/**
 * Función para añadir la plantilla de la tarjeta seleccionada por el usuario
 */
function plantilla(plantilla){
    
    let main = document.getElementsByTagName("main")[0];
    let img=document.createElement('img');
    main.appendChild(img); 
    img.setAttribute('src',`../img/${plantilla}.png`); 
    img.setAttribute('id','imagen'); 

}
/**
 * Función para añadir el texto de felicitación de la tarjeta seleccionado por el usuario
 */
function texto(texto,nombre){
    
    if(document.getElementById('imagen')){
                    
        let main = document.getElementsByTagName("main")[0];
        let ptexto=document.createElement('p');
        main.appendChild(ptexto);
        ptexto.setAttribute('id','ptexto'); 

        let arraytexto = {
            'texto1':"Querido <span id='nombre'></span>,<br />En Navidad  se celebra el Nacimiento de Cristo y el Año Nuevo es el nacimiento de una nueva esperanza.<br />Que Dios en su infinita bondad, bendiga y llene nuestros corazones con paz y amor la noche de Navidad.<br />¡Felices fiestas!",
            'texto2':"<span id='nombre'></span>,<br />Que esta Navidad sea motivo de felicidad y el Año Nuevo una esperanza de éxito y prosperidad.", 
            'texto3':"<span id='nombre'></span>,<br />Te deseo una Feliz Navidad y un próspero año nuevo.<br />¡Felices fiestas!", 
            'texto4': "¡Feliz Navidad <span id='nombre'></span>!,<br />Que todo lo bueno que el niño Jesús nos trajo, te busque, te encuentre y se quede contigo.",
            'texto5':"<span id='nombre'></span>,<br />Que la estrella de la Navidad ilumine nuestras vidas, traiga a nuestros corazones amor y esperanza.<br />¡Feliz Navidad!" 
        };

        ptexto.innerHTML=arraytexto[texto];
        let span = document.getElementById('nombre');
        span.innerHTML = nombre;

    }
    
}
/**
 * Función para obtener y retornar el valor de un get indicado
 * @param {get a buscar} variable 
 * @returns 
 */
function obtener(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}
/**
 * Función para crear la caja y el enlace para compartir la tarjeta
 */
function cajaenlace(){

    let main = document.getElementsByTagName("main")[0];
    let div = document.createElement('div');
    main.appendChild(div);
    div.setAttribute('id','divurl');
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.appendChild(document.createTextNode('Copia la url para compartir tu tarjeta'));
    let a= document.createElement('a');
    div.appendChild(a);
    a.appendChild(document.createTextNode('Copiar URL'));
    a.setAttribute('id','url');
}
/**
 * Función para copiar link
 */
function enlace() {
    let aux = document.createElement("input");
    aux.setAttribute("value",window.location.href);
    let cadena = aux.value;
    aux.value = cadena.replace('&editor=si', '');
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
