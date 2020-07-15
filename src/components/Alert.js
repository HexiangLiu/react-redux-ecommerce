import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { connect } from 'react-redux';
import { hideAlert } from '../actions';

import './Alert.scss';

const Alert = ({ alert: { show, msg, type }, hideAlert }) => {
  return (
    <div className={`alert ${type} ${show ? 'show' : 'hide'}`}>
      {msg}
      <span className="close" onClick={hideAlert}>
        <FaRegWindowClose />
      </span>
    </div>
  );
};

const mapStateToProps = ({ alert }) => {
  return {
    alert,
  };
};
export default connect(mapStateToProps, { hideAlert })(Alert);
