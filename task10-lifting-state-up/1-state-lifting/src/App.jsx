import React, { Component } from 'react';
import UserProfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

class Page extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then(response => response.json())
      .then(userData =>
        this.setState({
          userData,
        }),
      );
  };

  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default Page;
// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version
// 4. declare state (what, where) and props
// 5. write logic