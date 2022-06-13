import React from 'react';
import GuestGreeting from './GuestGreeting.jsx';
import UserGreeting from './UserGreeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    const showBtn = this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );

    const showTitle = this.state.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

    return (
      <div className="panel">
        {showTitle} {showBtn}
      </div>
    );
  }
}

export default Auth;
