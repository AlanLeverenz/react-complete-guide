// import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import keys from '../keys';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'New Town Hall, Old Town of Munich',
//     description: 'This is a first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=1920x822',
//     address: 'New York City',
//     description: 'This is a second meetup!'
//   }
// ]

function HomePage(props) {

  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // // useEffect runs after the component executes
  // // two component render cycles (empty and then loaded)
  // // nextJS only shows source for the first render, not the second
  // useEffect(() => {
  //   // send an http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <MeetupList meetups={props.meetups} />
  )
}

// alternative to getStaticProps
// does not run during build process, but on the server after deployment
// pre-generated for every request
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// works in pages for pre-rendering before the component function runs
// code that runs here doesn't run on the client, only on the server
// it's executed during the build cycle
// revalidate sets timer for re-pregenerating data on the server
// can use for storing CDN's in cache

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(`mongodb+srv://${keys.MDB_username}:${keys.MDB_password}@cluster0.bk62d2e.mongodb.net/?retryWrites=true&w=majority`);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  // finds all collections
  const meetups = await meetupsCollection.find().toArray();
  // const meetups = DUMMY_MEETUPS;

  client.close();

  // revalidate will cause a pre-render for each request
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
};

export default HomePage