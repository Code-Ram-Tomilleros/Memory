const cards = [
    { value: "css", img: "images/cards/css.png" },
    { value: "gitlab", img: "images/cards/gitlab.png " },
    { value: "html", img: "images/cards/html.png" },
    { value: "internet", img: "images/cards/internet.png" },
    { value: "js", img: "images/cards/js.png" },
    { value: "mochuelo", img: "images/cards/mochuelo.png" },
    { value: "php", img: "images/cards/php.png" },
    { value: "python", img: "images/cards/python.png" },
    { value: "react", img: "images/cards/react.png" },
    { value: "sass", img: "images/cards/sass.png" }]

const cards2 = [
    { value: "css", img: "images/cards/css.png" },
    { value: "gitlab", img: "images/cards/gitlab.png " },
    { value: "html", img: "images/cards/html.png" },
    { value: "internet", img: "images/cards/internet.png" },
    { value: "js", img: "images/cards/js.png" },
    { value: "mochuelo", img: "images/cards/mochuelo.png" },
    { value: "php", img: "images/cards/php.png" },
    { value: "python", img: "images/cards/python.png" },
    { value: "react", img: "images/cards/react.png" },
    { value: "sass", img: "images/cards/sass.png" }]





function crearCartas(num) {
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


document.querySelectorAll(".front")

if (contactos[i].gender == "f")
    duplicado.querySelector("[name='gender']").src = "../images/f.png"
listado.du



crearCartas(20)


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
