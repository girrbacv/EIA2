var Endabgabe;
(function (Endabgabe) {
    class GameStart extends Endabgabe.DrawObjects {
        init() {
            this.xPos = 0;
            this.yPos = 0;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.rect(this.xPos, this.yPos, 700, 1100);
            Endabgabe.crc2.fillStyle = "#fff";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.strokeStyle = "#55c3ec";
            Endabgabe.crc2.fillStyle = "#55c3ec";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 5;
            Endabgabe.crc2.font = "50px Arial";
            Endabgabe.crc2.textAlign = "center";
            Endabgabe.crc2.fillStyle = "#000000";
            Endabgabe.crc2.fillText("Click to Play", 350, 350);
            Endabgabe.crc2.fillText("Du hast 45 Sekunden Zeit", 350, 500);
            Endabgabe.crc2.fillText("um so viele", 350, 550);
            Endabgabe.crc2.fillText("Kinder wie möglich zu treffen", 350, 600);
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.GameStart = GameStart;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=GameStart.js.map