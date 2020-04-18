import PropTypes from 'prop-types';
import React from 'react';

import {
  IconCamera,
  IconDirect,
  IconDirectFilled,
  IconExplore,
  IconExploreFilled,
  IconFavorite,
  IconFavoriteFilled,
  IconHome,
  IconHomeFilled,
  IconNewPost,
  IconSearch,
  IconSearchFilled,
} from '../Icons';

import {
  NavbarWrapper,
  NavbarNav,
  NavbarList,
  NavbarListItem,
  NavbarButton,
  NavbarLink,
  LogoName,
  NavbarSearch,
  UserPicture,
} from './styles';

const buttonSearchClick = (ev) => {
  const button = ev.currentTarget;
  const input = ev.currentTarget.nextElementSibling;

  button.lastElementChild.classList.add('hidden');
  button.classList.add('active');
  input.focus();
};

const inputSearchBlur = (ev) => {
  const button = ev.currentTarget.previousElementSibling;
  const input = ev.currentTarget;

  button.lastElementChild.classList.remove('hidden');
  button.classList.remove('active');

  if (input.value.length > 0) {
    button.lastElementChild.innerText = input.value;
  } else {
    button.lastElementChild.innerText = 'Search';
  }
};

/**
 * Returns Navbar component in JSX format.
 *
 * @param {string} pathname - Current route value.
 */
const Navbar = ({ pathname }) => (
  <NavbarWrapper>
    <NavbarNav>
      <NavbarList>
        <NavbarListItem data-only="mobile">
          <NavbarButton type="button">
            <IconCamera color="#262626" />
          </NavbarButton>
        </NavbarListItem>

        <NavbarListItem>
          <NavbarLink to="/">
            <LogoName />
          </NavbarLink>
        </NavbarListItem>

        <NavbarListItem data-only="mobile">
          <NavbarLink to="/direct">
            <IconDirect color="#262626" />
          </NavbarLink>
        </NavbarListItem>
      </NavbarList>

      <NavbarSearch>
        <button type="button" onClick={(ev) => buttonSearchClick(ev)}>
          <span>
            <IconSearch size={14} />
          </span>
          <span>Search</span>
        </button>
        <input
          type="text"
          placeholder="Search"
          onBlur={(ev) => inputSearchBlur(ev)}
        />
      </NavbarSearch>

      <NavbarList data-position="fixed">
        <NavbarListItem>
          <NavbarLink to="/" exact>
            {pathname === '/' ? (
              <IconHomeFilled size={22} color="#262626" />
            ) : (
              <IconHome size={22} color="#262626" />
            )}
          </NavbarLink>
        </NavbarListItem>

        <NavbarListItem data-only="desktop">
          <NavbarLink to="/direct" exact>
            {pathname === '/direct' ? (
              <IconDirectFilled size={22} color="#262626" />
            ) : (
              <IconDirect size={22} color="#262626" />
            )}
          </NavbarLink>
        </NavbarListItem>

        <NavbarListItem data-only="mobile">
          <NavbarLink to="/explore" exact>
            {pathname === '/explore' ? (
              <IconSearchFilled size={22} color="#262626" />
            ) : (
              <IconSearch size={22} color="#262626" />
            )}
          </NavbarLink>
        </NavbarListItem>

        <NavbarListItem data-only="desktop">
          <NavbarLink to="/explore" exact>
            {pathname === '/explore' ? (
              <IconExploreFilled size={22} color="#262626" />
            ) : (
              <IconExplore size={22} color="#262626" />
            )}
          </NavbarLink>
        </NavbarListItem>

        <NavbarListItem data-only="mobile">
          <NavbarButton type="button">
            <IconNewPost size={22} color="#262626" />
          </NavbarButton>
        </NavbarListItem>

        <NavbarListItem>
          <NavbarButton type="button">
            {pathname === '/favorites' ? (
              <IconFavoriteFilled size={22} color="#262626" />
            ) : (
              <IconFavorite size={22} color="#262626" />
            )}
          </NavbarButton>
        </NavbarListItem>

        <NavbarListItem>
          <NavbarLink to="/profile" exact>
            <UserPicture
              className={pathname === '/profile' ? 'active' : ''}
              picture="https://randomuser.me/api/portraits/men/32.jpg"
            />
          </NavbarLink>
        </NavbarListItem>
      </NavbarList>
    </NavbarNav>
  </NavbarWrapper>
);

Navbar.propTypes = { pathname: PropTypes.string.isRequired };

export default Navbar;
