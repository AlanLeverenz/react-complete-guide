import { MongoClient, ServerApiVersion } from 'mongodb';
import keys from '../../keys';

// server-side code that is not exposed to the client
// triggered when a route is used
// only POST requests trigger /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('API POST');
    const data = req.body;
    // const { title, image, address, description } = data;

    const uri = `mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`;
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    // const client = await MongoClient.connect(`mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`);

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });

    // MongoDB full code 

    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const uri = `mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   // perform actions on the collection object
    //   client.close();
    // });
    // res.status(201).json({ message: 'Meetup inserted!' });

  }
}

export default handler;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${keys.MDB_username}:${keys.MDB_password}>@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// IMPORT CLI
// mongoimport --uri "mongodb://alanleverenz:Newlife70MDB@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/meetups?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection meetups --drop --jsonArray --file /Users/alanleverenz/development/react-complete-guide-2/06-nextjs-meetup-project/import.json

// Connect with Mongo Shell
// mongosh "mongodb+srv://cluster0.bk62d2e.mongodb.net/meetups" --apiVersion 1 --username alanleverenz