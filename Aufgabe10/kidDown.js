var Aufgabe10;
(function (Aufgabe10) {
    class Down {
        move() {
            this.dy = 2;
            this.dx = -5;
            this.y += this.dy;
            this.x += this.dx;
            if (this.x < 0 || this.y > 1500) {
                this.x = 600;
                this.y = Math.random() * 250 + 400;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "grey";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .2;
            Aufgabe10.crc2.strokeStyle = "#A57658";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = this.color;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 10, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 45, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y - 40);
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
        }
    }
    Aufgabe10.Down = Down;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=kidDown.js.map