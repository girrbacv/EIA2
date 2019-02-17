/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:33701";
let databaseName: string = "Test";
let db: Mongo.Db;
let endabgabe: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb://Nico:testpw1@ds237858.mlab.com:37858/eia2";
    //  databaseURL = "mongodb://testuser:testpassword@ds129532.mlab.com:29532/eia2";
    databaseName = "eia2";
    console.log("heroku");
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database object
function handleConnect(_e: Mongo.MongoError, _db: Mongo.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        endabgabe = db.collection("endabgabe");
    }
}

export function insert(_doc: playerData): void {
    // try insertion then activate callback "handleInsert"
    endabgabe.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = endabgabe.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, playerArray: playerData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(playerArray));
    }

}

// export function searchMatrikelnumber(_marnum: number, _callback: Function): void {
//     var cursor: Mongo.Cursor = players.find({"player": _marnum});
//     cursor.toArray(prepareAnswer);

//     function prepareAnswer(_e: Mongo.MongoError, playerArray: PlayerData[]): void {
//         if (_e)
//             _callback("Error" + _e);
//         else
//             _callback(JSON.stringify(playerArray));
//     }
// }