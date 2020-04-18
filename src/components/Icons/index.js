import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns IconCamera in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconCamera size={22} color='#000000' />
 */
export const IconCamera = ({ size, color }) => (
  <svg
    aria-label="New Story"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z" />
  </svg>
);
IconCamera.defaultProps = { size: 24, color: 'currentColor' };
IconCamera.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconDirect in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconDirect size={22} color='#000000' />
 */
export const IconDirect = ({ size, color }) => (
  <svg
    aria-label="Direct"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z" />
    <path d="M14.7 48.4l2.9-.7" />
  </svg>
);
IconDirect.defaultProps = { size: 24, color: 'currentColor' };
IconDirect.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconDirectFilled in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconDirectFilled size={22} color='#000000' />
 */
export const IconDirectFilled = ({ size, color }) => (
  <svg
    aria-label="Direct"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l13.2 13c.6.6 1.5.7 2.2.4l16.5-7.5c.5-.2 1 0 1.3.5.2.4 0 .9-.3 1.2l-15.1 9.8c-.7.5-1.1 1.3-.9 2.2l4.6 19.1c.2.9 1.4 1.1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5z" />
  </svg>
);
IconDirectFilled.defaultProps = { size: 24, color: 'currentColor' };
IconDirectFilled.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Returns IconSearch in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconSearch size={22} color='#000000' />
 */
export const IconSearch = ({ size, color }) => (
  <svg
    aria-label="Search"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z" />
    <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z" />
  </svg>
);
IconSearch.defaultProps = { size: 24, color: 'currentColor' };
IconSearch.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconSearchFilled in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconSearchFilled size={22} color='#000000' />
 */
export const IconSearchFilled = ({ size, color }) => (
  <svg
    aria-label="Search &amp; Explore"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M47.6 44L35.8 32.2C38.4 28.9 40 24.6 40 20 40 9 31 0 20 0S0 9 0 20s9 20 20 20c4.6 0 8.9-1.6 12.2-4.2L44 47.6c.6.6 1.5.6 2.1 0l1.4-1.4c.6-.6.6-1.6.1-2.2zM20 35c-8.3 0-15-6.7-15-15S11.7 5 20 5s15 6.7 15 15-6.7 15-15 15z" />
  </svg>
);
IconSearchFilled.defaultProps = { size: 24, color: 'currentColor' };
IconSearchFilled.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Returns IconHome in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconHome size={22} color='#000000' />
 */
export const IconHome = ({ size, color }) => (
  <svg
    aria-label="Home"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
  </svg>
);
IconHome.defaultProps = { size: 24, color: 'currentColor' };
IconHome.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconHomeFilled in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconHomeFilled size={22} color='#000000' />
 */
export const IconHomeFilled = ({ size, color }) => (
  <svg
    aria-label="Home"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
  </svg>
);
IconHomeFilled.defaultProps = { size: 24, color: 'currentColor' };
IconHomeFilled.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconExplore in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconExplore size={22} color='#000000' />
 */
export const IconExplore = ({ size, color }) => (
  <svg
    aria-label="Find People"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path
      clipRule="evenodd"
      d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
      fillRule="evenodd"
    />
  </svg>
);
IconExplore.defaultProps = { size: 24, color: 'currentColor' };
IconExplore.propTypes = { size: PropTypes.number, color: PropTypes.string };

/**
 * Returns IconExploreFilled in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconExploreFilled size={22} color='#000000' />
 */
export const IconExploreFilled = ({ size, color }) => (
  <svg
    aria-label="Find People"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path
      clipRule="evenodd"
      d="M24 47.5C11 47.5.5 37 .5 24S11 .5 24 .5 47.5 11 47.5 24 37 47.5 24 47.5zm4.4-20.3c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8zm-6.2-5L17.9 30l7.8-4.3-3.5-3.5z"
      fillRule="evenodd"
    />
  </svg>
);
IconExploreFilled.defaultProps = { size: 24, color: 'currentColor' };
IconExploreFilled.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Returns IconNewPost in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconNewPost size={22} color='#000000' />
 */
export const IconNewPost = ({ size, color }) => (
  <svg
    aria-label="New Post"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z" />
    <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
    <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" />
  </svg>
);
IconNewPost.defaultProps = { size: 24, color: 'currentColor' };
IconNewPost.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Returns IconFavorite in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconFavorite size={22} color='#000000' />
 */
export const IconFavorite = ({ size, color }) => (
  <svg
    aria-label="Activity Feed"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path
      clipRule="evenodd"
      d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
      fillRule="evenodd"
    />
  </svg>
);
IconFavorite.defaultProps = { size: 24, color: 'currentColor' };
IconFavorite.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Returns IconFavoriteFilled in SVG format.
 *
 * @param {number} size - Icon width and height value.
 * @param {string} color - Icon color in HEX format.
 * @example <IconFavoriteFilled size={22} color='#000000' />
 */
export const IconFavoriteFilled = ({ size, color }) => (
  <svg
    aria-label="Activity Feed"
    fill={color}
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <path
      clipRule="evenodd"
      d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z"
      fillRule="evenodd"
    />
  </svg>
);
IconFavoriteFilled.defaultProps = { size: 24, color: 'currentColor' };
IconFavoriteFilled.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
