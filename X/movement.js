/*Aufgabe: Aufgabe 11
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 21.01.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    class Movement extends Finaly.Origin {
        move() {
            super.move();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    Finaly.Movement = Movement;
})(Finaly || (Finaly = {}));
//# sourceMappingURL=movement.js.map