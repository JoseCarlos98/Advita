// "use strict"

var fondo = document.querySelector(".img-esteto");
var texto= document.getElementById("bienvenido");
var whatsapp = document.querySelector(".cont-texto");
let num = 0;

whatsapp.addEventListener('click', ()=>{
    whatsapp.style.display = 'none'
})

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
        nav.classList.add('nav-fijo');  
        logo.classList.add('logoM');
    }
    else{
        nav.classList.remove('nav-fijo');     
        logo.classList.remove('logoM');
    }
})   

// CAMBIAR ICONOS 
let nums = 0;
let icono = "";
document.querySelectorAll('.box').forEach(e =>{
    e.addEventListener('click', (el)=>{
        e.classList.toggle('click-box');
        icono = e.children[0];
        el.stopPropagation();
        icono.classList.toggle(`bi-plus-circle`);
        icono.classList.toggle('bi-dash-circle');
    })
})

// ZOOM 
var acercar = document.querySelector(".fa-plus");
var alejar = document.querySelector(".fa-minus");
let body = document.getElementById('body');
const topInfo = document.querySelector('.mas')
const topInfo2 = document.querySelector('.menos')
const flechaa = document.querySelector('.flechha')
const flechaa2 = document.querySelector('.flechha2')

var zom = 100;
acercar.addEventListener('click', ()=>{
    zom+=10;
    body.style.zoom = `${zom}%`;
})
acercar.addEventListener('mouseover', ()=>{
    topInfo.classList.add('top-mostrar')
    flechaa.classList.add('top-mostrar')
})
acercar.addEventListener('mouseout', ()=>{
    flechaa.classList.remove('top-mostrar')
    topInfo.classList.remove('top-mostrar')
})

alejar.addEventListener('click', ()=>{
    zom+=-10;
    body.style.zoom = `${zom}%`;
})
alejar.addEventListener('mouseover', ()=>{
    topInfo2.classList.add('top-mostrar')
    flechaa2.classList.add('top-mostrar')
})
alejar.addEventListener('mouseout', ()=>{
    flechaa2.classList.remove('top-mostrar')
    topInfo2.classList.remove('top-mostrar')
})

