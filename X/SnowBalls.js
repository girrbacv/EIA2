/*Aufgabe: Endabgabe
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.02.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class SnowBalls extends Finaly.Movement {
        draw() {
            if (this.state == "throw") {
                this.throwSB();
            }
        }
        move() {
            if (this.radius > 14) {
                this.radius -= 1;
            }
            else {
                this.radius = 0;
            }
        }
        throwSB() {
            Finaly.crc2.fillStyle = "#ffffff";
            Finaly.crc2.strokeStyle = "#000000";
            Finaly.crc2.beginPath();
            Finaly.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
        }
        hitDown(_x, _y) {
            Finaly.crc2.lineWidth = 10;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(_x + 30, _y + 30);
            Finaly.crc2.lineTo(_x - 30, _y + 30);
            Finaly.crc2.lineTo(_x - 30, _y - 30);
            Finaly.crc2.lineTo(_x + 30, _y - 30);
            Finaly.crc2.closePath();
            if (Finaly.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        hitUp(_x, _y) {
            Finaly.crc2.lineWidth = 10;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(_x + 30, _y + 40);
            Finaly.crc2.lineTo(_x - 30, _y + 40);
            Finaly.crc2.lineTo(_x - 30, _y - 40);
            Finaly.crc2.lineTo(_x + 30, _y - 40);
            Finaly.crc2.closePath();
            if (Finaly.crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Finaly.SnowBalls = SnowBalls;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=SnowBalls.js.map