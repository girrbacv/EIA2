var Aufgabe10;
(function (Aufgabe10) {
    class Up {
        move() {
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x - 45, this.y - 45, 10, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "grey";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.strokeStyle = "#A57658";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 35, this.y);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y + 35);
            Aufgabe10.crc2.lineTo(this.x + 35, this.y + 35);
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y);
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 55, this.y - 15);
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 10, this.y);
            Aufgabe10.crc2.lineTo(this.x + 10, this.y - 15);
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 45, this.y);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y - 15);
            Aufgabe10.crc2.lineWidth = 4;
            Aufgabe10.crc2.strokeStyle = "#683737";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x - 35, this.y - 30);
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Up = Up;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=kidUp.js.map