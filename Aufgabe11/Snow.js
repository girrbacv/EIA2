var rodelbahnA11;
(function (rodelbahnA11) {
    class Snowball extends rodelbahnA11.DrawObjects {
        hasHit(children) {
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
        move() {
            this.updatesTillImpact--;
        }
        draw() {
            rodelbahnA11.crc2.fillStyle = "#ffffff";
            rodelbahnA11.crc2.strokeStyle = "#000000";
            rodelbahnA11.crc2.lineWidth = 1;
            rodelbahnA11.crc2.beginPath();
            rodelbahnA11.crc2.arc(this.xPos, this.yPos, 10 + (this.updatesTillImpact), 0, 2 * Math.PI);
            rodelbahnA11.crc2.fillStyle = "#ffffff";
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.closePath();
            rodelbahnA11.crc2.fill();
            rodelbahnA11.crc2.stroke();
        }
    }
    rodelbahnA11.Snowball = Snowball;
})(rodelbahnA11 || (rodelbahnA11 = {}));
//# sourceMappingURL=Snow.js.map