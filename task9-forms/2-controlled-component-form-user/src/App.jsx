import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser = objUser => {
    console.log(objUser);
  };
  render() {
    return <UserForm createUser={this.createUser} />;
  }
}

export default App;
