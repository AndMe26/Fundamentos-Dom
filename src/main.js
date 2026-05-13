import "./styles/globals.css"


const element = document.getElementById('header')

console.log(element);

const elementwo = document.getElementsByClassName('p-3')

console.log("-----------------------------")

for (const element of elementwo) {
    console.log(element)
}

console.log("-----------------------------")

const elementhree = document.getElementsByTagName("li")

for (const element of elementhree) {
    console.log(element)
}

console.log("-----------------------------")

const elementfour = document.querySelector("div p")

console.log(elementfour);

console.log("-----------------------------")

const elementfive = document.querySelectorAll(".text-slate-400")

for (const element of elementfive) {
    console.log(element)
}


const elementsix = document.getElementById("dynamic-content")

elementsix.innerHTML = "<div>Hola aqui va mi texto de prueba</div>"