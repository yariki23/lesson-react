import React from 'react';

const Expand = ({ toggleExpandText, isOpen, children, title }) => {
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
        <button className="expand__toggle-btn" onClick={toggleExpandText}>
          {arrow}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Expand;
