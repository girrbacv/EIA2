namespace Aufgabe0{
function halloDu(){
    var person : string = prompt("Wie heißt du?");
 var node: HTMLElement = document.getElementById("content");
        node.innerHTML += "Hey ";
        node.innerHTML += person;
        node.innerHTML += " ! ";
        console.log("Hey", person, " ! ")
    }

    document.addEventListener('DOMContentLoaded', halloDu);
}

