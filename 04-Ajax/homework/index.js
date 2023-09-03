const [boton] = $("#boton");
const [search] = $("#search");
const url = "http://localhost:5000/amigos";
const [deleteBtn] = $("#delete");

const respuesta =(response)=>{
        const [lista] = $("#lista")
         lista.innerText = ""
        response.forEach(name => {
            const newLista = document.createElement ("li")
            newLista.innerHTML = name.name
            lista.appendChild(newLista);
        } )
            
}



  
const listFriends = () =>{
    $("#lista").empty();
    $.get(url, respuesta)

}



const searchFriend = ()=>{
    const [input] = $("#input")
    const id = input.value // number
    input.value = "" //Esta linea de codigo borra el dato ingresado una vez que realiza la accion requerida.
$.get(`${url}/${id}`, (response)=>{
    const [amigo] = $("#amigo")
    amigo.innerText = response.name;
} )
}

const deleteFriend = ()=>{
    const [inputDelete] = $("#inputDelete")
    const id = inputDelete.value;
    inputDelete.value = ""
    $.ajax({
        url: `${url}/${id}`,
        type: "DELETE",
        success: (response)=>{ respuesta (response)

        const [success] = $("#success")
        success.innerText = `Tu amigo de id: ${id} fue borrado con exito`
        }
    })
}

boton.addEventListener("click", listFriends);
search.addEventListener("click", searchFriend)
deleteBtn.addEventListener("click", deleteFriend)



