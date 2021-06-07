var fondo = document.getElementById("fondo");
let circulo1 = document.getElementById("circulo1");
let circulo2 = document.getElementById("circulo2");
let circulo3 = document.getElementById("circulo3");
let circuloo1 = document.getElementById("circuloo1");
let circuloo2 = document.getElementById("circuloo2");
let circuloo3 = document.getElementById("circuloo3");
let box = document.getElementById("boxN");
let box2 = document.getElementById("boxN2");
var num = 0;

function cambiarFondo(x, p, lado) {
    if (p == 'lado') {
        if (lado == 'izq') {
            num -= 1;
        }else{
            num += 1 
        }
        if (num > 3) {
            num = 3
        } else if (num < 0){
            num = 0
        }
        if (num == 0) {
            fondo.style.backgroundImage = "url(img/slide1.jpg)";
            circulo1.classList.add("circulitos2-seleccionado");
            circulo2.classList.remove("circulitos2-seleccionado");
            circulo3.classList.remove("circulitos2-seleccionado");
        }else if(num == 1 ){
            fondo.style.backgroundImage = "url(img/slide2.jpg)";
            circulo2.classList.add("circulitos2-seleccionado");
            circulo1.classList.remove("circulitos2-seleccionado");
            circulo3.classList.remove("circulitos2-seleccionado");
        }else if (num == 2){
            fondo.style.backgroundImage = "url(img/slide3.jpg)";
            circulo3.classList.add("circulitos2-seleccionado");
            circulo1.classList.remove("circulitos2-seleccionado");
            circulo2.classList.remove("circulitos2-seleccionado");
        }
    } 
}

    // MENU FIJO
    let menuchico = document.getElementById('menufijo');
    let menu = document.getElementById('menu');
    let logofijo = document.getElementById("img-fijo2");
    let aaa = document.getElementById('imgg');
    let logo = document.getElementById('logofijo');
    let menu11= document.getElementById('menu11');
    let fijo= document.getElementById('fijoo');

    window.addEventListener('scroll', function(){
    if((window.pageYOffset) > 35){
        // menu.classList.add('nav3');                                    
        menu11.classList.add('cien');                                    
        aaa.classList.add('mg');                                    
        logo.classList.add('logo-fijo');      
        logo.style.display = "block";                              
        logofijo.style.display = "none";                              
        fijo.classList.add('fijo');                                    
    }
    else{
        menu11.classList.remove('cien');                                    
        fijo.classList.remove('fijo');                                    
        menu11.classList.remove('nav-opcionesM');                              
        logofijo.style.display = "block";                              
        menu.classList.remove('nav3');                                    
        aaa.classList.remove('mg');                                    
        logo.style.display = "none";                              
    }

    })   


        const um = document.querySelector('.um');
        const hc = document.querySelector('.hc');
        const svg = document.querySelector('.seccion3 .container .cuadro-efecto .linea svg');
        const textoum = document.querySelector('.seccion3 .container .cuadro-efecto .um p')
        const textohc = document.querySelector('.seccion3 .container .cuadro-efecto .hc p')
        const linea = document.querySelectorAll('.color')
        const textum = document.querySelector('.seccion3 .container .textos h1')
        const texthc = document.querySelector('.seccion3 .container .textos h2')
        
        const hoverhc = document.querySelector('seccion3 .container .cuadro-efecto .hc:hover')
        
        
        hc.addEventListener('click', ()=>{
            um.classList.add('cambio');
            hc.classList.add('cambio');
            svg.classList.add('cambioColor');
            textoum.style.background = 'none';
            linea[0].style.background = '#0099DC';
            linea[1].style.background = '#0099DC';
            textohc.style.background = '#0099DC';
            hc.style.background = 'none'
            um.style.background = ''
            textum.style.opacity = '0%'
            texthc.style.opacity = '100%'
        })
        um.addEventListener('click', ()=>{
            textum.style.opacity = '100%'
            texthc.style.opacity = '0%'
            um.style.background = 'none'
            um.classList.remove('cambio');
            hc.classList.remove('cambio');
            hc.style.background = ''
            svg.classList.remove('cambioColor');
            textoum.style.background = '#E0007A';
            textohc.style.background = 'none';
            linea[0].style.background = '#E0007A';
            linea[1].style.background = '#E0007A';
        })




