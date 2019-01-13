namespace Aufgabe10{

    export class Down{
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
     move(): void {
            
            this.dy = 2;
            this.dx = -5;

            this.y += this.dy;
            this.x += this.dx;
            

            if (this.x < 0 || this.y>1500) {
                this.x = 600;
                this.y = Math.random() * 250 + 400;
            }
            
        

        }
        
        
        draw():void{
            
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 50, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle="grey";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();
            
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y - 15);
            crc2.lineTo(this.x + 45, this.y - 15);
            crc2.lineTo(this.x + 25, this.y - 40);


            
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
            }
        
        
        
        
         
    } 
    
   
 }