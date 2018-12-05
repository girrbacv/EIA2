/*Aufgabe: Aufgabe 5: Weihnachtsbaumkonfigurator
    Name: Verena Girrbach
    Matrikel:
    Datum: 25.11.18
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde in Zusammenarbeit mit Katja Ljubas erstellt.
*/
var Christmastree;
(function (Christmastree) {
    window.addEventListener("load", init);
    let treeboolean = false;
    let holderboolean = false;
    let shippingboolean = false;
    function init() {
        displayFieldsets(Christmastree.data);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function displayFieldsets(_items) {
        for (let key in _items) {
            //console.log(key);
            let value = _items[key];
            let node = document.getElementsByTagName("body")[0];
            let h2 = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);
            for (let i = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }
    }
    function createInnerFieldset(_heteroPredef, _fieldset, _key) {
        if (_key == "trees" || _key == "holders" || _key == "shipping") {
            //console.log(_fieldset.childNodes.length);
            let forID = _fieldset.childNodes.length;
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);
        }
        else {
            let p = document.createElement("p");
            _fieldset.appendChild(p);
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
        if (target.name == "radiotree") {
            treeboolean = true;
            for (let i = 0; i < Christmastree.data["trees"].length; i++) {
                let dom = document.getElementById("trees" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "radioholder") {
            holderboolean = true;
            for (let i = 0; i < Christmastree.data["holders"].length; i++) {
                let dom = document.getElementById("holders" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "radioshipping") {
            shippingboolean = true;
            for (let i = 0; i < Christmastree.data["shipping"].length; i++) {
                let dom = document.getElementById("shipping" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        let articles = document.getElementsByTagName("input");
        let check = document.getElementById("check");
        check.innerText = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let articleName = article.getAttribute("name");
            if (articleName == "radiotree" || articleName == "radioholder" || articleName == "radioshipping") {
                articleName = article.getAttribute("hiddenName");
            }
            let articleValue = Number(article.getAttribute("value"));
            let articlePrice = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("value") == "on") {
                let articleCategory = article.getAttribute("category");
                if (articleCategory == "trees" || articleCategory == "holders" || articleCategory == "shipping") {
                    articleValue = 1;
                }
                let price = articleValue * articlePrice;
                let createArticle = document.createElement("p");
                check.appendChild(createArticle);
                createArticle.setAttribute("price", price.toString());
                createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;
            }
        }
        calcPrice();
    }
    function calcPrice() {
        let co = document.getElementById("check");
        let gesPrice = 0;
        for (let i = 0; i < co.childNodes.length; i++) {
            let price = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
    function check() {
        let prompt = "Bitte noch auswaehlen:";
        if (treeboolean == false || holderboolean == false || shippingboolean == false) {
            if (treeboolean == false) {
                prompt += "Baum ";
            }
            if (holderboolean == false) {
                prompt += "Halter ";
            }
            if (shippingboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
        else {
            alert("Alles in Ordnung!");
        }
    }
})(Christmastree || (Christmastree = {}));
//# sourceMappingURL=Christmastree.js.map