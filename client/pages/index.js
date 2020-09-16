import axios from 'axios';

const LandingPage = ({ currentUser }) => {

  // console.log(currentUser);
  // axios.get('/api/users/currentuser');
  console.log(currentUser);

  return <h1>landing pages</h1>;
};



LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on server
    // request shoould be made to ingress-nginx.ingress...
    const { data } = await axios.get(
      'http://ingress-nginx.ingress-nginx-controller.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers
      }
    );

    return data;
  } else {
    // on browser
    // request can be base URL
    const { data } = await axios.get('/api/users/currentuser');
    // { currentuser: {} }
    return data;
  }

  return {};
};

export default LandingPage;
