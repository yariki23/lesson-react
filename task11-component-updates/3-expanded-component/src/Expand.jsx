import React from 'react';

const Expand = ({ toggleExpandText, isOpen, children, title }) => {
  let arrowToggle = <i className="fas fa-chevron-up"></i>;

  if (!isOpen) {
    arrowToggle = <i className="fas fa-chevron-down"></i>;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={toggleExpandText}>
          {arrowToggle}
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Expand;
