var uno;
(function (uno) {
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "<=>"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);
    let handcards = [];
    //let a: string = prompt("Gib die Anzahl deiner Handkarten an")
    //let n: number
    // n = Number(a);
    function select() {
        var kartenanzahl = prompt("Gib die Anzahl deiner Handkarten an");
        let n = parseInt(kartenanzahl);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
        }
    }
    document.addEventListener("DOMContentLoaded", select);
})(uno || (uno = {}));
//# sourceMappingURL=uno.js.map