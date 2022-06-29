import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Greeting from './Greeting.jsx';

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

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {showBtn}
      </div>
    );
  }
}

export default Auth;
