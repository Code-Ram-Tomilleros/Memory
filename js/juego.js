function crearCartas(num){
    for(i=0; i<num; i++){
        let carta = document.createElement("div")
        carta.innerHTML="Aquí estan las cartas"
        document.querySelector(".cent").appendChild(carta)
        carta.classList.add("carta")
    }
    }
    crearCartas(20)