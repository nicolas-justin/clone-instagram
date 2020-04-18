import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar';

import { WrapperExplore } from './styles';

const Explore = ({ location }) => (
  <>
    <Helmet>
      <title>Explore</title>
    </Helmet>
    <WrapperExplore>
      <Navbar pathname={location.pathname} />
      <h1>Explore</h1>
    </WrapperExplore>
  </>
);

Explore.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Explore;
