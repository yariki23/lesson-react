import React from 'react';
import moment from 'moment';

const Profile = props => {
  console.log();
  return (
    <>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {moment(props.userData.birthDate).format('DD MMM YY')} in{' '}
        {props.userData.birthPlace}
      </div>
    </>
  );
};

export default Profile;
