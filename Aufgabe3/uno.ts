   /*Aufgabe: Aufgabe 3: Events - UNO
      Name: Verena Girrbach
      Matrikel: 
      Datum: 11.11.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      Dieser Code wurde in Zusammenarbeit mit Katja Ljubas erstellt.
      */
 namespace uno {

    document.addEventListener("DOMContentLoaded", select);
    document.addEventListener("keydown", pressKeyboard);

    interface Card {
        color: string;
        value: string;
    }

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let deck: Card[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    let pile: Card[] = [];
    
     

    for (let i: number = 0; i < colors.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    console.log(deck);

    let handcards: Card[] = [];

    function select(): void {
        var kartenanzahl: string = prompt("Gib die Anzahl deiner Handcards an");
        let n: number = parseInt(kartenanzahl);

        randomCard(n);
        displayHand();

      let button: HTMLElement = document.getElementById("button");
        button.addEventListener("click",sortHandcards);

        let draw: HTMLElement = document.getElementById("stack");
        draw.addEventListener("click", drawFromstack); 

    }
    

    function randomCard(_anz: number): void {
        for (let anz: number = _anz; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
     
     function displayHand(): void {

        document.getElementById("Handcards").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id: string = b.toString();
            div.setAttribute("id", id);
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            // EventListener für Ablegen hinzugefügt
            div.addEventListener("click", PlayCard);

        }
    }

     
 function PlayCard(_event: MouseEvent): void {
        document.getElementById("pile").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        pile.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("pile").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }


// Sort handcards by color
    function sortHandcards() : void{
       console.log(handcards);
       document.getElementById("Handcards").innerHTML="";
   handcards.sort(( CardA: Card, CardB: Card)=>{
       if (CardA.color > CardB.color) return 1;
       if (CardA.color < CardB.color) return -1;
       return 0;
       });
     
        console.log(handcards);
        displayHand();
        
  }      
     // 1 Karte nachziehen
    function drawFromstack(): void {
        randomCard(1);
        displayHand();

    }
    // mit Leertaste eine Karte ziehen
    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) { // 32 ist der Wert für space, jede Taste hat einen anderen Wert
            drawFromstack();
        }
    }

    





     
}
