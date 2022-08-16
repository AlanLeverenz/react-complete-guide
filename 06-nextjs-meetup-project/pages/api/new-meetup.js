import { MongoClient } from 'mongodb';

// server-side code that is not exposed to the client
// triggered when a route is used
// only POST requests trigger /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect('mongosh "mongodb+srv://cluster0.bk62d2e.mongodb.net/meetups" --apiVersion 1 --username alanleverenz');

  }
}

export default handler;
