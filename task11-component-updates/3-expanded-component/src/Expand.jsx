import React, { Component } from 'react';

const Expand = ({ onClose, isOpen, children, title }) => {
  if (!isOpen) {
    children = null;
  }
  let arrow = <i className="fas fa-chevron-up"></i>;

  if (!isOpen) {
    arrow = <i className="fas fa-chevron-down"></i>;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          {arrow}
        </button>
      </div>
      <div className="expand__content"> {children}</div>
    </div>
  );
};

export default Expand;
