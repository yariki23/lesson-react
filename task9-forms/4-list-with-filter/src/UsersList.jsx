import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UserList extends React.Component {
  state = {
    filterText: '',
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
        <Filter users={this.props.users} />
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
