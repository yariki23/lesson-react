import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ onClose, isOpen, children, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <div className="dialog__close-btn" onClick={onClose}>
          +
        </div>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.PropTypes = {
  isOpen: PropTypes.bool,
};

export default Dialog;
