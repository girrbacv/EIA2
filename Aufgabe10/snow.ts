namespace Aufgabe10{
 
    
    export class Snow {
        x: number;
        y: number;
        dx: number;
        dy: number;



        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 1, 15 * Math.PI, false);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = .1;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();


        }

        move(): void {

            this.dy = 6;
            this.dx = Math.random() * 3 - 2;

            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 1000) {
                this.y = 0;
            }
            this.draw();
        }


    }

}   
    
    
    
    
    
