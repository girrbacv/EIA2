var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let kidDown = [];
    let kidUp = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        createSky();
        createCloud();
        createTrees();
        createSun();
        //createSleigh();
        //createPeople();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateKidDown();
        generateChildUp();
        update();
    }
    function update() {
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < kidDown.length; i++) {
            let child = kidDown[i];
            child.move();
            child.draw();
        }
        for (let i = 0; i < Aufgabe10.Up.length; i++) {
            let kidU = kidUp[i];
            kidU.move();
            kidU.draw();
        }
    }
    // Himmel
    function createSky() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.lineTo(0, 670);
        Aufgabe10.crc2.lineTo(1300, 0);
        Aufgabe10.crc2.lineTo(0, 0);
        Aufgabe10.crc2.lineTo(0, 0);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#81BEF7";
        Aufgabe10.crc2.fill();
    }
    //Wolken
    function createCloud() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(560, 125, 18, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(575, 130, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(545, 130, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#ffffff";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(300, 80, 18, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(315, 85, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(285, 85, 15, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#ffffff";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(120, 150, 18, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(135, 155, 17, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(105, 155, 17, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#ffffff";
        Aufgabe10.crc2.fill();
    }
    // Bäume
    function createTrees() {
        Aufgabe10.crc2.fillStyle = "#8b5a2b";
        Aufgabe10.crc2.fillRect(510, 555, 25, 45);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(525, 450);
        Aufgabe10.crc2.lineTo(575, 560);
        Aufgabe10.crc2.lineTo(475, 560);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(525, 430);
        Aufgabe10.crc2.lineTo(575, 530);
        Aufgabe10.crc2.lineTo(475, 530);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        //
        Aufgabe10.crc2.fillStyle = "#8b5a2b";
        Aufgabe10.crc2.fillRect(410, 655, 25, 45);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(425, 550);
        Aufgabe10.crc2.lineTo(475, 660);
        Aufgabe10.crc2.lineTo(375, 660);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(425, 530);
        Aufgabe10.crc2.lineTo(475, 630);
        Aufgabe10.crc2.lineTo(375, 630);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        // 2. Baum
        Aufgabe10.crc2.fillStyle = "#8b5a2b";
        Aufgabe10.crc2.fillRect(385, 755, 25, 45);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(400, 650);
        Aufgabe10.crc2.lineTo(450, 760);
        Aufgabe10.crc2.lineTo(350, 760);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(400, 620);
        Aufgabe10.crc2.lineTo(450, 730);
        Aufgabe10.crc2.lineTo(350, 730);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        // 3.Baum
        Aufgabe10.crc2.fillStyle = "#8b5a2b";
        Aufgabe10.crc2.fillRect(485, 755, 25, 45);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(500, 650);
        Aufgabe10.crc2.lineTo(550, 760);
        Aufgabe10.crc2.lineTo(450, 760);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(500, 620);
        Aufgabe10.crc2.lineTo(550, 730);
        Aufgabe10.crc2.lineTo(450, 730);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        // 4. Baum
        Aufgabe10.crc2.fillStyle = "#8b5a2b";
        Aufgabe10.crc2.fillRect(285, 755, 25, 45);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(300, 650);
        Aufgabe10.crc2.lineTo(350, 760);
        Aufgabe10.crc2.lineTo(250, 760);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(300, 620);
        Aufgabe10.crc2.lineTo(350, 730);
        Aufgabe10.crc2.lineTo(250, 730);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "#0B3B24";
        Aufgabe10.crc2.fill();
    }
    //Sonne
    function createSun() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(65, 70, 50, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "#ffd700";
        Aufgabe10.crc2.fill();
    }
    //Schneeflocken
    function generateSnow() {
        for (let i = 0; i < 700; i++) {
            let snowflake = new Aufgabe10.Snow();
            snowflake.x = Math.random() * 600;
            snowflake.y = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    //Schlitten
    function createSleigh() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(400, 570);
        Aufgabe10.crc2.lineTo(300, 620);
        Aufgabe10.crc2.lineWidth = 10;
        Aufgabe10.crc2.strokeStyle = "#8b5a2b";
        Aufgabe10.crc2.arc(280, 615, 13, 1, 1.6 * Math.PI);
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(300, 620);
        Aufgabe10.crc2.lineTo(280, 590);
        Aufgabe10.crc2.lineWidth = 8;
        Aufgabe10.crc2.strokeStyle = "#8b5a2b";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(380, 540);
        Aufgabe10.crc2.lineTo(280, 590);
        Aufgabe10.crc2.lineWidth = 10;
        Aufgabe10.crc2.strokeStyle = "#8b5a2b";
        Aufgabe10.crc2.arc(250, 585, 13, 1, 1.6 * Math.PI);
        Aufgabe10.crc2.stroke();
    }
    function createPeople() {
        //Schlittenfahrer 
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(348, 457, 25, 0, 2 * Math.PI, false);
        Aufgabe10.crc2.fillStyle = "#F7BE81";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.lineWidth = 1.2;
        Aufgabe10.crc2.strokeStyle = "#A57658";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#8A0808";
        Aufgabe10.crc2.fillRect(338, 480, 20, 30);
        Aufgabe10.crc2.fillRect(328, 495, 40, 65);
        Aufgabe10.crc2.fillRect(300, 520, 60, 15);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(297, 527, 6, 0, 2 * Math.PI, false);
        Aufgabe10.crc2.fillStyle = "#F7BE81";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(370, 550);
        Aufgabe10.crc2.lineTo(250, 620);
        Aufgabe10.crc2.lineWidth = 20;
        Aufgabe10.crc2.strokeStyle = "#0B243B";
        Aufgabe10.crc2.stroke();
        // Person stehend
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(548, 257, 25, 0, 2 * Math.PI, false);
        Aufgabe10.crc2.fillStyle = "#F7BE81";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.lineWidth = 1.2;
        Aufgabe10.crc2.strokeStyle = "#A57658";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fillStyle = "#FA5858";
        Aufgabe10.crc2.fillRect(538, 280, 20, 30);
        Aufgabe10.crc2.fillRect(528, 295, 40, 65);
        Aufgabe10.crc2.fillRect(500, 310, 60, 15);
        Aufgabe10.crc2.fillRect(540, 310, 60, 15);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(497, 317, 6, 0, 2 * Math.PI, false);
        Aufgabe10.crc2.fillStyle = "#F7BE81";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(603, 317, 6, 0, 2 * Math.PI, false);
        Aufgabe10.crc2.fillStyle = "#F7BE81";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.fillStyle = "#6E6E6E";
        Aufgabe10.crc2.fillRect(528, 350, 17, 75);
        Aufgabe10.crc2.fillRect(552, 350, 17, 75);
        Aufgabe10.crc2.fillRect(528, 350, 41, 12);
    }
    function generateKidDown() {
        for (let i = 0; i < 5; i++) {
            let child = new Aufgabe10.Down();
            child.x = Math.random() * 100;
            child.y = Math.random() * 250 + 400;
            child.draw();
            kidDown.push(child);
        }
    }
    function generateChildUp() {
        for (let i = 0; i < 5; i++) {
            let kidU = new Aufgabe10.Up();
            kidU.x = Math.random() * 100 + 500;
            kidU.y = Math.random() * 100 + 900;
            kidU.draw();
            kidUp.push(kidU);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map