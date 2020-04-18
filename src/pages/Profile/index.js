import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar';

import { ProfileWrapper } from './styles';

const Profile = ({ location }) => (
  <>
    <Helmet>
      <title>Name (@username)</title>
    </Helmet>
    <ProfileWrapper>
      <Navbar pathname={location.pathname} />
      <h1>Profile</h1>
    </ProfileWrapper>
  </>
);

Profile.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Profile;
