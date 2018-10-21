/*Aufgabe: Aufgabe 2: DynHTML - UNO
      Name: Verena Girrbach
      Matrikel:
      Datum: 20.10.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      Dieser Code wurde in Zusammenarbeit mit Katja Ljubas und Joel Stark erstellt.
        Anmerkung: Siehe Joel Stark
      */
var uno;
(function (uno) {
    let karte_0 = {
        typ: "0",
        farben: [0, 1, 2, 3]
    };
    let karte_1 = {
        typ: "1",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_2 = {
        typ: "2",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_3 = {
        typ: "3",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_4 = {
        typ: "4",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_5 = {
        typ: "5",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_6 = {
        typ: "6",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_7 = {
        typ: "7",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_8 = {
        typ: "8",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_9 = {
        typ: "9",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_Plus_2 = {
        typ: "10",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_RichtungsWechsel = {
        typ: "11",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_Aussetzen = {
        typ: "12",
        farben: [0, 0, 1, 1, 2, 2, 3, 3]
    };
    let karte_Plus_4 = {
        typ: "13",
        farben: [4, 4, 4, 4]
    };
    let karte_Farbenwunsch = {
        typ: "14",
        farben: [4, 4, 4, 4]
    };
    let c = ""; //der Farbcode
    /**Karten kommen in "Deck" Array */
    let deckArray = [karte_0, karte_1, karte_2, karte_3, karte_4, karte_5, karte_6, karte_7, karte_8,
        karte_9, karte_Plus_2, karte_RichtungsWechsel, karte_Aussetzen, karte_Plus_4, karte_Farbenwunsch];
    /**Funktion um Zufallszahl zu generieren */
    function random(z) {
        return Math.floor(Math.random() * Math.floor(z));
    }
    /** Funktion um Handkarten visuell darzustellen */
    function placeDiv(_farbe, _y, _x) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x);
        document.getElementById("a" + _x).innerHTML += _y;
        let s = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _farbe;
        s.width = 90 + "px";
        s.height = 170 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 10 + "px";
        s.color = "white";
        if (_farbe == "#ffff00") {
            s.color = "black";
        }
    }
    function main() {
        let n;
        let i = prompt("Wie viele Handkarten pro Spieler");
        n = Number(i);
        for (let d = 0; d < n; d++) {
            let l = random(15); //l = Zufallswert von 0-14 (alle Karten)
            if (l == 13 && karte_Plus_4.farben.length > 0) {
                c = "#000000";
                karte_Plus_4.farben.pop();
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && karte_Plus_4.farben.length <= 0) {
                d--;
                continue;
            }
            else {
                if (l == 14 && karte_Farbenwunsch.farben.length > 0) {
                    c = "#000000";
                    karte_Farbenwunsch.farben.pop();
                    placeDiv(c, "Farbwunsch", d);
                    continue;
                }
                else if (l == 14 && karte_Farbenwunsch.farben.length <= 0) {
                    d--;
                    continue;
                }
                else {
                    let r = random(4); //random Zahl von 0-3 jeweils eine Farbe
                    switch (r) {
                        case 0:
                            c = "#ff0000"; //rot
                            if (deckArray[l].farben[0] || deckArray[l].farben[1] == 0) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].farben.splice(0, 1);
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 1:
                            c = "#00ff00"; //grün
                            if (deckArray[l].farben[2] || deckArray[l].farben[3] == 1) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].farben.splice(2, 1);
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 2:
                            c = "#0000ff"; //blau
                            if (deckArray[l].farben[4] || deckArray[l].farben[5] == 2) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].farben.splice(4, 1);
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                        case 3:
                            c = "#ffff00"; //gelb
                            if (deckArray[l].farben[6] || deckArray[l].farben[7] == 3) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].farben.splice(6, 1);
                                continue;
                            }
                            else {
                                d--;
                                continue;
                            }
                    }
                }
            }
        }
        function Stapel(_n) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#38610B";
            s.width = 90 + "px";
            s.height = 170 + "px";
            s.left = (_n + 0.5) * 20 + "px";
            s.top = (_n + 0.5) * 10 + "px";
            s.borderRadius = 10 + "px";
        }
        function Ablage() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage");
            document.getElementById("Ablage").innerHTML += "Ablage";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#abd19a";
            s.width = 120 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }
        for (let i = 0; i < 10; i++) {
            Stapel(i);
        }
        Ablage();
    }
    document.addEventListener('DOMContentLoaded', main);
})(uno || (uno = {}));
//# sourceMappingURL=UNO.js.map