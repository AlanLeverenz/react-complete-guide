// server-side code that is not exposed to the client
// triggered when a route is used
// only POST requests trigger /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;


  }
}

export default handler;
