/*Aufgabe: Aufgabe 10
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class Tree extends Finaly.Origin {
        draw() {
            Finaly.crc2.fillStyle = "#A52A2A";
            Finaly.crc2.strokeStyle = "#A52A2A";
            Finaly.crc2.lineWidth = 1;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x + 5, this.y + 7.5);
            Finaly.crc2.lineTo(this.x - 5, this.y + 7.5);
            Finaly.crc2.lineTo(this.x - 5, this.y - 12.5);
            Finaly.crc2.lineTo(this.x + 5, this.y - 12.5);
            Finaly.crc2.closePath();
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
            Finaly.crc2.fillStyle = "#228B22";
            Finaly.crc2.strokeStyle = "#0f7027";
            Finaly.crc2.lineWidth = 1;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x - 30, this.y - 10);
            Finaly.crc2.lineTo(this.x, this.y - 55);
            Finaly.crc2.lineTo(this.x + 30, this.y - 10);
            Finaly.crc2.closePath();
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
            Finaly.crc2.fillStyle = "#228B22";
            Finaly.crc2.strokeStyle = "#0f7027";
            Finaly.crc2.lineWidth = 1;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(this.x - 27, this.y - 27.5);
            Finaly.crc2.lineTo(this.x, this.y - 75);
            Finaly.crc2.lineTo(this.x + 27, this.y - 27.5);
            Finaly.crc2.closePath();
            Finaly.crc2.fill();
            Finaly.crc2.stroke();
        }
    }
    Finaly.Tree = Tree;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=tree.js.map