var Aufgabe10;
(function (Aufgabe10) {
    class Snow {
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 2, 1, 15 * Math.PI, false);
            Aufgabe10.crc2.fillStyle = "#F5FEFF";
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.lineWidth = .1;
            Aufgabe10.crc2.strokeStyle = "#D2EEF2";
            Aufgabe10.crc2.stroke();
        }
        move() {
            this.dy = 6;
            this.dx = Math.random() * 3 - 2;
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 1000) {
                this.y = 0;
            }
            this.draw();
        }
    }
    Aufgabe10.Snow = Snow;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=snow.js.map