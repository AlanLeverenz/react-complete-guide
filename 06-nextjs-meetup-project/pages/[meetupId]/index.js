import { MongoClient } from 'monogdb';
import keys from '../../keys';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='A First Meetup'
      address='New Town Hall, Old Town of Munich'
      description='This is a first meetup!'
    />
  );
}

export async function getStaticPaths() {
  // must include all possible id objects
  // true fallback lets server render paths dynamically if not listed here
  // false fallback only lets server render listed paths

  const client = await MongoClient.connect(`mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  // get all documents but only the _id field
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString },
    }))
  };
}

export async function getStaticProps(context) {
  // fetch data from the server for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  const client = await MongoClient.connect(`mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });

  client.close();

  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default MeetupDetails;

