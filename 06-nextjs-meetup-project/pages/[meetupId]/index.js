import { MongoClient, ObjectId } from 'monogdb';
import keys from '../../keys';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// is run before the first function
export async function getStaticPaths() {

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

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;

