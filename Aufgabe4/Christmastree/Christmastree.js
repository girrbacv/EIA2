/*Aufgabe: Aufgabe 3: Events - UNO
    Name: Verena Girrbach
    Matrikel:
    Datum: 25.11.18
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    NOCH NICHT FUNKTIONSFÄHIG!
*/
var Christmastree;
(function (Christmastree) {
    window.addEventListener("DOMContentLoaded", init);
    window.addEventListener("load", init);
    let treePrice = 0;
    let holderPrice = 0;
    let ornamentPrice = 0;
    let candlePrice = 0;
    let lamettaPrice = 0;
    let treeInputs = [];
    let holderInputs = [];
    let decorationInputs = [];
    let lightInputs = [];
    let shippingInputs = [];
    let fieldsetBaum;
    let fieldsetHalter;
    let fieldsetDeko;
    let fieldsetLicht;
    let fieldsetVersand;
    let step = document.createElement("input");
    function init(_event) {
        for (let key in Christmastree.data) {
            let items = items[key];
        }
        let fieldsets = document.getElementsById("key");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("change", showSum);
        }
        fieldsetBaum = document.getElementById("tree");
        fieldsetHalter = document.getElementById("holder");
        fieldsetDeko = document.getElementById("decoration");
        fieldsetLicht = document.getElementById("lights");
        fieldsetVersand = document.getElementById("shipping");
        for (let i = 0; i < trees.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
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
        for (let i = 0; i < holders.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
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
        for (let i = 0; i < ornaments.length; i++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.setAttribute("type", "checkbox");
            label.innerText = ornaments[i];
            label.appendChild(input);
            decorationInputs.push(input);
            fieldsetDeko.appendChild(label);
            input.className = "ornaments";
            console.log(ornaments[i]);
        }
    }
    for (let i = 0; i < candles.length; i++) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        input.setAttribute("type", "checkbox");
        label.innerText = candles[i];
        label.appendChild(input);
        lightInputs.push(input);
        fieldsetLicht.appendChild(label);
        input.className = "candles";
        console.log(candles[i]);
    }
})(Christmastree || (Christmastree = {}));
for (let i = 0; i < lametta.length; i++) {
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.setAttribute("type", "checkbox");
    label.innerText = lametta[i];
    label.appendChild(input);
    decorationInputs.push(input);
    fieldsetDeko.appendChild(label);
    input.className = "lametta";
    console.log(lametta[i]);
}
function handleChange(_event) {
    console.log(_event);
    let order = document.getElementById("productoverview");
    order.innerText = "";
    for (let i = 0; i < treeInputs.length; i++) {
        if (parseInt(treeInputs[i].price) > 0) {
            order.innerText += trees[i] + " " + ": " + (parseInt(treeInputs[i].price) * 1) + "\n";
        }
    }
    for (let i = 0; i < holderInputs.length; i++) {
        if (parseInt(holderInputs[i].price) > 0) {
            order.innerText += holders[i] + " " + ": " + (parseInt(holderInputs[i].price) * 1) + "\n";
        }
    }
    for (let i = 0; i < decorationInputs.length; i++) {
        if (decorationInputs[i].checked) {
            order.innerText += ornaments[i] + " " + ":" + (parseInt(decorationInputs[i].price) * 1) + "\n";
        }
    }
    for (let i = 0; i < lightInputs.length; i++) {
        if (lightInputs[i].checked) {
            order.innerText += candles[i] + " " + ":" + (parseInt(lightInputs[i].price) * 1) + "\n";
        }
    }
}
function showSum(_event) {
    let summe = 0;
    for (let i = 0; i < treeInputs.length; i++) {
        summe += parseInt(treetInputs[i].price);
    }
    for (let i = 0; i < holderInputs.length; i++) {
        summe += parseInt(holderInputs[i].price);
    }
    for (let i = 0; i < decorationInputs.length; i++) {
        if (decorationInputs[i].checked)
            summe += parseInt(decorationInputs[i].price);
    }
    console.log(summe);
    document.getElementById("total").innerText = summe.toString() + " €";
}
//# sourceMappingURL=Christmastree.js.map