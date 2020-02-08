var Endabgabe;
(function (Endabgabe) {
    class SlowChild extends Endabgabe.ChildDown {
        constructor() {
            super(...arguments);
            this.points = 10;
        }
        moveUp() {
            this.yDir = Math.random() * (-1);
            this.xDir = Math.random() * (-2);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < 50) {
                this.mDown = true;
            }
        }
        moveDown() {
            this.xDir = 2;
            this.yDir = 1;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 600) {
                this.mDown = false;
            }
        }
    }
    Endabgabe.SlowChild = SlowChild;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=slowChild.js.map