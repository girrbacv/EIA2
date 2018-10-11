var Aufgabe0;
(function (Aufgabe0) {
    function halloDu() {
        var person = prompt("Wie heißt du?");
        var node = document.getElementById("content");
        node.innerHTML += "Hey ";
        node.innerHTML += person;
        node.innerHTML += " ! ";
        console.log("Hey", person, " ! ");
    }
    document.addEventListener('DOMContentLoaded', halloDu);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map