import React from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UserList extends React.Component {
  state = {
    filterText: '',
    users: this.props.users,
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      filterText: value,
    });
    console.log(value);
    console.log(this.state.users);
  };

  render() {
    let filterUsers = this.props.users.filter(user => user.name.includes(this.state.filterText));
    return (
      <div>
        <Filter
          onChange={this.onChange}
          users={this.state.users}
          filterText={this.state.filterText}
          count={filterUsers.length}
        />
        <ul className="users">
          {filterUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
