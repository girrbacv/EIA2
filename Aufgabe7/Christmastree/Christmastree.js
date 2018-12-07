/*Aufgabe: Aufgabe 5: Weihnachtsbaumkonfigurator
    Name: Verena Girrbach
    Matrikel:
    Datum: 07.12.18
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde in Zusammenarbeit mit Katja Ljubas erstellt.
*/
var Christmastree3;
(function (Christmastree3) {
    window.addEventListener("load", init);
    let urlToSend = "";
    function init() {
        displayFieldsets(Christmastree3.data);
        document.getElementById("fieldsets").addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
        setupAsyncForm();
    }
    function displayFieldsets(_items) {
        for (let key in _items) {
            //console.log(key);
            let value = _items[key];
            let node = document.getElementById("fieldsets");
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
            console.log(_fieldset.childNodes.length);
            let forID = _fieldset.childNodes.length;
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("category", _key);
            input.setAttribute("hiddenName", _heteroPredef.name);
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
        if (target.name == "trees") {
            treeboolean = true;
            for (let i = 0; i < Christmastree3.data["trees"].length; i++) {
                let dom = document.getElementById("trees" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "holders") {
            holderboolean = true;
            for (let i = 0; i < Christmastree3.data["holders"].length; i++) {
                let dom = document.getElementById("holders" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        if (target.name == "shipping") {
            shippingboolean = true;
            for (let i = 0; i < Christmastree3.data["shipping"].length; i++) {
                let dom = document.getElementById("shipping" + i);
                dom.setAttribute("value", "off");
            }
            target.setAttribute("value", "on");
        }
        let articles = document.getElementsByTagName("input");
        let checkout = document.getElementById("checkout");
        checkout.innerText = "";
        urlToSend = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let articleName = article.getAttribute("name");
            if (articleName == "trees" || articleName == "holders" || articleName == "shipping") {
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
                checkout.appendChild(createArticle);
                createArticle.setAttribute("price", price.toString());
                createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;
                urlToSend += articleCategory + ":" + articleName + "=" + articleValue + "&";
            }
        }
        //console.log(urlToSend);
        calcPrice();
    }
    function calcPrice() {
        let co = document.getElementById("checkout");
        let gesPrice = 0;
        for (let i = 0; i < co.childNodes.length; i++) {
            let price = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
    let treeboolean = true;
    let holderboolean = true;
    let shippingboolean = true;
    function check() {
        alert("Alles in Ordnung!");
    }
    //Aufgabe7:
    function setupAsyncForm() {
        let button = document.getElementById("check");
        button.addEventListener("click", sendRequestWithCustomData);
    }
    function sendRequestWithCustomData(_e) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://girrbacv.herokuapp.com" + "/?" + urlToSend, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert("response: " + xhr.response);
        }
    }
})(Christmastree3 || (Christmastree3 = {}));
//# sourceMappingURL=Christmastree.js.map