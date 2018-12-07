namespace L06_SendData {
    window.addEventListener("load", init);
    let address: string = "http://localhost:8100";
    //let address: string = "https://eia2-nodetest.herokuapp.com";

    function init(_event: Event): void {
       setupAsyncForm();
    }
    
       function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", sendRequestWithCustomData);
    }

    
    
    function sendRequestWithCustomData(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
}