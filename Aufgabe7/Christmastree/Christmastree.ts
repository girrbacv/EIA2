/*Aufgabe: Aufgabe 5: Weihnachtsbaumkonfigurator
    Name: Verena Girrbach
    Matrikel: 
    Datum: 07.12.18
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde in Zusammenarbeit mit Katja Ljubas erstellt.   
*/
namespace Christmastree3 {

    window.addEventListener("load", init);
       let urlToSend: string = "";





    function init(): void {

        displayFieldsets(data);
        document.getElementById("fieldsets").addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
        
    setupAsyncForm();
    }


    function displayFieldsets(_items: items): void {



        for (let key in _items) {
            //console.log(key);
            let value: product[] = _items[key];
            let node: Element = document.getElementById("fieldsets");
            let h2: HTMLElement = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);

            for (let i: number = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }

    }

    function createInnerFieldset(_heteroPredef: product, _fieldset: Element, _key: string): void {

        if (_key == "trees" || _key == "holders" || _key == "shipping") {
            console.log(_fieldset.childNodes.length);
            let forID: number = _fieldset.childNodes.length;
            let label: HTMLElement = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input: HTMLInputElement = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name","" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("category", _key);
            input.setAttribute("hiddenName", _heteroPredef.name);
            
            
    
            
            
        } else {
            let p: HTMLElement = document.createElement("p");
            _fieldset.appendChild(p);
            let input: HTMLInputElement = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
        if (target.name == "trees") {
            treeboolean = true;
            for (let i: number = 0; i < data["trees"].length; i++) {
                let dom: HTMLElement = document.getElementById("trees" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        if (target.name == "holders") {
            holderboolean = true;
            for (let i: number = 0; i < data["holders"].length; i++) {
                let dom: HTMLElement = document.getElementById("holders" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        if (target.name == "shipping") {
            shippingboolean = true;
            for (let i: number = 0; i < data["shipping"].length; i++) {
                let dom: HTMLElement = document.getElementById("shipping" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }

        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let checkout: HTMLElement = document.getElementById("checkout");
        checkout.innerText = "";
        urlToSend ="";
        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let articleName: string = article.getAttribute("name");
            if (articleName == "trees" || articleName == "holders" || articleName == "shipping") {
                articleName = article.getAttribute("hiddenName");
            }

            let articleValue: number = Number(article.getAttribute("value"));
            let articlePrice: number = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("value") == "on") {
                let articleCategory: string = article.getAttribute("category");
                if (articleCategory == "trees" || articleCategory == "holders" || articleCategory == "shipping") {
                    articleValue = 1;
                }
                let price: number = articleValue * articlePrice;

                let createArticle: HTMLElement = document.createElement("p");
                checkout.appendChild(createArticle);
                createArticle.setAttribute("price", price.toString());
                createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;
                urlToSend += articleCategory+ ":" +articleName + "=" + articleValue +"&";
                

            }


        }
        //console.log(urlToSend);
        calcPrice();
    }


    function calcPrice(): void {
        let co: HTMLElement = document.getElementById("checkout");
        let gesPrice: number = 0;
        for (let i: number = 0; i < co.childNodes.length; i++) {
            let price: number = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
    let treeboolean: boolean = true;
    let holderboolean: boolean = true;
    let shippingboolean: boolean = true;

    function check(): void {
        
            alert("Alles in Ordnung!");
        

    }
    
    
    
    //Aufgabe7:
    function setupAsyncForm(): void {
        let button: Element = document.getElementById("check");
        button.addEventListener("click", sendRequestWithCustomData);
    }

    
    
    
    
    function sendRequestWithCustomData(_e: MouseEvent): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "https://girrbacv.herokuapp.com" + "/?" + urlToSend, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert("response: " +xhr.response);
            
        }
    }



}