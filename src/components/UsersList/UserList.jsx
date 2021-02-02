import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const UsersList = ({
  users,
  selectPage,
  }) => {

  return(
  users.map(user => (
    <User
      key={user.id}
      {...user}
      selectPage={selectPage}
    />
  ))
  )
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  selectPage: PropTypes.func.isRequired,
}
