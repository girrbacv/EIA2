"use strict";
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:33701";
let databaseName = "Test";
let db;
let endabgabe;
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
function handleConnect(_e, _db) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _db.db(databaseName);
        endabgabe = db.collection("endabgabe");
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    endabgabe.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = endabgabe.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, playerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(playerArray));
    }
}
exports.findAll = findAll;
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
//# sourceMappingURL=Database.js.map