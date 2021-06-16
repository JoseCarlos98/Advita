"use strict"

var fondo = document.querySelector(".img-esteto");
var texto= document.getElementById("bienvenido");
var whatsapp = document.querySelector(".cont-texto");

whatsapp.addEventListener('click', ()=>{
    whatsapp.style.display = 'none'
})

let num = 0;
function cambiarFondo(lado) {
    if (lado == 'izq') {
        num --;
    }else{
        num ++;
    }
    if (num > 3) {
        num = 3
    } else if (num < 0){
        num = 0
    }
    
    if (num == 0) {
        fondo.style.backgroundImage = "url(/img/slideAdvita1.png)";
        texto.innerHTML = "Bienvenido al futuro de servicio y atención médica a domicilio."
    }else if(num == 1 ){
        fondo.style.backgroundImage = "url(/img/slideAdvita4.png)";
        texto.innerHTML = "En Advita creemos que; <br> El paciente es primero."
    }else if (num == 2){
        fondo.style.backgroundImage = "url(/img/slideAdvita2.png)";
        texto.innerHTML = "Contamos con la  <br> innovadora modalidad de <br> Hospital en Casa."
    }
}
    

    // MENU FIJO
let nav = document.getElementById('navvv');
let logo = document.querySelector('.logo');


window.addEventListener('scroll', function(){
    if((window.pageYOffset) > 35){
        nav.classList.add('nav-fijo')     
        logo.classList.add('logoM') 
    }
    else{
        nav.classList.remove('nav-fijo');     
        logo.classList.remove('logoM');
    }
})   


let nums = 0;
let icono = "";
document.querySelectorAll('.box').forEach(e =>{
    e.addEventListener('click', (el)=>{
        e.classList.toggle('click-box');
        icono = e.children[0]
        el.stopPropagation()
        icono.classList.toggle(`bi-plus-circle`)
        icono.classList.toggle('bi-dash-circle')
    })
})
