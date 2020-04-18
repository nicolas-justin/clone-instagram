import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar';

import { HomeWrapper } from './styles';

const Home = ({ location }) => (
  <>
    <Helmet>
      <title>Instagram</title>
    </Helmet>
    <HomeWrapper>
      <Navbar pathname={location.pathname} />
      <h1>Home</h1>
    </HomeWrapper>
  </>
);

Home.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Home;
