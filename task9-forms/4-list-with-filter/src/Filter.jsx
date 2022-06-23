import React from 'react';
import User from './User';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: props.users.length,
    };
    this.filterUser = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { type, value } = event.target;

    this.setState({
      [type]: value,
    });
  };

  render() {
    const filterUser = this.props.users.filter(user => user.name.indexOf(this.state.text) > -1);

    return (
      <div>
        <div className="filter">
          <span className="filter__count">{this.state.count}</span>
          <input
            type="text"
            className="filter__input"
            value={this.state.text}
            onChange={(this.handleChange)}
          />
        </div>
        <ul className="users">
          {filterUser.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
