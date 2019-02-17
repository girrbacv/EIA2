/*Aufgabe: Endabgabe
Name: Sarah Lönnqvist
Matrikel: 259116
Datum: 13.02.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Finaly {
    export class SnowBalls extends Movement {
        radius: number;
        state: string;


        draw(): void {
            if (this.state == "throw") {
                this.throwSB();
            } 
             
        }

        move(): void {
            if (this.radius > 14) {
                this.radius -= 1;
            } else { this.radius = 0; }
        }

        throwSB(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000"; 
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();

        }

        hitDown(_x: number, _y: number): boolean {
            
            crc2.lineWidth = 10;
            crc2.beginPath();
            crc2.moveTo(_x + 30, _y + 30);
            crc2.lineTo(_x - 30, _y + 30);
            crc2.lineTo(_x - 30, _y - 30);
            crc2.lineTo(_x + 30, _y - 30);
            crc2.closePath();
            
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        
        hitUp(_x: number, _y: number): boolean {
            
            crc2.lineWidth = 10;
            crc2.beginPath();
            crc2.moveTo(_x + 30, _y + 40);
            crc2.lineTo(_x - 30, _y + 40);
            crc2.lineTo(_x - 30, _y - 40);
            crc2.lineTo(_x + 30, _y - 40);
            crc2.closePath();
            
            if (crc2.isPointInPath(this.x, this.y)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

}
