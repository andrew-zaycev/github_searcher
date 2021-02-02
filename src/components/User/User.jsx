import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { getUserInfo } from "../../api";
import { Loader } from '../Loader';

import './User.scss';

const maxLoginLength = 13;

export const User = ({
  login,
  avatar_url,
  selectPage,
}) => {
  const [repos, setRepos] = useState('');
  const [prepareLogin, setPrepareLogin] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (login.length > maxLoginLength) {
      setPrepareLogin(`${login.slice(0, maxLoginLength)}...`);
    } else {
      setPrepareLogin(login);
    }

    getUserInfo(login)
      .then(userInfo => {
        if (isMounted) {
          setRepos(userInfo.public_repos);
        }
      })

      return () => {isMounted = false};
  }, [login]);

  useEffect(() => {
    if (repos === '') {
      setLoading(true)
    } else (
      setLoading(false)
    )
  }, [repos]);

  return (
    <div
      className="userCard"
      onClick={() => {
        selectPage(login);
      }}
    >
      {!loading ? (
        <>
          <div className="userCard__item-wrap">
            <img
              className="userCard__avatar"
              src={avatar_url}
              alt='User avatar'
            />
            <p
              className="userCard__login"
              data-tip={login}
              data-type="info"
            >
              {prepareLogin}
            </p>
            {login.length > maxLoginLength
              && <ReactTooltip />
            }
          </div>
          <div
            className="userCard__repo"
          >
            <p>Repo:</p>
            <p
              className="userCard__value-repo"
            >
              {repos}
            </p>
          </div>
        </>
      ) : (
        <div className="userCard__loader">
          <Loader />
        </div>
      )}
    </div>
  )
}

User.propTypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  selectPage: PropTypes.func.isRequired,
}
