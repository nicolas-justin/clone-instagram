import styled from 'styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';

import logoName from '../../assets/img/logo_name.svg';

export const NavbarWrapper = styled.header`
  background-color: #f0f0f4;
  border-bottom: 1px solid #cbcbcb;
  height: 45px;
  padding: 0 1rem;
  position: sticky;
  top: 0;
`;

export const NavbarNav = styled.nav`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
`;

export const NavbarList = styled.ul`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;

  &[data-position='fixed'] {
    border-top: 1px solid #dbdbdb;
    bottom: 0;
    height: 45px;
    justify-content: space-around;
    left: 0;
    position: fixed;
    right: 0;

    ${media.greaterThan('medium')`
      border: 0;
      height: auto;
      justify-content: flex-end;
      position: static;

      li:not(:first-child) {
        margin-left: 1.5rem;
      }
    `};
  }
`;

export const NavbarListItem = styled.li`
  &[data-only='desktop'] {
    display: none;
  }

  ${media.greaterThan('medium')`
    &[data-only='mobile'] {
      display: none;
    }

    &[data-only='desktop'] {
      display: block;
    }
  `};
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
`;

export const NavbarButton = styled.button`
  background: transparent;
  border: 0;
  display: flex;
`;

export const LogoName = styled.span`
  background: center/cover url(${logoName}) no-repeat;
  display: block;
  height: 28px;
  margin-top: 2px;
  width: 100px;
`;

export const NavbarSearch = styled.section`
  display: none;
  height: 28px;
  position: relative;
  width: 215px;

  button {
    align-items: center;
    background-color: #e5e9f0;
    bottom: 0;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    cursor: text;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;

    span {
      color: #777;
      font-size: 16px;

      &:first-child {
        margin-right: 5px;
      }
    }

    span.hidden {
      display: none;
    }

    &.active {
      border-right-width: 0;
      width: 30px;

      span:first-child {
        margin: 0;
      }
    }
  }

  input {
    background-color: #e5e9f0;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #262626;
    height: 100%;
    padding: 3px 10px 3px 30px;
    text-align: center;
    width: 100%;

    &:focus {
      text-align: left;
    }
  }

  ${media.greaterThan('medium')`
    display: block;
  `};
`;

export const UserPicture = styled.span`
  background: center/cover url(${(props) => props.picture}) no-repeat;
  border-radius: 50%;
  display: block;
  height: 22px;
  width: 22px;

  &.active {
    box-shadow: 0 0 0 2px #f0f0f5, 0 0 0 3px #262626;
  }

  ${media.greaterThan('medium')`
    margin-right: 3px;
  `};
`;
