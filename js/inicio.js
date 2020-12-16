
//Al pulsar botón se crea objeto partida y se pasa a pantalla juego:

let boton=document.querySelector("#inicioJugar")
let jugador=document.querySelector("#inicioNombre")
let pantallaInicio=document.querySelector("#inicioFondo")
let pantallaJuego=document.querySelector("#juegoFondo")
let cabecera=document.querySelector("#tituloTop")

boton.onclick=()=>{
    if(jugador.value!=""){
        let partida={
            fecha: new Date(),
            jugador: jugador.value,
            jugada:[],
            vidas:2
        }
 sessionStorage.setItem("memory", JSON.stringify(partida))
 //generada la partida, mostramos juego.html en el iframe
 pantallaInicio.classList.add ("ocultar")
 pantallaJuego.classList.remove("ocultar")
 cabecera.classList.remove("ocultar")
 
}
else{
    console.log("Está vacío")
}
}

//Efecto máquina escribir:

let panInicio=document.querySelector(".inicio")
let writing=str=>{
    let arrFromStr=str.split("")
    let i=0
    let printStr=setInterval(function(){
        panInicio.innerHTML+=arrFromStr[i]
        i++
        if (i=== arrFromStr.length){
            clearInterval(printStr)
        }
    },200 )      
} 
writing ("Introduce tu nombre:")