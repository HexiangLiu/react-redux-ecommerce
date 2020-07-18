import React from 'react';
import { connect } from 'react-redux';
import { FaAngleDoubleUp } from 'react-icons/fa';

import './ScrollButton.scss';

const ScrollButton = ({ height }) => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={height > 100 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

const mapStateToProps = ({ height }) => {
  return {
    height,
  };
};
export default connect(mapStateToProps)(ScrollButton);
