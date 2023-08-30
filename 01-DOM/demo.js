const buttonAgregar = document.querySelector ("#agregar");

const cambiarColor = function(event){
    const elemento = event.target
    console.log(event);
    if(elemento.className === "recuadro"){
        elemento.className = "recuadroVerde"
    }
    else{
        elemento.className = "recuadro"
    }
}

const clickHandler =function(){
    const contenedor = document.querySelector("#contenedor")

    const newDiv = document.createElement("div")
    newDiv.innerText = "Hola, Ft43a"
    

    newDiv.className = "recuadro"
    newDiv.addEventListener("click", cambiarColor)
    contenedor.appendChild(newDiv)

    
}

buttonAgregar.addEventListener("click", clickHandler);