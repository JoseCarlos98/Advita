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
    } else {
            
        if (p == 'h') {
            
            if (x == 1) {
                fondo.style.backgroundImage = "url(img/slide1.jpg)";
                circulo1.classList.add("circulitos2-seleccionado");
                circulo2.classList.remove("circulitos2-seleccionado");
                circulo3.classList.remove("circulitos2-seleccionado");
                num = 0;
                
            }else if(x == 2 ){
                num = 1;
                fondo.style.backgroundImage = "url(img/slide2.jpg)";
                circulo2.classList.add("circulitos2-seleccionado");
                circulo1.classList.remove("circulitos2-seleccionado");
                circulo3.classList.remove("circulitos2-seleccionado");
            }else{
                num = 2;
                fondo.style.backgroundImage = "url(img/slide3.jpg)";
                circulo3.classList.add("circulitos2-seleccionado");
                circulo1.classList.remove("circulitos2-seleccionado");
                circulo2.classList.remove("circulitos2-seleccionado");
            }
        }
        else if (p == 'c'){
            if (x == 1) {
                fondo.style.backgroundImage = "url(img/slide1.jpg)";
            }else if(x == 2 ){
                fondo.style.backgroundImage = "url(img/slide2.jpg)";
            }else{
                fondo.style.backgroundImage = "url(img/slide3.jpg)";
            }
        }
        else{
            if (x == 1) {
                fondo.style.backgroundImage = "url(img/slide1.jpg)";
                circuloo1.classList.add("circulitos2-seleccionado");
                circuloo2.classList.remove("circulitos2-seleccionado");
                circuloo3.classList.remove("circulitos2-seleccionado");
                
            }else if(x == 2 ){
                fondo.style.backgroundImage = "url(img/slide2.jpg)";
                circuloo2.classList.add("circulitos2-seleccionado");
                circuloo1.classList.remove("circulitos2-seleccionado");
                circuloo3.classList.remove("circulitos2-seleccionado");
            }else{
                fondo.style.backgroundImage = "url(img/slide3.jpg)";
                circuloo3.classList.add("circulitos2-seleccionado");
                circuloo1.classList.remove("circulitos2-seleccionado");
                circuloo2.classList.remove("circulitos2-seleccionado");
            }
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
        menu.classList.add('nav3');                                    
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


    document.querySelectorAll(".info-categorias img").forEach(el=>{
        el.addEventListener("click", function(ev){
            ev.stopPropagation();
            this.parentNode.classList.add("active");
        })
    });
    
    document.querySelectorAll(".info-categorias").forEach(el=>{
        el.addEventListener("click", function(ev){
            this.classList.remove("active");
        })
    })

    function mostrarModal(a,b,c,d,e){

        let modal1 = document.getElementById(a);
        let modal2 = document.getElementById(b);
        let modal3 = document.getElementById(c);
        let modal4 = document.getElementById(d);
        let modal5 = document.getElementById(e);
        
        modal1.classList.add('ver');                                    
        modal1.classList.add('modall');                                    
        modal2.classList.add('info-modal');                                    
        modal3.classList.add('modal-img');                                    
        modal4.classList.add('modal-texto');                                    
        modal5.classList.add('vericono');                                    
    }

    function cerrarModal(a,b,c,d,e){
        let modal1 = document.getElementById(a);
        let modal2 = document.getElementById(b);
        let modal3 = document.getElementById(c);
        let modal4 = document.getElementById(d);
        let modal5 = document.getElementById(e);

        modal1.classList.remove('ver');                                    
        modal1.classList.remove('modall');                                    
        modal2.classList.remove('info-modal');                                    
        modal3.classList.remove('modal-img');                                    
        modal4.classList.remove('modal-texto');                                    
        modal5.classList.remove('vericono');
    }