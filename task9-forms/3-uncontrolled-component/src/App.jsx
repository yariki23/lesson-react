import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = (userDate) => {
    console.log(userDate);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
