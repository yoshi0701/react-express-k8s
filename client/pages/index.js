import axios from 'axios';

const LandingPage = ({ currentUser }) => {

  console.log(currentUser);
  axios.get('/api/users/currentuser');

  return <h1>landing pages</h1>;
};



// LandingPage.getInitialProps = async () => {
//   const response = await axios.get('/api/users/currentuser');
//
//   return response.data;
// };

export default LandingPage;