namespace Endabgabe {
    export class Snowball extends DrawObjects {

        scale: number;
        target: number[];

        constructor(_x: number, _y: number) {
            super();
            this.target = [_x, _y];
            this.xPos = 350;
            this.yPos = 1100;
            this.scale = 35;
            this.xDir = this.target[0] - this.xPos;
            this.yDir = this.target[1] - this.yPos;
        }


        draw(): void {
            if (this.scale > 5) {
                var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);

                gradient.addColorStop(1, "#ffffff");
                crc2.strokeStyle = "#000000";
                crc2.lineWidth = 2;
                crc2.beginPath();
                crc2.arc(this.xPos, this.yPos, this.scale, 0, 2 * Math.PI, false);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
                crc2.stroke();
            }
        }
        move(): void {

            this.scale -= 1;

            this.xPos += this.xDir / 30;
            this.yPos += this.yDir / 30;
        }

    }
}