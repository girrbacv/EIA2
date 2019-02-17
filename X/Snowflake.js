/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class Snowflake extends Finaly.Movement {
        move() {
            super.move();
            if (this.y > 700) {
                this.y = 0;
            }
            this.draw();
        }
        draw() {
            Finaly.crc2.fillStyle = "#ffffff";
            Finaly.crc2.strokeStyle = "#ffffff";
            Finaly.crc2.lineWidth = 1;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x - 2, this.y + 1);
            Finaly.crc2.lineTo(this.x, this.y - 2);
            Finaly.crc2.lineTo(this.x + 2, this.y + 1);
            Finaly.crc2.closePath();
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x - 2, this.y - 1);
            Finaly.crc2.lineTo(this.x + 2, this.y - 1);
            Finaly.crc2.lineTo(this.x, this.y + 2);
            Finaly.crc2.closePath();
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
        }
    }
    Finaly.Snowflake = Snowflake;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=Snowflake.js.map