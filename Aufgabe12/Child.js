var Endabgabe;
(function (Endabgabe) {
    class ChildDown extends Endabgabe.DrawObjects {
        constructor() {
            super();
            this.points = 50;
            this.setstart();
        }
        setstart() {
            this.xPos = Math.random() * 100;
            this.yPos = Math.random() * 250 + 400;
            this.color = this.getRandomColor();
            this.mDown = true;
            this.drawchild = true;
        }
        draw() {
            if (this.mDown == true) {
                this.drawDown();
            }
            else {
                this.drawUp();
            }
        }
        move() {
            if (this.mDown == true) {
                this.moveDown();
            }
            else {
                if (this.drawchild == false) {
                    this.moveDown();
                    if (this.xPos >= 800) {
                        this.setstart();
                        //                        this.moveUp();
                    }
                }
                else {
                    this.moveUp();
                }
            }
        }
        drawDown() {
            if (this.drawchild == true) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
                Endabgabe.crc2.fillStyle = "#FFD8BE";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.lineWidth = .2;
                Endabgabe.crc2.strokeStyle = "#A57658";
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(this.xPos + 10, this.yPos - 15);
                Endabgabe.crc2.lineTo(this.xPos + 45, this.yPos - 15);
                Endabgabe.crc2.lineTo(this.xPos + 25, this.yPos - 40);
                Endabgabe.crc2.fill();
            }
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 55, this.yPos);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos, this.yPos - 15);
            Endabgabe.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos + 10, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos + 45, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
        }
        moveDown() {
            this.xDir = 5;
            this.yDir = 3;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 600) {
                this.mDown = false;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
        //childup
        drawUp() {
            if (this.drawchild == true) {
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
                Endabgabe.crc2.fillStyle = "#FFD8BE";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.lineWidth = .2;
                Endabgabe.crc2.strokeStyle = "#A57658";
                Endabgabe.crc2.stroke();
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.moveTo(this.xPos - 35, this.yPos);
                Endabgabe.crc2.lineTo(this.xPos - 55, this.yPos);
                Endabgabe.crc2.lineTo(this.xPos - 55, this.yPos - 35);
                Endabgabe.crc2.lineTo(this.xPos - 35, this.yPos - 35);
                Endabgabe.crc2.fillStyle = this.color;
                Endabgabe.crc2.fill();
            }
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 55, this.yPos);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos, this.yPos - 15);
            Endabgabe.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos + 10, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos + 45, this.yPos);
            Endabgabe.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            Endabgabe.crc2.lineWidth = 4;
            Endabgabe.crc2.strokeStyle = "#683737";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.xPos, this.yPos - 15);
            Endabgabe.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.stroke();
        }
        moveUp() {
            this.yDir = Math.random() * (-3);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < 50) {
                this.mDown = true;
            }
        }
    }
    Endabgabe.ChildDown = ChildDown;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Child.js.map