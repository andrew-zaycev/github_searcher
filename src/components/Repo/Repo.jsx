import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';

import './Repo.scss';

export const Repo = ({
  forksCount,
  starsCount,
  repoName,
  userLogin,
}) => {
  const [prepareRepoName, setPrepareRepoName] = useState('');
  const [loading, setLoading] = useState(true);
  const repoLink = `https://github.com/${userLogin}/${repoName}`;

  useEffect(() => {
    if (repoName.length > 16) {
      setPrepareRepoName(`${repoName.slice(0, 25)}...`)
    } else {
      setPrepareRepoName(repoName)
    }
  }, [repoName]);

  useEffect(() => {
    if (prepareRepoName !== '' ) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  })

  return(
    <div className="user-page__card-repo card-repo">
      {loading ? (
        <div className="card-repo__loader">
          <Loader />
        </div>
      ) : (
        <>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="card-repo__repo-name"
          >
            {prepareRepoName}
          </a>
          <div className="card-repo__wrap-items">
          <p className="card-repo__wrap-items__forks">
            <span className="card-repo__wrap-items__forks__count">
              {forksCount}
            </span>
            {' '}
            Forks
          </p>
          <p
          className="card-repo__wrap-items__stars"
          >
          <span className="card-repo__wrap-items__stars__count">
        {starsCount}
          </span>
            {' '}
          Stars
          </p>
          </div>
        </>
      )}
    </div>
  )
}

Repo.propTypes = {
  forksCount: PropTypes.number.isRequired,
  starsCount: PropTypes.number.isRequired,
  repoName: PropTypes.string.isRequired,
  userLogin: PropTypes.string.isRequired,
}
