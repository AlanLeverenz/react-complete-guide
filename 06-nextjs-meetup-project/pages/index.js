import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'New Town Hall, Old Town of Munich',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?ca=6&ce=1&s=1920x822',
    address: 'New York City',
    description: 'This is a second meetup!'
  }
]

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage