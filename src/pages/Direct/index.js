import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar';

import { DirectWrapper } from './styles';

const Direct = ({ location }) => (
  <>
    <Helmet>
      <title>Inbox • Direct</title>
    </Helmet>
    <DirectWrapper>
      <Navbar pathname={location.pathname} />
      <h1>Direct</h1>
    </DirectWrapper>
  </>
);

Direct.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Direct;
