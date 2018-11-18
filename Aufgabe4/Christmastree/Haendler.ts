namespace christmastree{
    
     export interface product{
        name: string;
        img: string;
        price: number;
     }
     export let trees: product[] = [{name:"Nordmanntanne", img:"imgs/01.jpg", price: 34.95},{name:"Rotfichte" , img:"imgs/02.jpg",price:29.90},{name:"Blaufichte",img:"imgs/03.jpg",price:29.90},{name:"Edeltanne",img:"imgs/04.jpg",price:39.90} ]
     export let ornaments: product[] =[{name:"Glaskugel rot", img:"imgs/WK1.jpg",price:1.54},{name:"Glaskugel grün",img:"imgs/WK2.jpg",price:1.54},{name:"Glaskugel creme", img:"imgs/WK3.jpg",price:1.54},{name:"Candycane",img:"imgs/WK4.jpg",price:3.99},{name:"Glaskugel,rot,Herz",img:"imgs/WK5.jpg",price:3.99},{name:"Glaskugel,candycane,grün",img:"imgs/WK6",price:3.99}]
     export let candles: product[] =[{name:"Kerze rot", img:"imgs/K1.jpg",price:0.99},{name:"Kerze creme", img:"imgs/K2.jpg",price:0.99},{name:"Lichterkette Kerzenoptik",img:"imgs/K3.jpg",price:24.99},{name:"Lichterkette Baumüberwurf", img:"imgs/K4.jpg",price:36.99}]
     export let lametta: product[] =[{name:"Lametta silber", img:"imgs/L1.jpg", price:1.49},{name:"Lametta gold", img:"imgs/L2.jpg",price:1.49}]
}