let contador = 1;

const saludar = (prueba)=>{
    document.write('<br> Hola Mundo');
    if(contador===5){
     //quiero detener el uso de setInterval
       window.clearInterval(identificador);
    }
    contador++
}

//saludar();

//ejecutar una función pasado un cierto tiempo 

//window.setTimeout(saludar,3000);
/* 
setTimeout(function(){
    saludar('algo')
}, 4000);

setTimeout(()=>{
    document.write('<br> Hola Mundo');
}, 5000); */

//caundo querramos ejecutar una función de manera repetida cada un cierto tiempo 

let identificador = window.setInterval(saludar, 4000);