import React from 'react';

import loading from '../assets/loading.gif';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <h2 className="heading--1">Loading...</h2>
      <img className="loading__img" src={loading} alt="loading gif" />
    </div>
  );
};

export default Loading;
