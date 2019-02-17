/*Aufgabe: Aufgabe 3: Events - UNO
   Name: Verena Girrbach
   Matrikel:
   Datum: 11.11.18
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   Dieser Code wurde in Zusammenarbeit mit Katja Ljubas erstellt.
   */
var uno;
(function (uno) {
    document.addEventListener("DOMContentLoaded", select);
    document.addEventListener("keydown", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let joker = ["X", "<=>", "+4", "+2"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let pile = [];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);
    let handcards = [];
    function select() {
        var kartenanzahl = prompt("Gib die Anzahl deiner Handcards an");
        let n = parseInt(kartenanzahl);
        randomCard(n);
        displayHand();
        let button = document.getElementById("button");
        button.addEventListener("click", sortHandcards);
        let draw = document.getElementById("stack");
        draw.addEventListener("click", drawFromstack);
    }
    function randomCard(_anz) {
        for (let anz = _anz; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
    function displayHand() {
        document.getElementById("Handcards").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            // EventListener für Ablegen hinzugefügt
            div.addEventListener("click", PlayCard);
        }
    }
    function PlayCard(_event) {
        document.getElementById("pile").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        pile.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("pile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    // Sort handcards by color
    function sortHandcards() {
        console.log(handcards);
        document.getElementById("Handcards").innerHTML = "";
        handcards.sort((CardA, CardB) => {
            if (CardA.color > CardB.color)
                return 1;
            if (CardA.color < CardB.color)
                return -1;
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
    // 1 Karte nachziehen
    function drawFromstack() {
        randomCard(1);
        displayHand();
    }
    // mit Leertaste eine Karte ziehen
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            drawFromstack();
        }
    }
})(uno || (uno = {}));
//# sourceMappingURL=uno.js.map