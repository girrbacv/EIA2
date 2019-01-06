namespace Aufgabe9 {
   window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

   
    createSky();
    createCloud();
    createTrees();
    createSun();
    createSnow();
    createSleigh();
    createPeople();
            console.log("Canvas started");
    }
   

    
 

   
// Himmel
 
    function createSky(): void {
        crc2.beginPath();
        crc2.lineTo(0, 670);
        crc2.lineTo(1300, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fillStyle = "#81BEF7";
        crc2.fill();
   
    }
    
  
    
    //Wolken
    function createCloud(): void{
        crc2.beginPath();
        crc2.arc(560, 125, 18, 0, 2 * Math.PI);
        crc2.arc(575, 130, 15, 0, 2 * Math.PI);
        crc2.arc(545, 130, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        crc2.beginPath();
        crc2.arc(300, 80, 18, 0, 2 * Math.PI);
        crc2.arc(315, 85, 15, 0, 2 * Math.PI);
        crc2.arc(285, 85, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        
        crc2.beginPath();
        crc2.arc(120, 150, 18, 0, 2 * Math.PI);
        crc2.arc(135, 155, 17, 0, 2 * Math.PI);
        crc2.arc(105, 155, 17, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    
    }
    
    
    
    // Bäume
 
     function createTrees(): void {
         crc2.fillStyle = "#8b5a2b";
         crc2.fillRect(510, 555, 25, 45);
         crc2.beginPath();
         crc2.moveTo(525, 450);
         crc2.lineTo(575, 560);
         crc2.lineTo(475, 560);
         crc2.closePath();
         crc2.fillStyle = "#0B3B24";
         crc2.fill();
         crc2.beginPath();
         crc2.moveTo(525, 430);
         crc2.lineTo(575, 530);
         crc2.lineTo(475, 530);
         crc2.closePath();
         crc2.fillStyle = "#0B3B24";
         crc2.fill();
         
         // 2. Baum
        crc2.fillStyle = "#8b5a2b";
        crc2.fillRect(785, 455, 25, 45);
        crc2.beginPath();
        crc2.moveTo(800, 350);
        crc2.lineTo(850, 460);
        crc2.lineTo(750, 460);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(800, 320);
        crc2.lineTo(850, 430);
        crc2.lineTo(750, 430);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
         
         // 3.Baum
         
        crc2.fillStyle = "#8b5a2b";
        crc2.fillRect(685, 555, 25, 45);
        crc2.beginPath();
        crc2.moveTo(700, 450);
        crc2.lineTo(750, 560);
        crc2.lineTo(650, 560);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(700, 420);
        crc2.lineTo(750, 530);
        crc2.lineTo(650, 530);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
            
         
        // 4. Baum
        crc2.fillStyle = "#8b5a2b";
        crc2.fillRect(285, 755, 25, 45);
        crc2.beginPath();
        crc2.moveTo(300, 650);
        crc2.lineTo(350, 760);
        crc2.lineTo(250, 760);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(300, 620);
        crc2.lineTo(350, 730);
        crc2.lineTo(350, 730);
        crc2.closePath();
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
         
    }
    
    //Sonne
    
    function createSun(): void{
       crc2.beginPath();
    crc2.arc(65, 70, 50, 0, 2*Math.PI);
    crc2.fillStyle = "#ffd700";
    crc2.fill(); 
        
        
        }
    
    //Schneeflocken
    function createSnow(): void {
        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            let size: number = (Math.random() * 5) + 2
            crc2.beginPath();
            crc2.arc(x, y, size, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.strokeStyle = "lightgrey";
            crc2.stroke();
        }
    }
      
    
    //Schlitten
    
    function createSleigh() : void{
        crc2.beginPath();
        crc2.moveTo(400, 570);
        crc2.lineTo(300, 620);

        crc2.lineWidth = 10;
        crc2.strokeStyle = "#8b5a2b";
        crc2.arc(280, 615, 13, 1, 1.6 * Math.PI);
        crc2.stroke();  
        
        crc2.beginPath();
        crc2.moveTo(300, 620);
        crc2.lineTo(280, 590);

        crc2.lineWidth = 8;
        crc2.strokeStyle = "#8b5a2b";
        crc2.stroke();
        
        crc2.beginPath();
        crc2.moveTo(380, 540);
        crc2.lineTo(280, 590);

        crc2.lineWidth = 10;
        crc2.strokeStyle = "#8b5a2b";
        crc2.arc(250, 585, 13, 1, 1.6 * Math.PI);
        crc2.stroke();  
        
      
       
    } 
    
    function createPeople():void{
        
        //Schlittenfahrer 
        
        crc2.beginPath();
        crc2.arc(348, 457, 25, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        crc2.lineWidth = 1.2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        crc2.fillStyle = "#8A0808";
        crc2.fillRect(338, 480, 20,30);
        crc2.fillRect(328, 495, 40, 65);
        crc2.fillRect(300, 520, 60, 15);
         crc2.beginPath();
        crc2.arc(297, 527, 6, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        
        
         crc2.beginPath();
        crc2.moveTo(370, 550);
        crc2.lineTo(250, 620);

        crc2.lineWidth =20;
        crc2.strokeStyle = "#0B243B";
       
        crc2.stroke();  
        
        
        
        // Person stehend
        crc2.beginPath();
        crc2.arc(548, 257, 25, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        crc2.lineWidth = 1.2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        
        crc2.fillStyle = "#FA5858";
        crc2.fillRect(538, 280, 20,30);
        crc2.fillRect(528, 295, 40, 65);
        crc2.fillRect(500, 310, 60, 15);
        crc2.fillRect(540, 310, 60, 15);
        
        crc2.beginPath();
        crc2.arc(497, 317, 6, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(603, 317, 6, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#F7BE81";
        crc2.fill();
        
        
        crc2.fillStyle = "#6E6E6E";
        crc2.fillRect(528, 350, 17, 75);
        crc2.fillRect(552, 350, 17, 75);
        crc2.fillRect(528, 350, 41, 12);
      }
    
    
    
    
    }
    
    
  

        
     
       

     
     
        
 

  

  