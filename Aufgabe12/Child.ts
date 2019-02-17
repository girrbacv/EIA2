namespace Endabgabe {

    export class ChildDown extends DrawObjects {

        color: string;
        mDown: boolean;
        drawchild: boolean;

        points: number = 50;

        constructor() {
            super();
            this.setstart();

        }

        setstart(): void {
            this.xPos = Math.random() * 100;
            this.yPos = Math.random() * 250 + 400;
            this.color = this.getRandomColor();
            this.mDown = true;
            this.drawchild = true;
        }

        draw(): void {
            if (this.mDown == true) {
                this.drawDown();
            }
            else {
                this.drawUp();
            }
        }

        move(): void {
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
        drawDown(): void {

            if (this.drawchild == true) {
                crc2.beginPath();
                crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
                crc2.fillStyle = "#FFD8BE";
                crc2.fill();
                crc2.lineWidth = .2;
                crc2.strokeStyle = "#A57658";
                crc2.stroke();

                crc2.fillStyle = this.color;
                crc2.beginPath();
                crc2.moveTo(this.xPos + 10, this.yPos - 15);
                crc2.lineTo(this.xPos + 45, this.yPos - 15);
                crc2.lineTo(this.xPos + 25, this.yPos - 40);



                crc2.fill();
            }
            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);
            crc2.lineTo(this.xPos + 55, this.yPos);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos + 55, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 10, this.yPos);
            crc2.lineTo(this.xPos + 10, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 45, this.yPos);
            crc2.lineTo(this.xPos + 45, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

        }

        moveDown(): void {


            this.xDir = 5;
            this.yDir = 3;

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos > 600) {
                this.mDown = false;
            }

        }

        getRandomColor(): string {
            var r: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b: string = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }

        //childup

        drawUp(): void {
            if (this.drawchild == true) {
                crc2.beginPath();
                crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
                crc2.fillStyle = "#FFD8BE";
                crc2.fill();
                crc2.lineWidth = .2;
                crc2.strokeStyle = "#A57658";
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(this.xPos - 35, this.yPos);
                crc2.lineTo(this.xPos - 55, this.yPos);
                crc2.lineTo(this.xPos - 55, this.yPos - 35);
                crc2.lineTo(this.xPos - 35, this.yPos - 35);

                crc2.fillStyle = this.color;
                crc2.fill();
            }
            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);
            crc2.lineTo(this.xPos + 55, this.yPos);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos + 55, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 10, this.yPos);
            crc2.lineTo(this.xPos + 10, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 45, this.yPos);
            crc2.lineTo(this.xPos + 45, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos - 35, this.yPos - 30);

            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }

        moveUp(): void {

            this.yDir = Math.random() * (-3);
            this.xDir = Math.random() * (-5);

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos < 50) {
                this.mDown = true;
            }

        }


    }

}
