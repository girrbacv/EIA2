/*Aufgabe: Endabgabe
Name: Sarah L�nnqvist
Matrikel: 259116
Datum: 13.02.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Finaly;
(function (Finaly) {
    window.addEventListener("load", init);
    let score = 0;
    function init() {
        document.getElementById("div").style.display = "initial";
        let start = document.getElementsByTagName("button")[0];
        start.addEventListener("click", main);
        document.getElementById("DB").style.display = "none";
        document.getElementById("hud").style.display = "none";
        document.getElementById("end").style.display = "none";
        document.getElementById("db").style.display = "none";
        document.getElementById("refresh1").addEventListener("click", showScore1);
    }
    ;
    let image;
    let fps = 25;
    let allObjects = [];
    let SB = [];
    let children = [];
    function main(_event) {
        document.getElementById("div").style.display = "none";
        document.getElementById("hud").style.display = "initial";
        document.getElementById("end").style.display = "none";
        document.getElementsByTagName("canvas")[0].style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", throwSB);
        Finaly.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawClouds();
        image = Finaly.crc2.getImageData(0, 0, 360, 700);
        for (let i = 0; i < 7; i++) {
            let tree = new Finaly.Tree();
            tree.x = Math.random() * Finaly.crc2.canvas.width;
            tree.y = Math.random() * Finaly.crc2.canvas.height;
            Finaly.crc2.beginPath();
            Finaly.crc2.moveTo(0, 600);
            Finaly.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
            if (Finaly.crc2.isPointInPath(tree.x, tree.y)) {
                allObjects.push(tree);
            }
            else {
                i--;
            }
        }
        for (let i = 0; i < 10; i++) {
            let child = new Finaly.Children();
            child.x = 360;
            child.y = Math.random() * 300 + 330;
            child.dx = Math.random() * 3 - 5;
            child.dy = -child.dx;
            child.state = "down";
            children.push(child);
        }
        for (let i = 0; i < 222; i++) {
            let snow = new Finaly.Snowflake();
            snow.x = Math.random() * Finaly.crc2.canvas.width;
            snow.y = Math.random() * Finaly.crc2.canvas.height;
            snow.dx = 0;
            snow.dy = Math.random() * 3;
            snow.color = "#ffffff";
            allObjects.push(snow);
        }
        update();
    }
    function throwSB(_event) {
        if (SB.length < 20) {
            let snowB = new Finaly.SnowBalls();
            snowB.x = _event.clientX;
            snowB.y = _event.clientY;
            snowB.radius = 50;
            snowB.state = "throw";
            SB.push(snowB);
            let canvas = document.getElementsByTagName("canvas")[0];
            canvas.addEventListener("click", throwSB);
        }
    }
    function update() {
        if (document.getElementsByTagName("canvas")[0].getAttribute("style") == "display: initial;") {
            window.setTimeout(update, 1000 / fps);
            Finaly.crc2.putImageData(image, 0, 0);
        }
        if (SB.length > 19) {
            window.setTimeout(end, 3000);
        }
        for (let i = 0; i < allObjects.length; i++) {
            allObjects[i].move();
            allObjects[i].draw();
        }
        for (let i = 0; i < children.length; i++) {
            children[i].move();
            children[i].draw();
        }
        for (let i = 0; i < SB.length; i++) {
            if (SB[i].radius > 15) {
                SB[i].move();
                SB[i].draw();
            }
            else {
                if (SB[i].radius == 15) {
                    SB[i].move();
                    SB[i].draw();
                    for (let i2 = 0; i2 < children.length; i2++) {
                        if (SB[i].hitDown(children[i2].x, children[i2].y) == true && children[i2].state == "down") {
                            children[i2].state = "hit";
                            score += Math.floor(children[i2].dy * children[i2].dx);
                            document.getElementById("score").innerHTML = "Curent Score: " + score.toString();
                            document.getElementById("throw").innerHTML = "SnowBalls you have thrown: " + SB.length.toString();
                        }
                        else if (SB[i].hitUp(children[i2].x, children[i2].y) == true && children[i2].state == "up") {
                            children[i2].state = "hit";
                            score += Math.floor((children[i2].dy * children[i2].dx) / 2);
                            document.getElementById("score").innerHTML = "Curent Score: " + score.toString();
                            document.getElementById("throw").innerHTML = "SnowBalls you have thrown: " + SB.length.toString();
                        }
                        else {
                            document.getElementById("throw").innerHTML = "SnowBalls you have thrown: " + SB.length.toString();
                        }
                    }
                }
            }
        }
    }
    function end() {
        document.getElementsByTagName("canvas")[0].style.display = "none";
        document.getElementById("db").style.display = "none";
        document.getElementById("hud").style.display = "none";
        document.getElementById("end").style.display = "initial";
        document.getElementById("result").innerHTML = "Your Low-Score: " + score.toString();
        document.getElementById("result").setAttribute("value", score.toString());
        document.getElementById("new").addEventListener("click", reloade);
        document.getElementById("refresh").addEventListener("click", showScore2);
    }
    function reloade() {
        window.location.reload();
    }
    function showScore1() {
        document.getElementById("DB").style.display = "initial";
        document.getElementById("div").style.display = "none";
        document.getElementById("start").addEventListener("click", init);
    }
    function showScore2() {
        document.getElementById("db").style.display = "initial";
        document.getElementById("end").style.display = "none";
        document.getElementById("back").addEventListener("click", end);
    }
    //Hintergrund
    function drawSky() {
        Finaly.crc2.fillStyle = "#9fc1f9";
        Finaly.crc2.beginPath();
        Finaly.crc2.moveTo(0, 600);
        Finaly.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        Finaly.crc2.lineTo(360, 0);
        Finaly.crc2.lineTo(0, 0);
        Finaly.crc2.closePath();
        Finaly.crc2.lineWidth = 2;
        Finaly.crc2.stroke();
        Finaly.crc2.fill();
    }
    function drawHill() {
        Finaly.crc2.fillStyle = "#ffffff";
        Finaly.crc2.strokeStyle = "#9999ff";
        Finaly.crc2.beginPath();
        Finaly.crc2.moveTo(0, 600);
        Finaly.crc2.bezierCurveTo(110, 500, 220, 410, 360, 330);
        Finaly.crc2.lineTo(360, 700);
        Finaly.crc2.lineTo(0, 700);
        Finaly.crc2.closePath();
        Finaly.crc2.lineWidth = 2;
        Finaly.crc2.stroke();
        Finaly.crc2.fill();
    }
    function drawSun() {
        Finaly.crc2.fillStyle = "#f46542";
        Finaly.crc2.beginPath();
        Finaly.crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        Finaly.crc2.fill();
    }
    function drawClouds() {
        Finaly.crc2.fillStyle = "#ffffff";
        Finaly.crc2.beginPath();
        Finaly.crc2.moveTo(150, 300);
        Finaly.crc2.quadraticCurveTo(180, 250, 120, 250);
        Finaly.crc2.quadraticCurveTo(120, 200, 70, 230);
        Finaly.crc2.quadraticCurveTo(40, 250, 60, 300);
        Finaly.crc2.quadraticCurveTo(30, 350, 150, 300);
        Finaly.crc2.closePath();
        Finaly.crc2.fill();
        Finaly.crc2.fillStyle = "#ffffff";
        Finaly.crc2.beginPath();
        Finaly.crc2.moveTo(300, 200);
        Finaly.crc2.quadraticCurveTo(350, 150, 270, 150);
        Finaly.crc2.quadraticCurveTo(270, 80, 220, 130);
        Finaly.crc2.quadraticCurveTo(190, 160, 210, 200);
        Finaly.crc2.quadraticCurveTo(200, 270, 300, 200);
        Finaly.crc2.closePath();
        Finaly.crc2.fill();
    }
})(Finaly || (Finaly = {}));
//# sourceMappingURL=main.js.map