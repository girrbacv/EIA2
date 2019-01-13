namespace Aufgabe10{

    
    export class Up {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;


     
            move(): void {
          

        }
        
        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x - 45, this.y - 45, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 35, this.y);
            crc2.lineTo(this.x + 55, this.y);
            crc2.lineTo(this.x + 55, this.y + 35);
            crc2.lineTo(this.x + 35, this.y + 35);

            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 55, this.y);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x + 55, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y);
            crc2.lineTo(this.x + 45, this.y - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x - 35, this.y - 30);

            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }


        

       
    }

}