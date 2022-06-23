import React from 'react';
import User from './User';

class Filter extends React.Component {
  onChange = () => {
    this.props.onChange;
  };

  render() {
    // const filterUser = this.props.users.filter(user => user.name.indexOf(this.state.text) > -1);
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.props.filterText}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Filter;
