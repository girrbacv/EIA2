namespace christmastree{
     window.addEventListener("DOMContentLoaded", init);
    
    
    let fieldset: HTMLFieldSetElement;
    let inputs: HTMLInputElement[] = [];
    let inputTreeHolder: HTMLInputElement[] = [];
    let inputDecoration: HTMLInputElement[] = [];
    let order: HTMLElement;
    
    function init(): void {
    fieldset = document.getElementsByTagName("fieldset")[0];
    createInputs();
    createRadios();
    createCheckboxes();
    fieldset.addEventListener("change", change);
        
    let TreeType: HTMLElement = document.getElementById("tree");
    let TreeHolder: HTMLElement = document.getElementById("holder");
    let Decorations: HTMLElement = document.getElementById("decoration");
    let Light: HTMLElement = document.getElementById("Lights");
    let Shipping: HTMLElement = document.getElementById("Lieferung");
    let shoppingCart: HTMLElement = document.getElementById("cart");
    
    TreeType.addEventListener("change", change);
    TreeHolder.addEventListener("change", change);
    Decorations.addEventListener("change", change);
    Light.addEventListener("change", change);
    Shipping.addEventListener("change", change);

    order = document.getElementById("proofOrder");
    order.addEventListener("click", proof);
        
    function createInputs(): void {
    for (let i: number = 0; i < trees.length; i++) {
        console.log(trees[i]);
        createInput(trees[i]);
            }
        }
    }
    
    function createInput(_trees: string): void {
    let label: HTMLLabelElement = document.createElement("label");
    let input: HTMLInputElement = document.createElement("input");

    label.innerText = _trees;
    label.appendChild(input);
    input.type = "number";
    input.min = "0";
    input.value = "0";
    input.name = _trees;

    fieldset.appendChild(label);
    inputs.push(input);
    console.log(inputs);
}

    function createRadios(): void {
    for (let i: number = 0; i < container.length; i++) {
        console.log(container[i]);
        createRadio(container[i]);
    }
  }

     //Erzeugung der Radio-Buttons
    function createRadio(_container: string): void {
    let containerField: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("tree");

    let input: HTMLInputElement = document.createElement("input");
    let label: HTMLLabelElement = document.createElement("label");
    //label wird dem Radio Button zugewiesen, damit dieser auch anklickbar ist
    label.htmlFor = _container;

    label.textContent = _container;
    label.appendChild(input);
    label.id = _container;
    input.type = "radio";
    input.value = _container;
    input.id = _container;
    input.name = "Container";
    input.required = true;

    function createCheckboxes(): void {
    for (let i: number = 0; i < ornaments.length; i++) {
        console.log(ornaments[i]);
        createCheckbox(ornaments[i]);
    }
}

//Erzeugung der Checkboxes
function createCheckbox(_ornaments: string): void {
    let containerField: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("decoration");

    let input: HTMLInputElement = document.createElement("input");
    let label: HTMLLabelElement = document.createElement("label");
    //label wird der Checkbox zugewiesen, damit dieser auch anklickbar ist
    label.htmlFor = _ornaments;

    label.textContent = _ornaments;
    label.appendChild(input);
    label.id = _ornaments;
    input.type = "checkbox";
    input.value = _ornaments;
    input.id = _ornaments;
    input.name = "Darbietung";

    //An das Fieldset werden die zuvor definierten Daten angehängt
    containerField.appendChild(input);
    containerField.appendChild(label);
    inputTreeHolder.push(input);
    console.log(inputTreeHolder);
}

function change(): void {
    let sum: number = 0;
    for (let i: number = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
    }
    for (let i: number = 0; i < inputTreeHolder.length; i++) {
        if (inputTreeHolder[i].checked)
        { sum += 0; }
    }
    //Innerhalb der Array-Länge der inputDecoration wird die Summe um eins hochgezählt
    for (let i: number = 0; i < inputDecoration.length; i++) {
        if (inputDecoration[i].checked)
        { sum += 0; }
    }
    changeShoppingcart(sum);
    }
 }
    function changeShoppingcart(_sum: number): void {  
     let selectedProducts: HTMLElement = document.getElementById("productoverview");
     selectedProducts.innerText = "";  
     for (let i: number = 0; i < inputs.length; i++) {
        if (parseInt(inputs[i].value) > 0) {
            selectedProducts.innerText += trees[i] + ": " + (parseInt(inputs[i].value) * 1) + "€" + "\n";
        }
     for (let i: number = 0; i < inputTreeholders.length; i++) {
        if (inputTreeholders[i].checked) {
            selectedProducts.innerText += decoration[i] + ": " + (parseInt(inputs[i].value) * 1) + "€" + "\n";
        }
    }
    for (let i: number = 0; i < inputDecoration.length; i++) {
        if (inputDecoration[i].checked) {
            selectedProducts.innerText += container[i] + "\n";
        }
    }
    
    let sumHtml: HTMLElement = document.getElementById("total");
    sumHtml.innerText = "Total: " + _sum.toString() + "€";
    }
   
   }      
    }