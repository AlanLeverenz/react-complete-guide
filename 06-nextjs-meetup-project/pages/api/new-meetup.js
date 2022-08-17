import { MongoClient } from 'mongodb';

// server-side code that is not exposed to the client
// triggered when a route is used
// only POST requests trigger /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    console.log(title, image, address, description);

    // const client = await MongoClient.connect('mongodb+srv://alanleverenz:Newlife70MDB@cluster0.bk62d2e.mongodb.net/meetups?retryWrites=true&2=majority');

    const client = await MongoClient.connect('mongosh "mongodb+srv://cluster0.bk62d2e.mongodb.net/meetups" --apiVersion 1 --username alanleverenz');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });

  }
}

export default handler;
