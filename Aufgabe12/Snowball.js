var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.DrawObjects {
        constructor(_x, _y) {
            super();
            this.target = [_x, _y];
            this.xPos = 350;
            this.yPos = 1100;
            this.scale = 35;
            this.xDir = this.target[0] - this.xPos;
            this.yDir = this.target[1] - this.yPos;
        }
        draw() {
            if (this.scale > 5) {
                var gradient = Endabgabe.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
                gradient.addColorStop(1, "#ffffff");
                Endabgabe.crc2.strokeStyle = "#000000";
                Endabgabe.crc2.lineWidth = 2;
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xPos, this.yPos, this.scale, 0, 2 * Math.PI, false);
                Endabgabe.crc2.fillStyle = "#ffffff";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.stroke();
            }
        }
        move() {
            this.scale -= 1;
            this.xPos += this.xDir / 30;
            this.yPos += this.yDir / 30;
        }
    }
    Endabgabe.Snowball = Snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snowball.js.map