var btn_renunciar_tiempo =document.querySelector("#modal_btn_renunciar_tiempo")
var btn_renunciar_ganador =document.querySelector("#modal_btn_renunciar_ganador")
var btn_renunciar_perdedor =document.querySelector("#modal_btn_renunciar_perdedor")

var modal_button=document.querySelector(".modal_button")

btn_renunciar_tiempo.onclick=()=>{
    document.querySelector("#modal_tiempo").classList.add("ocultar")
}

btn_renunciar_ganador.onclick=()=>{
    document.querySelector("#modal_ganador").classList.add("ocultar")
}

btn_renunciar_perdedor.onclick=()=>{
    document.querySelector("#modal_perdedor").classList.add("ocultar")
}




modal_button.onclick=()=>{
    document.querySelector(".modal_container").classList.add("ocultar")
}

