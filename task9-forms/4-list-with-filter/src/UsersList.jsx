import React from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UserList extends React.Component {
  state = {
    filterText: '',
    count: this.props.users.length,
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filterText: value,
    });
    console.log(value);
  };

  render() {
    // let usersList = <Filter />
    // if (this.state.sorting) {
    //   usersList = this.props.users
    //     .slice()
    //     .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    // } else {
    //   usersList = this.props.users;
    // }

    return (
      <div>
        <Filter
          onChange={this.onChange}
          users={this.props.users}
          filterText={this.state.filterText}
          count={this.state.count}
        />
        <ul className="users">
          {this.props.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
