var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let serverAddress = "https://database-eia2.herokuapp.com/";
    //let serverAddress: string = "https://<your>.herokuapp.com/";    
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        let refreshButton1 = document.getElementById("refresh1");
        refreshButton1.addEventListener("click", refresh1);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&lowScore=" + document.getElementById("result").getAttribute("value");
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function refresh1(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse1);
    }
    /*function search(_event: Event): void {
        let commandSearch: string = "command=search";
        console.log("test1");
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("matrikelnummer");
        commandSearch += "&Matrikelnummer=" + input.value;
        sendRequest(commandSearch, handleSearchResponse);
    }*/
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumber;
        if (_a.lowScore > _b.lowScore) {
            returnNumber = 1;
        }
        else if (_a.lowScore < _b.lowScore) {
            returnNumber = -1;
        }
        else {
            returnNumber = 0;
        }
        return returnNumber;
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("scores");
            let responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            output.innerHTML = "";
            for (let i = 0; i < responseAsJson.length; i++) {
                output.innerHTML += "<p>" + responseAsJson[i].name + " | Score:" + responseAsJson[i].lowScore + "<br>";
            }
        }
    }
    function handleFindResponse1(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementById("scores1");
            let responseAsJson = JSON.parse(xhr.response);
            responseAsJson.sort(playerDataSort);
            output.innerHTML = "";
            for (let i = 0; i < responseAsJson.length; i++) {
                output.innerHTML += "<p>" + "Name: " + responseAsJson[i].name + "<br>" + "Score: " + responseAsJson[i].lowScore + "<br>";
            }
        }
    }
    /*function handleSearchResponse(_event: ProgressEvent): void {
     let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
     if (xhr.readyState == XMLHttpRequest.DONE) {
         let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
         output.value = xhr.response;
         let responseAsJson: JSON = JSON.parse(xhr.response);
         console.log(responseAsJson);
     }
 }*/
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map