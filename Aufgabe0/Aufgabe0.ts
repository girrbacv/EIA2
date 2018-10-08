function halloDu() : void {
    var person : string = prompt("Wie heißt du?");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hey" + person ;
    }
      console.log(halloDu + "!");
}