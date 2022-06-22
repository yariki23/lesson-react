import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return <UserForm createUser={this.createUser} />;
  }
}

export default App;
