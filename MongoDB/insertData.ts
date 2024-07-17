const { MongoClient } = require("mongodb");
import { INSERT_URI_MONGODB } from "../public/config"
import { Parse_Notes } from "../public/inf"


const client = new MongoClient(INSERT_URI_MONGODB);
const db = "db_anycopy_prod";
const collection = "parse-notes";




client.connect();


export async function insertData(document:Parse_Notes) {
    const database = client.db(db);
    const ParseNote = database.collection(collection);
    const result = await ParseNote.insertOne(document);
    return result;
}




