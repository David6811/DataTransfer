const { MongoClient } = require("mongodb");
import { FETCH_URI_MONGODB } from "../public/config"


const client = new MongoClient(FETCH_URI_MONGODB);
const db = "db_anycopy_prod";
const collection = "ParseNote";

client.connect();

export async function getTotalRecords() {
    const database = client.db(db);
    const ParseNote = database.collection(collection);
    const totalRecords = await ParseNote.countDocuments();
    return totalRecords;
}

export async function fetchByPage(pageNumber = 1, pageSize = 10) {
    const database = client.db(db);
    const ParseNote = database.collection(collection);
    const skip = (pageNumber - 1) * pageSize;
    const cursor = await ParseNote.find().skip(skip).limit(pageSize);
    const results = await cursor.toArray();
    return results;
}



