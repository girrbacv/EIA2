namespace Endabgabe {

    export class SlowChild extends ChildDown {

        points = 10;

        moveUp(): void {

            this.yDir = Math.random() * (-1);
            this.xDir = Math.random() * (-2);

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos < 50) {
                this.mDown = true;
            }

        }
        
         moveDown(): void {


            this.xDir = 2;
            this.yDir = 1;
            
            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos > 600) {
                this.mDown = false;
            }

        }


    }

}