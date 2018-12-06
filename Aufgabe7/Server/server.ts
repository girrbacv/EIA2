import * as Http from "http";
import * as Url from "url";

namespace L06_SendData {
    interface product{
        [key: string]:number;
        }
    console.log("Starting server");
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("_request url");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

       
        console.log(_request.url);
        
        //Aufgabe 7
        let url: product = Url.parse(_request.url, true).query;
        console.log(url);
        
        for (let key in url){
            console.log(url[key]);
            console.log(key);
            
            _response.write(key + " = " + url[key] + "<br>");
        }




  
   
        
        
        
        _response.end();
    }
    
}