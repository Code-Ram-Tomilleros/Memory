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
    },400 )      
} 
writing ("Introduce tu nombre:")

//Al pulsar botón se crea objeto partida y se pasa a pantalla juego:

let boton=document.querySelector("#inicioJugar")
let jugador=document.querySelector("#inicioNombre")
let pantallaInicio=document.querySelector("#inicioFondo")
let pantallaJuego=document.querySelector("#juegoFondo")

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
        document.querySelector("body").style.backgroundImage="url('./images/fondos/stars1.png')" 
    }
    else{
        console.log("Está vacío")
    }
}
