// 1 Eventos Clic by Marvin Fernández
// El input
const escribir_texto = document.getElementById('texto');
// Los Botones para enviar los datos al contenedor
const enviar_texto1 = document.getElementById('boton1');
const enviar_texto2 = document.getElementById('boton2');
const enviar_texto3 = document.getElementById('boton3');
const limpiar_texto = document.getElementById('limpiar');
// Los contenedores
const contenedor1 = document.getElementsByClassName('contenedor1')[0];
const contenedor2 = document.getElementsByClassName('contenedor2')[0];
const contenedor3 = document.getElementsByClassName('contenedor3')[0];
// Los label
const mostrar_texto1 = document.getElementById('texto1');
const mostrar_texto2 = document.getElementById('texto2');
const mostrar_texto3 = document.getElementById('texto3');
// Primer botón
enviar_texto1.addEventListener("click",()=>{
    contenedor1.setAttribute("style", "background-color:white")
    mostrar_texto1.setAttribute("style", "color:black")
    mostrar_texto1.innerHTML = escribir_texto.value;
});
// Limpiar tanto el input como los label y los contenedores
limpiar_texto.addEventListener('click',()=>{
    escribir_texto.value = "";
    mostrar_texto1.innerHTML = "";
    mostrar_texto2.innerHTML = "";
    mostrar_texto3.innerHTML = "";
    contenedor1.removeAttribute("style")
    contenedor2.removeAttribute("style")
    contenedor3.removeAttribute("style")
});
// Segundo botón
enviar_texto2.addEventListener("click",()=>{
    contenedor2.setAttribute("style", "background-color:white")
    mostrar_texto1.setAttribute("style", "color:black")
    mostrar_texto2.innerHTML = escribir_texto.value;
});
// tercer botón
enviar_texto3.addEventListener("click",()=>{
    contenedor3.setAttribute("style", "background-color:white")
    mostrar_texto1.setAttribute("style", "color:black")
    mostrar_texto3.innerHTML = escribir_texto.value;
});

// Evento Focus by Marvin Fernández.
const mostrar_T1 = document.getElementById('text1');
const mensaje = "Hola";
const cont1 = document.getElementById('P1');
cont1.addEventListener("focus", () => {
    mostrar_T1.innerHTML = mensaje;
    mostrar_T1.setAttribute("style","color:white");
    cont1.setAttribute("style","background-color:blue");
});
const mostrar_T2 = document.getElementById('text2');
const mensj = "Bienvenidos A";
const cont2 = document.getElementById('P2');
cont2.addEventListener("focus", () => {
    mostrar_T2.innerHTML = mensj;
    mostrar_T2.setAttribute("style","color:black");
    cont2.setAttribute("style","background-color:orange");
});
const mostrar_T3 = document.getElementById('text3');
const mens = "JavaScripts Events";
const cont3 = document.getElementById('P3');
cont3.addEventListener("focus", () => {
    mostrar_T3.innerHTML = mens;
    mostrar_T3.setAttribute("style","color:white");
    cont3.setAttribute("style","background-color:black");
});
// focusout
cont1.addEventListener("focusout", () => {
    mostrar_T1.innerHTML = "Continuamos";
    mostrar_T1.setAttribute("style","color:black");
    cont1.setAttribute("style","background-color:aqua");
});
cont2.addEventListener("focusout", () => {
    mostrar_T2.innerHTML = "Aprendiendo en";
    mostrar_T2.setAttribute("style","color:white");
    cont2.setAttribute("style","background-color:saddlebrown");
});
cont3.addEventListener("focusout", () => {
    mostrar_T3.innerHTML = "Los Eventos En JavaScript 💻";
    mostrar_T3.setAttribute("style","color:yellow");
    cont3.setAttribute("style","background-color:teal");
});
