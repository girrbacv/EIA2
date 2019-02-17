namespace Endabgabe {
    window.addEventListener("load", gamestart);

    export let crc2: CanvasRenderingContext2D;

    let address: string = "https://endabgabe.herokuapp.com/";
    let snowflakes: Snow[] = [];
    let childsDown: ChildDown[] = [];
    let snowball: Snowball;

    let querystring: string = "";

    let ball: boolean = false;

    let fps: number = 30;

    let imgData: ImageData;

    let score: number = 0;

    let gameover: boolean = false;

    function gamestart(): void {

        window.addEventListener("click", init);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        document.getElementById("score").style.display = "none";
        let start: GameStart = new GameStart();
        let show: GameStart = start;
        show.init();
        show.draw();
    }



    function init(_event: Event): void {
        window.removeEventListener("click", init);
        window.setTimeout(gameend, 45000);
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", generateSnowball);
        window.setTimeout(1000);


        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 0, 700, 1100);
        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        imgData = crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        update();



    }

    function printScore() {
        document.getElementById("yourscore").innerHTML = "Your score: " + score;
    }


    function drawScore() {
        crc2.font = "30px Arial";
        crc2.fillStyle = "#000";
        crc2.fillText("Score: " + score, 60, 30);
    }

    function update(): void {
        if (gameover == false) {

            crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);




            for (let i: number = 0; i < snowflakes.length; i++) {
                let snowflake: Snow = snowflakes[i];
                snowflake.move();
                snowflake.draw();


            }

            for (let i: number = 0; i < childsDown.length; i++) {
                let childd: ChildDown = childsDown[i];
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

    function drawSun(): void {

        var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


        gradient.addColorStop(0, "#F7FF00");
        gradient.addColorStop(0.5, "#ffb84d");
        gradient.addColorStop(1, "#ff9900");

        let centerX: number = 190;
        let centerY: number = 75;
        let radius: number = 60;

        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawSky(): void {

        crc2.moveTo(0, 350);
        crc2.beginPath();

        crc2.lineTo(700, 700);
        crc2.lineTo(700, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 350);
        crc2.closePath();

        var grd = crc2.createLinearGradient(0, 0, 700, 1110);

        // light blue
        grd.addColorStop(0, "#0073e6");
        // dark blue
        grd.addColorStop(1, "#3399ff");
        crc2.fillStyle = grd;
        crc2.fill();


    }

    function drawCloud1(): void {

        crc2.beginPath();
        crc2.arc(50, 130, 45, 0, 2 * Math.PI);
        crc2.arc(120, 130, 70, 0, 2 * Math.PI);
        crc2.arc(190, 130, 45, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function drawCloud2(): void {

        crc2.beginPath();

        crc2.arc(490, 180, 35, 0, 2 * Math.PI);
        crc2.arc(550, 180, 60, 0, 2 * Math.PI);
        crc2.arc(610, 180, 35, 0, 2 * Math.PI);


        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    
    function drawCloud3(): void {

        crc2.beginPath();

        crc2.arc(310, 260, 20, 0, 2 * Math.PI);
        crc2.arc(350, 260, 40, 0, 2 * Math.PI);
        crc2.arc(390, 260, 20, 0, 2 * Math.PI);


        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }

    function gernerateTrees(): void {


        for (let i: number = 0; i < 6; i++) {
            let x: number = 40 + Math.random() * 200;
            let y: number = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }

    function drawTrees(_x: number, _y: number): void {


        crc2.beginPath();
        crc2.moveTo(_x - 10, _y + 70);
        crc2.lineTo(_x + 10, _y + 70);

        crc2.lineTo(_x + 7, _y - 0);
        crc2.closePath();

        crc2.fillStyle = "#612A05";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x - 30, _y + 50);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.closePath();

        crc2.fillStyle = "#018A0E";
        crc2.fill();
    }

    function gernerateTrees2(): void {


        for (let i: number = 0; i < 4; i++) {
            let x: number = 550 + Math.random() * 150;
            let y: number = 600 + Math.random() * 150;
            drawTrees(x, y);
        }
    }


    function generateSnow(): void {

        for (let i: number = 0; i < 300; i++) {
            let snowflake: Snow = new Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;

            snowflake.draw();

            snowflakes.push(snowflake);
        }

    }

    function generateSnowball(_event: MouseEvent): void {

        let x = _event.pageX;
        let y = _event.pageY;

        snowball = new Snowball(x, y);

        console.log("schneeball");
        ball = true;
        window.setTimeout(1000, ballDelete);

    }

    function ballDelete(): void {
        ball = false;
    }

    function generateChildDown(): void {

        for (let i: number = 0; i < 5; i++) {
            let child: ChildDown = new ChildDown();

            child.xPos = Math.random() * 150;
            child.yPos = Math.random() * 250 + 500;
            child.color = child.getRandomColor();
            child.draw();
            childsDown.push(child);
        }

        for (let i: number = 0; i < 5; i++) {
            let child: SlowChild = new SlowChild();

            child.xPos = Math.random() * 150;
            child.yPos = Math.random() * 250 + 500;
            child.color = child.getRandomColor();
            child.draw();
            childsDown.push(child);
        }


    }

    function gameend(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.hidden = true;
        document.getElementById("score").style.display = ''
        crc2 = canvas.getContext("2d");
        let input: HTMLElement = document.getElementById("playername");
        input.setAttribute("score", score.toString());
        document.getElementById("playagain").addEventListener("click", reload);
        printScore();

    }

    function reload(): void {
        window.location.reload();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        console.log(xhr.readyState);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);

            var responsearea = document.getElementById("scores");
            responsearea.innerHTML = "";
            responsearea.innerHTML += xhr.response;
        }
    }

    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }

    function handleClickOnAsync(_event: Event): void {
        // let color: NodeListOf<HTMLInputElement> = document.querySelectorAll(":checked");
        sendRequestWithCustomData();
    }

    function sendRequestWithCustomData(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "/?" + querystring, true);
        console.log(querystring);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function collision(): void {

        if (snowball.scale <= 5) {
            for (let i: number = 0; i < childsDown.length; i++) {
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
}