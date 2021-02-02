import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { UsersList } from '../UsersList';
import { SearchBar } from '../SearchBar';
import { getQueryUsers, getUsers } from "../../api";

import './Home.scss';

const usersPreview = 10;

export const Home = ({
  selectPage,
  placeholder,
  changePlaceholder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    changePlaceholder('Search for Users');

    if (isMounted && searchQuery) {
      getQueryUsers(searchQuery)
        .then(queryUsers =>
          setUsers(queryUsers
            .slice(0, usersPreview)));

      if (users.length === 0) {
        setError(true)
      } else {
        setError(false)
      }
    }

    if (isMounted && searchQuery === '') {
      getUsers()
        .then(users => {
          setUsers(users)
        });
    }

    return () => {isMounted = false};
  }, [searchQuery, users.length, changePlaceholder]);

  useEffect(() => {
    getUsers()
      .then(usersList => {
        setUsers(usersList)
      });
  }, []);

  const handleQuery = (event) => {
    const {value} = event.target;

    setSearchQuery(value);
  }

  return (
    <>
      <SearchBar
        getSearchQuery={handleQuery}
        searchQuery={searchQuery}
        placeholder={placeholder}
      />
      {error ? (
        <span className="home-page__error">
          No matches found
        </span>
      ) : (
        <UsersList
          users={users}
          selectPage={selectPage}
        />
      )}
    </>
  )
}

Home.propTypes = {
  selectPage: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  changePlaceholder: PropTypes.func.isRequired,
}
