import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      count: props.users.length,
    };
  }

  handleChange = event => {
    const { type, value } = event.target;

    this.setState({
      [type]: value,
    });
    // const filterUser = this.props.users;
    // filterUser.filter(user => user.name.indexOf(this.state.text) > -1);
    // console.log(filterUser);
    // console.log(this.state.text);
  };

  filterUser() {
    this.props.users.filter(user => user.name.indexOf(this.state.text) > -1);
  }

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.state.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
