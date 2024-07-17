const { MongoClient } = require("mongodb");
import { FETCH_URI_MONGODB } from "../public/config"


const client = new MongoClient(FETCH_URI_MONGODB);
const db = "db_anycopy_prod";
const collection = "parse_notes";


export interface Parse_Notes {
    content: string;   // 'text' type in your structure
    title: string;     // 'text' type in your structure
    noteId: number;    // 'number' type in your structure
    type: number;      // 'number' type in your structure
    status: number;    // 'number' type in your structure
    deviceId: string;  // 'text' type in your structure
    parentId: number;  // 'number' type in your structure
  }

client.connect();


export async function insert(document:Parse_Notes) {
    const database = client.db(db);
    const ParseNote = database.collection(collection);
    const result = await ParseNote.insertOne(document);
    return result;
}




