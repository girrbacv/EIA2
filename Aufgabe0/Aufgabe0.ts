function halloDu() {
    var person = prompt("Wie heißt du?");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hey" + person ;
    }
}