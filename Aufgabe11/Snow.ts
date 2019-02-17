namespace rodelbahnA11 {
   export class Snowball extends DrawObjects {
        updatesTillImpact: number;
        hasHit(children: DrawObjects): boolean {
            if (this.updatesTillImpact > 0) {
                return;
            }
            if (children.xPos - 25 < this.xPos - 20) {
                // Sarah left of snowball
                return false;
            }
            if (children.xPos - 25 > this.xPos + 20) {
                // Sarah right of snowball
                return false;
            }
            if (children.yPos + 20 < this.yPos - 20) {
                // Sarah over of snowball
                return false;
            }
            if (children.yPos + 20 > this.yPos + 20) {
                // Sarah under of snowball
                return false;
            }
            
            
            
            return true;
        }
        move(): void {
            this.updatesTillImpact--;
        }
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1;
            
            crc2.beginPath();
            crc2.arc(this.xPos, this.yPos, 10+(this.updatesTillImpact), 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.closePath();

            crc2.fill();
            crc2.stroke();
        }   
    }
}