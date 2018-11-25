  /*Aufgabe: Aufgabe 3: Events - UNO
      Name: Verena Girrbach
      Matrikel: 
      Datum: 25.11.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
           
*/
namespace Christmastree{
    window.addEventListener("DOMContentLoaded", init)

 function init():void{
     generateContents();
    }
  let cart: product[]= [];
    
    function generateContents(): void{
       for (let key in data) {   
        let items:product[] = items[key];
        }
        
    let fieldset: HTMLElement = document.getElementById(key);
            fieldset.addEventListener("change", createCart);
        

        for(let i: number = 0; i<items.length; i++){
            
            
            for (let a: number = 0; a < product.length; a++) {



                let input: HTMLInputElement = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;
                input.value = data[key][a].name;
                input.id = data[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);

                let label: HTMLLabelElement = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", data[key][a].name);
                label.innerHTML = data[key][a].name + " " + data[key][a].price + "€";

                if (key == "trees" || key == "treeholder" ){
                    input.type = "radio";

                } else {
                    input.type = "checkbox";


                    let inputStepper: HTMLInputElement = document.createElement("input");
                    document.getElementById(key).appendChild(inputStepper);
                    inputStepper.type = "number";
                    inputStepper.name = " Stepper";
                    inputStepper.step = "1.0";
                    inputStepper.min = "1";
                    inputStepper.max = "100";
                    inputStepper.value = "0";
                }

                document.getElementById(key).appendChild(document.createElement("br"));


                createCart(key);

            }
        }




    }

    let fieldsets: NodeListOf<HTMLFieldSetElement> =
        document.getElementsByTagName("fieldset");



    function createCart(_key: string, _input: ): void {
        let items: product[] =data[_key];
        for (let i: number = 0; i < items.length; i++) {
            if (_input == "change") {

           }
        }
    }

            
}


    
}