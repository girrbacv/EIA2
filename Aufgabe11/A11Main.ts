namespace rodelbahnA11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let allMovingObjects: DrawObjects[] = [];
   


    let fps: number = 25;

    let imgData: ImageData;
    let muni: Munition[] = [];
    var maxMun: number = 6;
   
  



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawSun();
        gernerateTrees();
        drawCloud1();
        drawCloud2();
        imgData = crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChild();

        update();




        function update(): void {
            crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);



            
            
            for (let i: number = 0; i < allMovingObjects.length; i++) {
                let object: DrawObjects = allMovingObjects[i];
                object.draw();
                object.move();

            }

        }


        function gernerateTrees(): void {

            for (let i: number = 0; i < 18; i++) {
                let trees: Trees = new Trees();
                allMovingObjects.push(trees);
            }
        }//trees


        function generateSnow(): void {

            for (let i: number = 0; i < 1500; i++) {
                let snowflake: Snow = new Snow();
                allMovingObjects.push(snowflake);

            }

        }//snow

        function generateChild(): void {

            for (let i: number = 0; i < 5; i++) {
                let child: Child = new Child();
                allMovingObjects.push(child);
            }
        }//child

        function drawSun(): void {

            var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


            gradient.addColorStop(0, "orange");
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(1, "orange");

            let centerX: number = 170;
            let centerY: number = 75;
            let radius: number = 40;

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

            crc2.fillStyle = gradient;
            crc2.fill();
        }//sun


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
            grd.addColorStop(0, "lightblue");
            // dark blue
            grd.addColorStop(1, "blue");
            crc2.fillStyle = grd;
            crc2.fill();
        }//sky

        function drawCloud1(): void {

            crc2.beginPath();
            crc2.arc(50, 220, 45, 0, 2 * Math.PI);
            crc2.arc(120, 220, 70, 0, 2 * Math.PI);
            crc2.arc(190, 220, 45, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }//cloud1

        function drawCloud2(): void {

            crc2.beginPath();
            crc2.arc(470, 180, 20, 0, 2 * Math.PI);
            crc2.arc(510, 180, 40, 0, 2 * Math.PI);
            crc2.arc(570, 180, 70, 0, 2 * Math.PI);
            crc2.arc(630, 180, 40, 0, 2 * Math.PI);
            crc2.arc(670, 180, 20, 0, 2 * Math.PI);

            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }//cloud2
        
        //Munition
         var xOffset: number = 950;
        for (let i: number = 0; i < maxMun; i++) {
            let m: Munition = new Munition(xOffset, 0);
            muni.push(m);
            m.draw();
            xOffset = xOffset + 50;
        }
        
     
    
        

    } //init
} //namespace