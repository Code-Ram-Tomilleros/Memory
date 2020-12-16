  let cards = [
    { id: "0", img: "images/cards/css.png" },
    { id: "1", img: "images/cards/gitlab.png " },
    { id: "2", img: "images/cards/html.png" },
    { id: "3", img: "images/cards/internet.png" },
    { id: "4", img: "images/cards/js.png" },
    { id: "5", img: "images/cards/mochuelo.png" },
    { id: "6", img: "images/cards/php.png" },
    { id: "7", img: "images/cards/python.png" },
    { id: "8", img: "images/cards/react.png" },
    { id: "9", img: "images/cards/sass.png" }]

  let cards2 = [
        { id: "0", img: "images/cards/css.png" },
        { id: "1", img: "images/cards/gitlab.png " },
        { id: "2", img: "images/cards/html.png" },
        { id: "3", img: "images/cards/internet.png" },
        { id: "4", img: "images/cards/js.png" },
        { id: "5", img: "images/cards/mochuelo.png" },
        { id: "6", img: "images/cards/php.png" },
        { id: "7", img: "images/cards/python.png" },
        { id: "8", img: "images/cards/react.png" },
        { id: "9", img: "images/cards/sass.png" }]



let carta= document.querySelector("#carta")
let tablero = document.getElementById("tablero")

   



function mostrarCartas() {
    //primero desordenamos el array cards:
    //cards.sort(e => Math.random() - 0.5)
    
    //ahora lo recorremos para crear una carta y mostrarla:
    for (let i = 0; i < cards.length; i++) {
        let duplicado = carta.cloneNode(true)
        duplicado.id = "carta-" + i
        duplicado.style.display = "block"
        tablero.appendChild(duplicado) 
        
    }
}
    mostrarCartas()

    



/* function crearCartas(num) {
    for (i = 0; i < num; i++) {
        let carta = document.createElement("div")
        let back = carta.appendChild(document.createElement("img"))
        back.src = "img/cards/back.png"
        let front = carta.appendChild(document.createElement("img"))
        front.classList.add("ocultar")
        front.classList.add("front")
        back.classList.add("carta")
        document.querySelector(".wrapper").appendChild(carta)
    }
}
 */
let cartaLevantada=0
let indiceCartaLevantada

document.querySelector("#tablero").onclick=(e)=>{
    if(e.target.className=="cartita"){
        if(cartaLevantada==0){ 
        e.target.src=`${cards1[e.target.dataset.id].img}`
        cartaLevantada=1
        indeceCartaLevantada=cards[e.target.dataset.id]}

    }else if(cartaLevantada==1){
        if(cards[indeceCartaLevantada].img==cards2[e.target.dataset.id].img){
            //has acertado
        }
    }
}







// OCULTAR ESTRELLAS

document.querySelector(".star-1").classList.add("ocultar")
document.querySelector(".star-2").classList.add("ocultar")
document.querySelector(".star-3").classList.add("ocultar")



// function moveCounter(){
//     moves++;
//     counter.innerHTML = moves;
//     //start timer on first click
//     if(moves == 1){
//         second = 0;
//         minute = 0; 
//         hour = 0;
//         startTimer();
//     }
//     // setting rates based on moves
//     if (moves > 8 && moves < 12){
//         for( i= 0; i < 3; i++){
//             if(i > 1){
//                 stars[i].style.visibility = "collapse";
//             }
//         }
//     }
//     else if (moves > 13){
//         for( i= 0; i < 3; i++){
//             if(i > 0){
//                 stars[i].style.visibility = "collapse";
//             }
//         }
//     }
// }
