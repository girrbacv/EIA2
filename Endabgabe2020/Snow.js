var Endabgabe;
(function (Endabgabe) {
    class Snow extends Endabgabe.DrawObjects {
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            Endabgabe.crc2.fillStyle = "#F5FEFF";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.lineWidth = .2;
            Endabgabe.crc2.strokeStyle = "#D2EEF2";
            Endabgabe.crc2.stroke();
        }
        move() {
            this.yDir = 2;
            this.xDir = Math.random() * 4 - 2;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }
    }
    Endabgabe.Snow = Snow;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snow.js.map