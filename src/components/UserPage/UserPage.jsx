import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';

import { getUserInfo, getUserRepos } from "../../api";
import { SearchBar } from "../SearchBar";
import { RepoList } from '../RepoList';

import './UserPage.scss';

export const UserPage = ({
  login,
  changePlaceholder,
  placeholder,
}) => {
  const [userRepos, setUserRepos] = useState([]);
  const [prepareLogin, setPrepareLogin] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [dateCreating, setDateCreating] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(false);

  const maxLoginLength = 13;

  const handleQuery = (event) => {
    const {value} = event.target;

    setSearchQuery(value);
  }

  useEffect(() => (
    changePlaceholder('Search for Users Repositories')
  ), [changePlaceholder]);

  useEffect(() => {

    if (login.length > maxLoginLength) {
      setPrepareLogin(
        `${login.slice(0, maxLoginLength)}...`
      )
    } else {
      setPrepareLogin(login)
    }

  }, [login]);


  useEffect (() => {

    getUserInfo(login)
      .then(userInfo  => {
        setUserInfo({
          avatar_url: userInfo.avatar_url,
          email: userInfo.email,
          location: userInfo.location,
          followers: userInfo.followers,
          following: userInfo.following,
          bio: userInfo.bio,
          login: userInfo.login,
          created_at: userInfo.created_at,
        })

        setDateCreating(userInfo.created_at.slice(0, 10));
      })

  }, []);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && searchQuery) {
      getUserRepos(login)
        .then(userRepos => {
          setUserRepos(userRepos.filter(
          repo => repo.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
          ))
        });

      if (userRepos.length === 0) {
        setError(true)
      } else {
        setError(false)
      }
    }

    if (isMounted && !searchQuery) {
      getUserRepos(login)
        .then(setUserRepos)
    }


    return () => {isMounted = false}
  },[searchQuery, userRepos.length]);

  return(
    <div className="user-page">
      <div className="user-page__info info">
        <img
          className="info__avatar"
          src={userInfo.avatar_url}
          alt="Avatar"
        />

        <div className="info__items">
          <p
            className="info__items__login"
            data-tip={login}
            data-type="info"
          >
            {prepareLogin}
          </p>

          {
            prepareLogin.length > maxLoginLength
              && <ReactTooltip />
          }

          <p>
            {userInfo.email || (
              <span className="info__items__email">
                Email not found
              </span>
            )}
          </p>

          <p>
            {userInfo.location || (
              <span className="info__items__location">
                Location not found
              </span>)}
          </p>

          <p className="info__items__data">
            {dateCreating}
          </p>

          <p>
            Followers:
            {' '}
            <span className="info__items__followers-value">
            {userInfo.followers}
          </span>
          </p>

          <p>
            Following:
            {' '}
            <span className="info__items__following-value">
            {userInfo.following}
          </span>
          </p>
        </div>
      </div>
      <div className="user-page__wrap-bio">
        <p className="user-page__bio">
          <span className="user-page__bio__word">
           BIO:
          </span>
          {' '}
          {userInfo.bio
          || (
            <span className="user-page__bio__empty">
              User does not show information about him
            </span>
          )}
        </p>
      </div>

      <div className="user-page__search-bar">
        <SearchBar
          placeholder={placeholder}
          getSearchQuery={handleQuery}
        />
      </div>

      {error && (
        <span className="user-page__error">
          No matches found
        </span>
      )}
      <RepoList
        repos={userRepos}
        userLogin={login}
      />
    </div>
  )
}

UserPage.propTypes = {
  login: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changePlaceholder: PropTypes.func.isRequired,
}
