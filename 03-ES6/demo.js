//ARROW FUNCTIONS

const numbers = [2, 5, 20, 3, 10, 7, 8, 15];

const multiplos = []

numbers.forEach((element)=>{
    if(element % 5 === 0) multiplos.push(element)
})

console.log(multiplos)

const saludo = (saludo) => {console.log ("Hola " + saludo );
}
saludo("Anthony");





let bob = {
    name: "Bob",
    friends: [],
    printFriends (){
        this.friends.forEach((friend)=>{console.log(this.name + " Conoce a " + friend)});
    }
}

bob.friends.push("Anthony");
bob.friends.push("Maximiliano");

bob.printFriends()




const obj = (name, lastname)=>{
 let object = {name, lastname}

 return object
}

console.log(obj("Anthony", "Maximiliano"));




const saludo2 = (saludo)=>{
    //return saludo + " " + "FT43A"
    return `${saludo} FT43A`
}
console.log(saludo2("Hola"))









let array = [9, 7, 2]

let object = {cohorte: "Ft43a", alumnos: 400}

let [a, ,b] = array

console.log(a,b);

let {cohorte} = object

console.log(cohorte)
console.log(object)