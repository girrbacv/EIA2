  /*Aufgabe: Aufgabe 3: Events - UNO
      Name: Verena Girrbach
      Matrikel: 
      Datum: 25.11.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      NOCH NICHT FUNKTIONSFÄHIG!     
*/
namespace Christmastree{
    window.addEventListener("DOMContentLoaded", init)

 window.addEventListener("load", init);

   let treePrice: number = 0;
   let holderPrice: number = 0;
   let ornamentPrice: number = 0;
   let candlePrice: number = 0;
   let lamettaPrice: number = 0; 

  let treeInputs: HTMLInputElement[] = [];
  let holderInputs: HTMLInputElement[] = [];
  let decorationInputs: HTMLInputElement[] = [];
  let lightInputs: HTMLInputElement[] = [];
  let shippingInputs: HTMLInputElement[] = [];
  let fieldsetBaum: HTMLElement;
  let fieldsetHalter: HTMLElement;
  let fieldsetDeko: HTMLElement;
  let fieldsetLicht: HTMLElement;
  let fieldsetVersand: HTMLElement;
   


    let step: HTMLInputElement = document.createElement("input");


    function init(_event: Event): void {
      
       for (let key in data) {   
        let items:product[] = items[key];
        }
        
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsById("key");
        

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("change", showSum);
        
        }

        fieldsetBaum = document.getElementById("tree");
        fieldsetHalter = document.getElementById("holder");
        fieldsetDeko = document.getElementById("decoration");
        fieldsetLicht = document.getElementById("lights");
        fieldsetVersand = document.getElementById("shipping");

        for (let i: number = 0; i < trees.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = trees[i];
            label.appendChild(input);
            treeInputs.push(input);
            fieldsetBaum.appendChild(label);

            input.className = "checkbox";

            console.log(trees[i]);

        }

        for (let i: number = 0; i < holders.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = holders[i];
            label.appendChild(input);
            holderInputs.push(input);
            fieldsetHalter.appendChild(label);

            input.className = "checkbox";

            console.log(holders[i]);
        }

        for (let i: number = 0; i < ornaments.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            label.innerText = ornaments[i];
            label.appendChild(input);
            decorationInputs.push(input);
            fieldsetDeko.appendChild(label);

            input.className = "ornaments";

            console.log(ornaments[i]);
        }
    }
    
    for (let i: number = 0; i < candles.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            label.innerText = candles[i];
            label.appendChild(input);
            lightInputs.push(input);
            fieldsetLicht.appendChild(label);

            input.className = "candles";

            console.log(candles[i]);
        }
    }

  for (let i: number = 0; i < lametta.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            label.innerText = lametta[i];
            label.appendChild(input);
            decorationInputs.push(input);
            fieldsetDeko.appendChild(label);

            input.className = "lametta";

            console.log(lametta[i]);
        }
    

    function handleChange(_event: Event): void {
        console.log(_event);
        let order: HTMLElement = document.getElementById("productoverview");
        order.innerText = "";

        for (let i: number = 0; i < treeInputs.length; i++) {
            if (parseInt(treeInputs[i].price) > 0) {
                order.innerText += trees[i] + " " + ": " + (parseInt(treeInputs[i].price) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < holderInputs.length; i++) {
            if (parseInt(holderInputs[i].price) > 0) {
                order.innerText += holders[i] + " " + ": " + (parseInt(holderInputs[i].price) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < decorationInputs.length; i++) {
            if (decorationInputs[i].checked) {
                order.innerText += ornaments[i] + " " + ":" + (parseInt(decorationInputs[i].price)*1) +"\n";
            }
        }
        for (let i: number = 0; i < lightInputs.length; i++) {
            if (lightInputs[i].checked) {
                order.innerText += candles[i] + " " + ":" + (parseInt(lightInputs[i].price)*1) +"\n";
            }
        }
    }

    function showSum(_event: Event): void {
        let summe: number = 0;

        for (let i: number = 0; i < treeInputs.length; i++) {
            summe += parseInt(treetInputs[i].price);
        }
        for (let i: number = 0; i < holderInputs.length; i++) {
            summe += parseInt(holderInputs[i].price);
        }
        for (let i: number = 0; i < decorationInputs.length; i++) {
            if (decorationInputs[i].checked)
                summe += parseInt(decorationInputs[i].price);
        }
        console.log(summe);

        document.getElementById("total").innerText = summe.toString() + " €";

    }

    

