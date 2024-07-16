const { MongoClient } = require("mongodb");

const uri = "mongodb://204.48.22.75:27017/";

const client = new MongoClient(uri);

export async function fetchByPage(pageNumber = 1, pageSize = 10) {
  try {
    await client.connect();

    const database = client.db('db_anycopy_prod');
    const ParseNote = database.collection('ParseNote');

    //const query = { title: 'Back to the Future' };

    const skip = (pageNumber - 1) * pageSize;
    const cursor = ParseNote.find().skip(skip).limit(pageSize);

    const results = await cursor.toArray();

    console.log(results);
  } finally {
    await client.close();
  }
}


