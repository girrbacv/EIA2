namespace Endabgabe {

    export class GameStart extends DrawObjects{
        
        init(): void {

            this.xPos = 0;
            this.yPos = 0;
        }

        draw(): void {

            crc2.beginPath();
            crc2.rect(this.xPos, this.yPos, 700, 1100);
            crc2.fillStyle = "#fff";
            crc2.fill();
            crc2.strokeStyle = "#55c3ec";
            crc2.fillStyle = "#55c3ec";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 5;

            crc2.font = "50px Arial"
            crc2.textAlign = "center";
            crc2.fillStyle = "#000000";
            crc2.fillText("Click to Play", 350, 350);
            crc2.fillText("Du hast 45 Sekunden Zeit", 350, 500);
            crc2.fillText("um so viele", 350, 550);
            crc2.fillText("Kinder wie möglich zu treffen", 350, 600);




            crc2.stroke();

        }
    }

}
