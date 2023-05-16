let userName = localStorage.getItem("name")
document.getElementById("welcome").innerHTML = `Bienvenida ${userName}`

let button = document.getElementById("button-answer");
button.addEventListener("click", answer)

let results = document.getElementById("results");

let answerOne = "a";
let answerTwo = "b";
let answerThree = "c";

let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")

let total = 0;

function answer(){
    
    let questionOne = document.querySelector('input[name = "answer1"]:checked')
    let questionTwo = document.querySelector('input[name = "answer2"]:checked')
    let questionThree = document.querySelector('input[name = "answer3"]:checked')

    let message = `Seleccionaste las opciones: ${questionOne.value}, ${questionTwo.value} y ${questionThree.value}`;
    alert(message);

    // if (questionOne == undefined || questionTwo == undefined || questionThree == undefined){
    //     alert("El usuario olvido seleccionar algunas preguntas");
    //     // este return se acaba la funcion 
    //     return;
    // }

    if (questionOne.value == answerOne){
        p1.textContent = "La respuesta de la pregunta 1 es correcta"
        total = total + 3;
    } else {
        p1.textContent = `La respuesta es incorrecta, la respuesta correcta es la Opción: ${answerOne}`
        total -= 1;
    }

    if (questionTwo.value == answerTwo){
        p2.textContent = "La respuesta de la pregunta 2 es correcta"
        total += 3;
    } else {
        p2.textContent = `La respuesta es incorrecta, la respuesta correcta es la Opción: ${answerTwo}`
        total -= 1;
    }

    if (questionThree.value == answerThree){
        p3.textContent = "La respuesta de la pregunta 3 es correcta"
        total += 3;
    } else {
        p3.textContent = `La respuesta es incorrecta, la respuesta correcta es la Opción: ${answerThree}`
        total -= 1;
    }

    results.appendChild(p1);
    results.appendChild(p2);
    results.appendChild(p3);

    results.appendChild(document.createTextNode(`Tu total fue ${total}`));
}