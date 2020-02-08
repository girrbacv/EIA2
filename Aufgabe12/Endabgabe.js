var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", gamestart);
    let address = "https://endabgabe.herokuapp.com/";
    let snowflakes = [];
    let childsDown = [];
    let snowball;
    let querystring = "";
    let ball = false;
    let fps = 30;
    let imgData;
    let score = 0;
    let gameover = false;
    function gamestart() {
        window.addEventListener("click", init);
        let canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc2 = canvas.getContext("2d");
        document.getElementById("score").style.display = "none";
        let start = new Endabgabe.GameStart();
        let show = start;
        show.init();
        show.draw();
    }
    function init(_event) {
        window.removeEventListener("click", init);
        window.setTimeout(gameend, 45000);
        let canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", generateSnowball);
        window.setTimeout(1000);
        Endabgabe.crc2.fillStyle = "#ffffff";
        Endabgabe.crc2.fillRect(0, 0, 700, 1100);
        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = Endabgabe.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        update();
    }
    function printScore() {
        document.getElementById("yourscore").innerHTML = "Your score: " + score;
    }
    function drawScore() {
        Endabgabe.crc2.font = "30px Arial";
        Endabgabe.crc2.fillStyle = "#000";
        Endabgabe.crc2.fillText("Score: " + score, 60, 30);
    }
    function update() {
        if (gameover == false) {
            Endabgabe.crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);
            for (let i = 0; i < snowflakes.length; i++) {
                let snowflake = snowflakes[i];
                snowflake.move();
                snowflake.draw();
            }
            for (let i = 0; i < childsDown.length; i++) {
                let childd = childsDown[i];
                childd.move();
                childd.draw();
            }
            if (snowball) {
                snowball.draw();
                snowball.move();
                collision();
            }
            drawScore();
        }
        else {
            gameend();
        }
    }
    function drawSun() {
        var gradient = Endabgabe.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#ffb84d");
        gradient.addColorStop(1, "#ff9900");
        let centerX = 190;
        let centerY = 75;
        let radius = 60;
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        Endabgabe.crc2.fillStyle = gradient;
        Endabgabe.crc2.fill();
    }
    function drawSky() {
        Endabgabe.crc2.moveTo(0, 350);
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.lineTo(700, 700);
        Endabgabe.crc2.lineTo(700, 0);
        Endabgabe.crc2.lineTo(0, 0);
        Endabgabe.crc2.lineTo(0, 350);
        Endabgabe.crc2.closePath();
        var grd = Endabgabe.crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#0073e6");
        // dark blue
        grd.addColorStop(1, "#3399ff");
        Endabgabe.crc2.fillStyle = grd;
        Endabgabe.crc2.fill();
    }
    function drawCloud1() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(50, 130, 45, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(120, 130, 70, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(190, 130, 45, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#FFFFFF";
        Endabgabe.crc2.fill();
    }
    function drawCloud2() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(490, 180, 35, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(550, 180, 60, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(610, 180, 35, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#FFFFFF";
        Endabgabe.crc2.fill();
    }
    function drawCloud3() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(310, 260, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(350, 260, 40, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(390, 260, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "#FFFFFF";
        Endabgabe.crc2.fill();
    }
    function gernerateTrees() {
        for (let i = 0; i < 6; i++) {
            let x = 40 + Math.random() * 200;
            let y = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function drawTrees(_x, _y) {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x - 10, _y + 70);
        Endabgabe.crc2.lineTo(_x + 10, _y + 70);
        Endabgabe.crc2.lineTo(_x + 7, _y - 0);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = "#612A05";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(_x - 30, _y + 50);
        Endabgabe.crc2.lineTo(_x, _y - 20);
        Endabgabe.crc2.lineTo(_x + 30, _y + 50);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.fillStyle = "#018A0E";
        Endabgabe.crc2.fill();
    }
    function gernerateTrees2() {
        for (let i = 0; i < 4; i++) {
            let x = 550 + Math.random() * 150;
            let y = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }
    function generateSnow() {
        for (let i = 0; i < 300; i++) {
            let snowflake = new Endabgabe.Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    function generateSnowball(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        snowball = new Endabgabe.Snowball(x, y);
        console.log("schneeball");
        ball = true;
        window.setTimeout(1000, ballDelete);
    }
    function ballDelete() {
        ball = false;
    }
    function generateChildDown() {
        for (let i = 0; i < 5; i++) {
            let child = new Endabgabe.ChildDown();
            child.xPos = Math.random() * 150;
            child.yPos = Math.random() * 250 + 500;
            child.color = child.getRandomColor();
            child.draw();
            childsDown.push(child);
        }
        for (let i = 0; i < 5; i++) {
            let child = new Endabgabe.SlowChild();
            child.xPos = Math.random() * 150;
            child.yPos = Math.random() * 250 + 500;
            child.color = child.getRandomColor();
            child.draw();
            childsDown.push(child);
        }
    }
    function gameend() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.hidden = true;
        document.getElementById("score").style.display = '';
        Endabgabe.crc2 = canvas.getContext("2d");
        let input = document.getElementById("playername");
        input.setAttribute("score", score.toString());
        document.getElementById("playagain").addEventListener("click", reload);
        printScore();
    }
    function reload() {
        window.location.reload();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        console.log(xhr.readyState);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            var responsearea = document.getElementById("scores");
            responsearea.innerHTML = "";
            responsearea.innerHTML += xhr.response;
        }
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        // let color: NodeListOf<HTMLInputElement> = document.querySelectorAll(":checked");
        sendRequestWithCustomData();
    }
    function sendRequestWithCustomData() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "/?" + querystring, true);
        console.log(querystring);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function collision() {
        if (snowball.scale <= 5) {
            for (let i = 0; i < childsDown.length; i++) {
                if (snowball.xPos >= childsDown[i].xPos && snowball.xPos <= childsDown[i].xPos + 50) {
                    if (snowball.yPos <= childsDown[i].yPos && snowball.yPos >= childsDown[i].yPos - 50) {
                        score += childsDown[i].points;
                        console.log("Getroffen");
                        console.log(score);
                        childsDown[i].drawchild = false;
                    }
                }
            } //schleie kinder
            snowball = null;
        } //abfrage gr��e 
    } // funktion zu
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Endabgabe.js.map