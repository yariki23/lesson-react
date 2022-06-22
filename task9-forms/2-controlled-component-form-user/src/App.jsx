import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = obj => {
    // event.preventDefault();
    console.log(obj);
  };
  render() {
    return <UserForm createUser={this.createUser} />;
  }
}

export default App;
